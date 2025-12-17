import Banners from "@/components/pages/landing/Banners";
import Datas from "@/components/pages/landing/Datas";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banners></Banners>
      <Datas></Datas>
      <section>others img</section>
      <section>branchs</section>
      <section>motos</section>
      <section>aliados financieros</section>
      <section>preguntas de solicitud</section>
      <section>others img</section>
      <section>blog</section>
    </div>
  );
}
