import { ReactNode } from "react";

type PageTitlePropsType = Readonly<{
  children: ReactNode,
  className?: string
}>

export const PageTitle = ({ children, className =''}: PageTitlePropsType) => {
  // js variable
  return (
    <h1
      className={`text-teal-950 font-semibold text-shadow-lg text-4xl ${className}`}
    >
      {children}
    </h1>
  );
};

export const PageSectionTitle = ({ children, className = "" }: PageTitlePropsType) => {
  return (
    <h2 className={`font-semibold text-teal-950 text-shadow-lg text-3xl ${className}`}>
      {children}
    </h2>
  );
};