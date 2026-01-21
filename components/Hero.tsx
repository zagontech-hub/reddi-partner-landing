import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full max-w-360 mx-auto px-5 md:px-12.5 py-7.5">
      <div className="w-full h-96.5 rounded-[30px] flex flex-col justify-center items-center text-center gap-6 relative overflow-hidden">
        <Image
          src="/women-home.jpg"
          alt="Women working together"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="z-10 flex flex-col items-center gap-4 max-w-175 px-4">
          <h1 className="font-poppins font-bold text-[28px] md:text-[32px] leading-10 text-white">
            Registra tu negocio en Reddi
          </h1>
          <p className="font-poppins font-medium text-[16px] md:text-[18px] leading-5.5 text-white max-w-150">
            Haz parte de nuestra red de aliados y vende más con Reddi. Conecta
            con miles de clientes y haz crecer tu negocio.
          </p>

          <Link
            href="https://reddi-app.com/partner/registro"
            className="mt-2 bg-[#47BB7E] hover:bg-[#3ea56f] transition-colors text-white rounded-xl px-5 py-2.5 w-full max-w-63 h-11 flex items-center justify-center font-poppins font-medium text-[14px]"
          >
            Registrar mi negocio en Reddi
          </Link>
        </div>
      </div>
    </section>
  );
}
