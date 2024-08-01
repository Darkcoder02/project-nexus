import {useState} from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

function Input({
  type,
  placeholder,
  name,
  id,
  value,
  handleChange,
}) 

{
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-white my-2 border-2 rounded-xl flex items-center justify-between px-2">
      <input
        type={type==='password' ? (showPassword ? 'text':'password'): type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        className="p-2 my-2 rounded-xl bg-transparent w-full"
        required
      />
      {type === "password" &&
        (showPassword ? (
          <IoEyeOff
            className="text-xl"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <IoEye className="text-xl" onClick={() => setShowPassword(true)} />
        ))}
    </div>
  );
}

export default Input;
