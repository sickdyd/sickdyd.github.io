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
      <div className="mb-6 flex items-start gap-8 rounded-md bg-secondary p-6 text-quinary shadow">
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
          className="flex-shrink-0 flex-grow-0 rounded-md drop-shadow-md"
          src="/me.jpg"
          width={170}
          height={216}
          alt="Photo of Roberto Reale"
        />
      </div>
      <Subtitle>SKILLS</Subtitle>
      <div className="mb-6 flex flex-row-reverse items-start gap-8 rounded-md bg-secondary p-6 text-quinary shadow">
        <div className="w-full">
          <p className="mb-4 font-semibold text-primary">
            I fix problems. I build things. I make stuff work.
          </p>
          <p className="mb-4">
            I specialize in JavaScript (vanilla, React, Node.js), Ruby on Rails,
            and Kubernetes. I learn what I need in order to solve the issues
            assigned.
          </p>
          <p>
            I have experience working with an engineering team, team leader and
            solo. I own the challenges and I can complete my tasks
            independently. Check out my{" "}
            <Link href="/recent-work">recent work</Link>!
          </p>
        </div>
        <div className="flex min-w-28 flex-col">
          <Image
            className="mb-6 mt-2 h-28 w-28 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/react.svg"
            width={112}
            height={112}
            alt="React icon"
          />
          <Image
            className="mb-2 mt-2 h-28 w-28 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/rubyonrails.svg"
            width={112}
            height={112}
            alt="Ruby on Rails icon"
          />
        </div>
      </div>
      <Subtitle>CERTIFICATIONS</Subtitle>
      <div className="mb-6 flex items-center gap-8 rounded-md bg-secondary p-6 text-quinary shadow">
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
          className="mb-2 mt-2 h-20 w-20 rounded-md bg-slate-50 p-2 drop-shadow-md"
          src="/icons/kubernetes.svg"
          width={80}
          height={80}
          alt="Kubernetes icon"
        />
      </div>
      <Subtitle>OTHER AREAS OF EXPERTISE</Subtitle>
      <div className="mb-6 grid w-full grid-flow-row grid-cols-8 gap-8 rounded-md bg-secondary p-6 text-quinary shadow">
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/next.js.svg"
            width={48}
            height={48}
            alt="Next.js icon"
          />
          <p className="mt-2 text-center text-xs">Next.js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/redux.svg"
            width={48}
            height={48}
            alt="Redux icon"
          />
          <p className="mt-2 text-center text-xs">Redux</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/jest.svg"
            width={48}
            height={48}
            alt="Jest icon"
          />
          <p className="mt-2 text-center text-xs">Jest</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/typescript.svg"
            width={48}
            height={48}
            alt="Typescript icon"
          />
          <p className="mt-2 text-center text-xs">Typescript</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/css.svg"
            width={48}
            height={48}
            alt="CSS icon"
          />
          <p className="mt-2 text-center text-xs">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/tailwindcss.svg"
            width={48}
            height={48}
            alt="Tailwind icon"
          />
          <p className="mt-2 text-center text-xs">Tailwind</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/haml.svg"
            width={48}
            height={48}
            alt="HAML icon"
          />
          <p className="mt-2 text-center text-xs">HAML</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/node.js.svg"
            width={48}
            height={48}
            alt="Node.js icon"
          />
          <p className="mt-2 text-center text-xs">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/redis.svg"
            width={48}
            height={48}
            alt="Redis icon"
          />
          <p className="mt-2 text-center text-xs">Redis</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/mongodb.svg"
            width={48}
            height={48}
            alt="MongoDB icon"
          />
          <p className="mt-2 text-center text-xs">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/mysql.svg"
            width={48}
            height={48}
            alt="MySQL icon"
          />
          <p className="mt-2 text-center text-xs">MySQL</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/postgresql.svg"
            width={48}
            height={48}
            alt="PostgreSQL icon"
          />
          <p className="mt-2 text-center text-xs">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/aws.svg"
            width={48}
            height={48}
            alt="AWS icon"
          />
          <p className="mt-2 text-center text-xs">AWS</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/gcp.svg"
            width={48}
            height={48}
            alt="GCP icon"
          />
          <p className="mt-2 text-center text-xs">GCP</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/heroku.svg"
            width={48}
            height={48}
            alt="Heroku icon"
          />
          <p className="mt-2 text-center text-xs">Heroku</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="h-12 w-12 rounded-md bg-slate-50 p-2 drop-shadow-md"
            src="/icons/electron.svg"
            width={48}
            height={48}
            alt="Electron icon"
          />
          <p className="mt-2 text-center text-xs">Electron</p>
        </div>
      </div>

      <Subtitle>OPEN SOURCE</Subtitle>
      <div className="mb-6 flex flex-row-reverse items-center gap-8 rounded-md bg-secondary p-6 text-quinary shadow">
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
          .
        </p>
        <Image
          className="mb-2 mt-2 h-20 w-20 rounded-md bg-slate-50 p-2 drop-shadow-md"
          src="/icons/npm.svg"
          width={80}
          height={80}
          alt="npm icon"
        />
      </div>
      <Subtitle>COMMUNITY</Subtitle>
      <div className="mb-6 flex items-center gap-8 rounded-md bg-secondary p-6 text-quinary shadow">
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
          that connects developers and entrepreneurs from all over the world.
        </p>
        <Image
          className="mb-2 mt-2 h-28 w-28 rounded-md bg-slate-50 p-2 drop-shadow-md"
          src="/icons/meetup.svg"
          width={112}
          height={112}
          alt="Meetup icon"
        />
      </div>
      <div className="mb-6 flex flex-row-reverse items-center gap-8 rounded-md bg-secondary p-6 text-quinary shadow">
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
          className="mb-2 mt-2 h-20 w-20 rounded-md bg-slate-50 p-2 drop-shadow-md"
          src="/icons/mirc.svg"
          width={80}
          height={80}
          alt="mIRC icon"
        />
      </div>
      <p className="self-center text-quinary">
        Drop me an{" "}
        <Link
          href="mailto:roberto.reale.ja@gmail.com"
          aria-label="Send email to Roberto Reale"
        >
          email
        </Link>{" "}
        and let’s start a conversation :-)
      </p>
    </div>
  );
}
