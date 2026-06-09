import { InputHTMLAttributes } from "react";

interface LabelProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  leftIcon?: string;
  rightIcon?: string;
}

export const Input = ({ labelName, leftIcon, rightIcon, className, ...props }: LabelProps) => {
  return (
    <label className="w-full flex flex-col">
      <span className="block ml-2 mb-1 text-sm font-bold">{ labelName }</span>
      <div className="relative w-full">
        {leftIcon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 flex items-center justify-center">
            <span className={leftIcon}>{leftIcon}</span>
          </span>
        )}
        <input
          className={`border border-gray-300 p-2 rounded w-full ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''} ${className || ""}`}
          {...props}
        />
        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 flex items-center justify-center">
            <span className={rightIcon}>{rightIcon}</span>
          </span>
        )}
      </div>
    </label>
  );
};
