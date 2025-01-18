import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn } from "./pages/signin"
import { Signup } from "./pages/signup";
import { Header } from "./components/header";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./pages/dashboard";
import { Client } from "./pages/clients";
import { NewClient } from "./pages/newClient";
import { NewOrder } from "./pages/newOrder";
import { OrderbyId } from "./pages/order";


function App() {

  return (
    <>
      <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cliente" element={<Client />} />
            <Route path="/novo-cliente" element={<NewClient />} />
            <Route path="/nova-ordem" element={<NewOrder />} />
            <Route path="/ordem/:orderId" element={<OrderbyId />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
