import Image from "next/image";
import CodeBlock from "./components/CodeBlock";
import Link from "./components/Link";
import Quote from "./components/Quote";
import Subtitle from "./components/Subtitle";

export default function Home() {
  return (
    <div className="justify-left flex flex-col items-start">
      <Quote
        cite="https://quoteinvestigator.com/2015/04/02/simple/"
        quote="Simplicity is the ultimate sophistication."
        author="Unknown"
      />
      <div className="mb-6 flex items-start gap-8 rounded-lg bg-white p-6 shadow">
        <div className="w-full">
          <p className="mb-4">
            👋 Hi, I'm Roberto Reale. Welcome to my homepage!
          </p>
          <p className="mb-4">
            I am a passionate web developer with over 14 years of experience.
          </p>
          <p>
            I am currently employed as a senior software engineer at{" "}
            <Link href="https://aluminum.io/" target="_blank">
              Aluminum.io
            </Link>
            .
          </p>
        </div>
        <Image
          className="flex-shrink-0 flex-grow-0 rounded-lg bg-white drop-shadow-md"
          src="/me.jpg"
          width={170}
          height={216}
          alt="Photo of Roberto Reale"
        />
      </div>
      <Subtitle>SKILLS</Subtitle>
      <div className="mb-6 flex flex-row-reverse items-start gap-8 rounded-lg bg-white p-6 shadow">
        <div className="w-full">
          <p className="mb-4 font-semibold">
            I fix problems. I build things. I make stuff work.
          </p>
          <p className="mb-4">
            I specialize in JavaScript (vanilla, React, Node.js), Ruby on Rails,
            Kubernetes and I learn what I need in order to solve the issues
            assigned.
          </p>
          <p>
            I have experience working with an engineering team, team leader and
            solo. I own the challenges and I can complete my tasks
            independently. Check out my{" "}
            <Link href="/recent-work">recent work</Link> to know more.
          </p>
        </div>
        <div className="flex min-w-28 flex-col">
          <Image
            className="mb-6 mt-2 h-28 w-28 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/react.svg"
            width={96}
            height={96}
            alt="React icon"
          />
          <Image
            className="mb-2 mt-2 h-28 w-28 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/rubyonrails.svg"
            width={96}
            height={96}
            alt="Ruby on Rails icon"
          />
        </div>
      </div>
      <Subtitle>CERTIFICATIONS</Subtitle>
      <div className="mb-6 flex items-center gap-8 rounded-lg bg-white p-6 shadow">
        <p>
          On top of my web development skills, I am proud to be a{" "}
          <Link
            target="_blank"
            href="https://www.credly.com/badges/08104359-709a-4150-b3b7-297d90f26ccf/public_url"
            aria-label="Certified Kubernetes Administrator badge on Credly"
          >
            Certified Kubernetes Administrator
          </Link>{" "}
          and a Certified Kubernetes Security Specialist.
        </p>
        <Image
          className="mb-2 mt-2 h-28 w-28 rounded-lg bg-slate-50 p-2 drop-shadow-md"
          src="/icons/kubernetes.svg"
          width={96}
          height={96}
          alt="Kubernetes icon"
        />
      </div>
      <Subtitle>OTHER AREAS OF EXPERTISE</Subtitle>
      <div className="mb-6 flex w-full flex-wrap items-center justify-center gap-8 rounded-lg bg-white p-6 shadow">
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/next.js.svg"
            width={96}
            height={96}
            alt="Next.js icon"
          />
          <p className="mt-2 text-center text-xs">Next.js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/redux.svg"
            width={96}
            height={96}
            alt="Redux icon"
          />
          <p className="mt-2 text-center text-xs">Redux</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/jest.svg"
            width={96}
            height={96}
            alt="Jest icon"
          />
          <p className="mt-2 text-center text-xs">Jest</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/typescript.svg"
            width={96}
            height={96}
            alt="Typescript icon"
          />
          <p className="mt-2 text-center text-xs">Typescript</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/css.svg"
            width={96}
            height={96}
            alt="CSS icon"
          />
          <p className="mt-2 text-center text-xs">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/tailwindcss.svg"
            width={96}
            height={96}
            alt="Tailwind icon"
          />
          <p className="mt-2 text-center text-xs">Tailwind</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/haml.svg"
            width={96}
            height={96}
            alt="HAML icon"
          />
          <p className="mt-2 text-center text-xs">HAML</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/node.js.svg"
            width={96}
            height={96}
            alt="Node.js icon"
          />
          <p className="mt-2 text-center text-xs">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/redis.svg"
            width={96}
            height={96}
            alt="Redis icon"
          />
          <p className="mt-2 text-center text-xs">Redis</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/mongodb.svg"
            width={96}
            height={96}
            alt="MongoDB icon"
          />
          <p className="mt-2 text-center text-xs">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/mysql.svg"
            width={96}
            height={96}
            alt="MySQL icon"
          />
          <p className="mt-2 text-center text-xs">MySQL</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/postgresql.svg"
            width={96}
            height={96}
            alt="PostgreSQL icon"
          />
          <p className="mt-2 text-center text-xs">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/aws.svg"
            width={96}
            height={96}
            alt="AWS icon"
          />
          <p className="mt-2 text-center text-xs">AWS</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/gcp.svg"
            width={96}
            height={96}
            alt="GCP icon"
          />
          <p className="mt-2 text-center text-xs">GCP</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/heroku.svg"
            width={96}
            height={96}
            alt="Heroku icon"
          />
          <p className="mt-2 text-center text-xs">Heroku</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-14 w-14 rounded-lg bg-slate-50 p-2 drop-shadow-md"
            src="/icons/electron.svg"
            width={96}
            height={96}
            alt="Electron icon"
          />
          <p className="mt-2 text-center text-xs">Electron</p>
        </div>
      </div>

      <Subtitle>OPEN SOURCE</Subtitle>
      <div className="mb-6 flex flex-row-reverse items-center gap-8 rounded-lg bg-white p-6 shadow">
        <p>
          Striving to give back to the thriving Open Source community, in my
          free time I contribute with various{" "}
          <Link
            target="_blank"
            href="https://www.npmjs.com/~sickdyd"
            aria-label="npm packages on npmjs.com"
          >
            npm packages
          </Link>
          , some of which average 10k downloads per week.
        </p>
        <Image
          className="mb-2 mt-2 h-28 w-28 rounded-lg bg-slate-50 p-2 drop-shadow-md"
          src="/icons/npm.svg"
          width={96}
          height={96}
          alt="npm icon"
        />
      </div>
      <Subtitle>COMMUNITY</Subtitle>
      <div className="mb-6 flex items-center gap-8 rounded-lg bg-white p-6 shadow">
        <p>
          Based in the vibrant city of Osaka, I’m always looking to connect with
          like-minded professionals and enthusiasts. For that reason, I created
          a{" "}
          <Link
            href="https://www.meetup.com/osaka-digital-nomads-meetup-group/"
            target="_blank"
            aria-label="digital nomads meetup"
          >
            weekly meetup event
          </Link>{" "}
          that connects developers from all over the world.
        </p>
        <Image
          className="mb-2 mt-2 h-28 w-28 rounded-lg bg-slate-50 p-2 drop-shadow-md"
          src="/icons/meetup.svg"
          width={96}
          height={96}
          alt="Meetup icon"
        />
      </div>
      <div className="mb-6 flex flex-row-reverse items-center gap-8 rounded-lg bg-white p-6 shadow">
        <p>
          You can find me on{" "}
          <Link href="https://libera.chat/" target="_blank">
            irc.libera.chat
          </Link>
          . I regularly join <CodeBlock>#javascript</CodeBlock>,{" "}
          <CodeBlock>#react</CodeBlock>, <CodeBlock>#node.js</CodeBlock>,{" "}
          <CodeBlock>#rubyonrails</CodeBlock> and{" "}
          <CodeBlock>#kubernetes</CodeBlock>. My nickname is{" "}
          <span className="font-semibold">sickdyd</span>.
        </p>
        <Image
          className="mb-2 mt-2 h-28 w-28 rounded-lg bg-slate-50 p-2 drop-shadow-md"
          src="/icons/mirc.svg"
          width={96}
          height={96}
          alt="mIRC icon"
        />
      </div>
      <p className="self-center">
        Feel free to reach out! Drop me an{" "}
        <Link
          href="mailto:roberto.reale.ja@gmail.com"
          aria-label="Send email to Roberto Reale"
        >
          email
        </Link>{" "}
        and let’s start a conversation. :-)
      </p>
    </div>
  );
}
