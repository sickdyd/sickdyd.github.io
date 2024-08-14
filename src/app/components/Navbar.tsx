import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], weight: ["700"] });

export default function Navbar() {
  return (
    <nav
      className={`text-white font-bold border-b ${inter.className} bg-primary`}
    >
      <ul className="flex max-w-screen-md m-auto p-4 uppercase text-sm font-bold gap-6 items-center justify-between ">
        <li className="mr-auto">Roberto Reale</li>
        <li>Recent work</li>
        <li>Email</li>
        <li>
          <Image src="/github-icon.svg" alt="Logo" width={20} height={20} />
        </li>
      </ul>
    </nav>
  );
}
