import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black py-16 px-5 md:px-12.5 text-[#9CA3AF]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10 flex-wrap">
          {/* Brand Column */}
          <div className="flex flex-col gap-4 w-full lg:w-70">
            <Link
              href="/"
              className="font-poppins font-bold text-[24px] text-[#00C48C]"
            >
              Reddi
            </Link>
            <p className="font-poppins text-[16px]">
              Todo lo que necesitas, directo a tu villa o yate
            </p>
          </div>

          {/* Links Columns Container */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-10 md:gap-8 lg:gap-25 w-full lg:w-auto">
            {/* Reddi */}
            <div className="flex flex-col gap-4 w-full sm:w-50 lg:w-70">
              <h3 className="font-poppins font-semibold text-[18px] text-white">
                Reddi
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#"
                    className="font-poppins text-[16px] hover:text-white"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-poppins text-[16px] hover:text-white"
                  >
                    Categorías
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-poppins text-[16px] hover:text-white"
                  >
                    Cómo funciona
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-poppins text-[16px] hover:text-white"
                  >
                    Beneficios
                  </Link>
                </li>
              </ul>
            </div>

            {/* Soporte */}
            <div className="flex flex-col gap-4 w-full sm:w-50 lg:w-70">
              <h3 className="font-poppins font-semibold text-[18px] text-white">
                Soporte
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#"
                    className="font-poppins text-[16px] hover:text-white"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-poppins text-[16px] hover:text-white"
                  >
                    Centro de ayuda
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4 w-full sm:w-50 lg:w-70">
              <h3 className="font-poppins font-semibold text-[18px] text-white">
                Legal
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#"
                    className="font-poppins text-[16px] hover:text-white"
                  >
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="font-poppins text-[16px] hover:text-white"
                  >
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-poppins text-[16px]">
            © 2024 Reddi. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {/* Social Icons */}
            <Link href="#" className="text-[#9CA3AF] hover:text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-[#9CA3AF] hover:text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link href="#" className="text-[#9CA3AF] hover:text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
