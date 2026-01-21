import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Categorías", href: "#" },
  { label: "Cómo funciona", href: "#" },
  { label: "Beneficios", href: "#" },
  { label: "Ser socio", href: "https://reddi-app.com/partner/registro" },
];

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-[#8C8C8C] h-26 flex items-center px-5 md:px-12.5 justify-center relative box-border max-w-360 mx-auto">
      {/* Logo */}
      <div className="shrink-0 absolute left-5 md:left-12.5">
        <Link href="/">
          <Image src="/logo.svg" alt="Reddi" width={120} height={40} priority />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex gap-12.5 items-center">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="font-poppins font-medium text-[16px] leading-5 text-black hover:text-[#47BB7E] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
