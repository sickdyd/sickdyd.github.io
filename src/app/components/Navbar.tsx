import { Inter } from "next/font/google";
import NextLink from "next/link";
import GithubIcon from "../assets/GithubIcon";

const inter = Inter({ subsets: ["latin"], weight: ["700"] });

export default function Navbar() {
  return (
    <nav
      className={`fixed bg-primary font-bold text-white ${inter.className} w-full shadow-md z-10`}
    >
      <ul className="m-auto flex max-w-screen-md items-center justify-between gap-6 p-4 text-sm font-bold uppercase">
        <li className="mr-auto">
          <NextLink className="link" href="/">
            Roberto Reale
          </NextLink>
        </li>
        <li>
          <NextLink className="link" href="/recent-work">
            Recent work
          </NextLink>
        </li>
        <li>
          <NextLink className="link" href="mailto:roberto.reale.ja@gmail.com">
            Email
          </NextLink>
        </li>
        <li>
          <NextLink
            className="link"
            href="https://github.com/sickdyd"
            target="_blank"
          >
            <GithubIcon />
          </NextLink>
        </li>
      </ul>
    </nav>
  );
}
