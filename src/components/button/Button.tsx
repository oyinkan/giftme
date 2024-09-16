interface ButtonProps {
  value: any;
  className: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ value, className, onClick }) => {
  return (
    <button
      className={`text-md flex justify-center items-center gap-3 mt-3 w-full p-4 rounded-[12px] font-medium ${className}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
