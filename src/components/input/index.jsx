import { Eye, EyeClosed } from "lucide-react";
import {  useState } from "react";


export const Input = ({
  placeholder,
  label,
  id,
  type,
  value,
  onBlur,
  onChange,
}) => {
  const [toggleType, setToggleType] = useState(false);
  const handleToggle = () => {
    setToggleType(!toggleType);
  };
  return (
    <>
      <label htmlFor={id} className="flex flex-col text-sm w-full">
        <span>{label}</span>
        <div className="px-2 py-3 flex border-2 rounded-md items-center">
          <input
            onBlur={onBlur}
            className="w-full  outline-none bg-transparent"
            type={
              type == "password" ? (toggleType ? "text" : "password") : type
            }
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {type == "password" ? (
            <button onClick={handleToggle} type="button">
              {!toggleType ? <EyeClosed /> : <Eye />}
            </button>
          ) : (
            ""
          )}
        </div>
      </label>
    </>
  );
};
