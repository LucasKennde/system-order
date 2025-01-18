
export const Button = ({
  children,
  className,
  onClick,
  type,
}) => {
  return (
    <>
      <button
        className={`px-4 py-2 border-2 rounded-md ${className || ""}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};
