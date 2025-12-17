import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const links = [
    { id: 1, link: "", name: "Inicio" },
    { id: 2, link: "", name: "Conocenos" },
    { id: 3, link: "", name: "Marcas" },
    { id: 4, link: "", name: "Compra tu moto YA!!" },
    { id: 5, link: "", name: "Post-Venta" },
    { id: 6, link: "", name: "Blog" },
  ];

  return (
    <div className="fixed top-0 w-full h-16 bg-todo-otherbeige z-50 px-8 flex items-center shadow justify-center">

        
      <div className="absolute left-8">
        <Image
          alt="todomotos logo"
          src="/logo-todomotos-hd2.png"
          className="sm:w-45"
          width={220}
          height={80}
        />
      </div>
      <div className="lg:flex gap-6 hidden">
        {links.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="font-medium hover:text-todo-brick transition"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="absolute right-5 lg:hidden">
        <Menu />
      </div>
    </div>
  );
}
