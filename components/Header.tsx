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

      {/* Navigation - Se mantiene oculto en móbiles (hidden lg:flex) */}
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

      {/* Botón Ingresar */}
      {/* SE ELIMINÓ 'hidden sm:block' para que sea visible siempre */}
      <div className="absolute right-5 md:right-12.5">
        <Link
          href="https://reddi-app.com/partner/login"
          className="flex flex-row justify-center items-center gap-2 w-41.5 h-11 bg-black rounded-xl hover:bg-gray-800 transition-colors px-5 py-[10px]"
        >
          {/* Icono Login */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
              stroke="#47BB7E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 17L15 12L10 7"
              stroke="#47BB7E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 12H3"
              stroke="#47BB7E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Texto Ingresar */}
          <span className="font-poppins font-medium text-[14px] leading-4 text-white text-center">
            Ingresar
          </span>
        </Link>
      </div>
    </header>
  );
}
