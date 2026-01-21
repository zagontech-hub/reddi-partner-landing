import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#ECEFF0] py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-4xl text-[#111827] mb-2">
            Cómo funciona
          </h2>
          <p className="font-poppins text-[16px] md:text-[20px] text-[#4B5563]">
            Tres simples pasos para recibir todo lo que necesitas
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg p-6 w-full md:w-95 lg:w-100 h-auto md:h-50.5 flex flex-col items-center justify-center gap-5 shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1)] border border-[#E5E5E5]">
            <div className="w-12 h-12 bg-[#CDF7E7] rounded-lg flex items-center justify-center">
              <Image
                src="/people.png"
                alt="Más clientes"
                width={24}
                height={24}
              />
            </div>
            <div className="text-center">
              <h3 className="font-poppins font-semibold text-[20px] mb-2 text-black">
                Más clientes
              </h3>
              <p className="font-poppins text-[16px] text-[#4B5563]">
                Alcanza nuevos compradores en tu zona
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg p-6 w-full md:w-95 lg:w-100 h-auto md:h-50.5 flex flex-col items-center justify-center gap-5 shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1)] border border-[#E5E5E5]">
            <div className="w-12 h-12 bg-[#CDF7E7] rounded-lg flex items-center justify-center">
              <Image src="/chart.png" alt="Más ventas" width={24} height={24} />
            </div>
            <div className="text-center">
              <h3 className="font-poppins font-semibold text-[20px] mb-2 text-black">
                Más ventas
              </h3>
              <p className="font-poppins text-[16px] text-[#4B5563]">
                Incrementa tus ingresos mensualmente
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg p-6 w-full md:w-95 lg:w-100 h-auto md:h-50.5 flex flex-col items-center justify-center gap-5 shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1)] border border-[#E5E5E5]">
            <div className="w-12 h-12 bg-[#CDF7E7] rounded-lg flex items-center justify-center">
              <Image
                src="/phone.png"
                alt="Fácil gestión"
                width={24}
                height={24}
              />
            </div>
            <div className="text-center">
              <h3 className="font-poppins font-semibold text-[20px] mb-2 text-black">
                Fácil gestión
              </h3>
              <p className="font-poppins text-[16px] text-[#4B5563]">
                Administra todo desde tu móvil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
