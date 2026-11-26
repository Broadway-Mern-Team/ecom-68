import { ReactNode } from "react";

type FormLabelPropsType = Readonly<{
  children: ReactNode, 
  htmlFor?: string, 
  className?: string
}>
export const FormLabel = ({ children, htmlFor = "", className = "w-1/3" }: FormLabelPropsType) => {
  return (
    <label htmlFor={htmlFor} className={`font-semibold text-lg ${className}`}>
      {children}
    </label>
  );
};