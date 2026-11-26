import Link from "next/link";
import { ReactNode } from "react";


type LinkButtonProps = Readonly<{ 
  url: string, 
  children: ReactNode ,
  className?: string
}>;

export const LinkButton = ({url, children, className=`text-teal-700 border-teal-600`}: LinkButtonProps) => {

  return (
    <div className="w-full flex gap-3 items-center">
      <Link
        href={url}
        className={`w-full border  rounded-full flex items-center justify-center p-2 font-semibold ${className} hover:scale-103 transition duration-300`}
      >
        {children}
      </Link>
    </div>
  );
}