export default function WhyChooseReddi() {
  const benefits = [
    {
      title: "Crecimiento rápido",
      description:
        "Los aliados ven un incremento promedio del 30% en sus ventas durante el primer mes.",
    },
    {
      title: "Pagos seguros",
      description: "Recibe tus pagos de forma segura y puntual cada semana.",
    },
    {
      title: "Soporte 24/7",
      description:
        "Nuestro equipo está disponible para ayudarte cuando lo necesites.",
    },
    {
      title: "Reportes detallados",
      description:
        "Visualiza el rendimiento de tu negocio con reportes en tiempo real.",
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-5 md:px-28">
      <div className="max-w-304 mx-auto flex flex-col lg:flex-row items-center gap-13 ">
        {/* Left Image */}
        <div
          className="w-full lg:w-142.5 h-122 rounded-xl bg-cover bg-center shrink-0 bg-gray-300"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=570&q=80")',
          }}
        >
          {/* Placeholder for waiter image */}
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-13 max-w-148.5">
          <div className="flex flex-col gap-3.75">
            <h2 className="font-poppins font-bold text-[36px] leading-13.5 text-[#111827]">
              ¿Por qué elegir Reddi?
            </h2>
            <p className="font-open-sans font-semibold text-[20px] leading-6 text-[#4B5563]">
              Únete a cientos de negocios que ya están creciendo con nuestra
              plataforma
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="w-7 h-10 shrink-0 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#00C48C] flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col gap-1.25">
                  <h3 className="font-poppins font-semibold text-[24px] leading-7 text-black">
                    {benefit.title}
                  </h3>
                  <p className="font-open-sans font-semibold text-[20px] leading-6 text-[#525252]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
