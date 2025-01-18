import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/header";
import { Navbar } from "../../components/navbar";
import { toast } from "react-toastify";

export const OrderbyId = () => {
  const { orderId } = useParams(); 
  const navigate = useNavigate();
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const order = orders.find((order) => order.id == orderId);

  const handleFinalize = () => {
    order.status = "Finalizado";
    localStorage.setItem("orders", JSON.stringify(orders));
    toast.success("Status atualizado para Finalizado!");
    navigate("/dashboard");
  };

  const handleDelete = () => {
    if(order.status === "Finalizado") return toast.error("Ordem finalizada não pode ser excluída");
    const updatedOrders = orders.filter((o) => o.id !== orderId);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    toast.success("Ordem excluída com sucesso!");
    navigate("/dashboard");
  };

  if (!order) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600 text-lg">Ordem não encontrada.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 grid-rows-[100px_1fr_100px] w-screen h-screen">
        <Header
          element={{
            title: `Ordem de Serviço - ${order.id}`,
            back: "/dashboard",
          }}
        />
        <div className="p-6 flex flex-col items-center">
          <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Detalhes da Ordem
            </h2>
            <p className="text-lg text-gray-600">
              <strong>Cliente:</strong> {order.name}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Serviço:</strong> {order.service}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Status:</strong> {order.status}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Aberta em:</strong> {order.date}
            </p>
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleFinalize}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Finalizar
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};
