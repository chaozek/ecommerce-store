import { cn } from "@/lib/utils";
import { MouseEventHandler, ReactElement, forwardRef } from "react";
export interface ButtonProps {
  onClick?: MouseEventHandler;
  icon: ReactElement;
  className?: string;
}
const IconButton = ({ className, onClick, icon, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        `
        rounded-full
        flex
        items-center
        justify-center
        bg-white
        border
        shadow-md
        p-2
        hover:scale-110
        transition
        `,
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
