import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<BtnProps> = ({
  children,
  className,
  type,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        className,
        "cursor-pointer bg-violet-600  shadow-lg dark:shadow-zinc-600/45 font-bold uppercase duration-300 text-gray-100 ease-linear hover:-translate-y-1 active:scale-90 active:bg-violet-800"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
