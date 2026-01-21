import Link from "next/link";
import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  className?: string;
  children: ReactNode;
  id?: string;
}

const LinkButton = ({
  href,
  className = "",
  children,
  id,
}: LinkButtonProps) => {
  return (
    <Link id={id} href={href} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
