import { ReactNode } from "react";

type DividerWithTextProps = Readonly<{
  dividerTxt?: ReactNode,
  color?: string
}>

export const DividerWithText = ({dividerTxt="OR", color='bg-gray-400'}: DividerWithTextProps) => {
  return (
    <div className="w-full flex gap-3 items-center">
      <span className={`h-px w-full ${color}`}></span>
      <span className="text-lg font-semibold text-gray-900 text-shadow-xl">{dividerTxt}</span>
      <span className={`h-px w-full ${color}`}></span>
    </div>
  );
}