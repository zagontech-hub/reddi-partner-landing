import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseReddi from "@/components/WhyChooseReddi";
import GuestFooter from "@/components/layout/GuestFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="grow flex flex-col gap-0">
        <Hero />
        <HowItWorks />
        <WhyChooseReddi />
      </main>
      <GuestFooter />
    </div>
  );
}
