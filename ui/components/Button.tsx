import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
}

export const Button = ({ children, className, ...props}: ButtonProps) => {
  return (
    <button className={ `w-full text-center bg-black text-white py-3 rounded cursor-pointer ${ className || ''}` } { ...props }>
      { children }
    </button>
  )
}