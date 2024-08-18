import Image from "next/image";
import CodeBlock from "./components/CodeBlock";
import Link from "./components/Link";
import Quote from "./components/Quote";
import Subtitle from "./components/Subtitle";
import TextWrapper from "./components/TextWrapper";

export default function Home() {
  return (
    <>
      <Quote
        cite="https://quoteinvestigator.com/2015/04/02/simple/"
        quote="Simplicity is the ultimate sophistication."
        author="Unknown"
      />
      <TextWrapper>
        <div className="mb-6 flex items-start gap-6 rounded-lg bg-slate-50 p-6 shadow">
          <div className="w-full">
            <p className="mb-4">
              👋 Hi, I'm Roberto Reale. Welcome to my homepage!
            </p>
            <p className="mb-4">
              I am a passionate web developer with over 14 years of experience
              working in the field.
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
            width={220}
            height={280}
            alt="Photo of Roberto Reale"
          />
        </div>
        <Subtitle>SKILLS</Subtitle>
        <div className="mb-6 flex flex-row-reverse items-center gap-6 rounded-lg bg-slate-50 pb-2 pl-4 pr-4 pt-2 shadow">
          <div className="w-full">
            <p className="mb-4 font-semibold">
              I fix problems. I build things. I make stuff work.
            </p>
            <p className="mb-4">
              I specialize in JavaScript, React, Next.js, Node.js, Ruby on
              Rails, HTML, CSS, Tailwind, Kubernetes and I learn what I need in
              order to solve the issues assigned.
            </p>
            <p>I own the challenges and complete my tasks independently.</p>
          </div>
          <div className="flex min-w-28 flex-col">
            <Image
              className="mb-2 mt-2 h-28 w-28 rounded-lg bg-white p-2 drop-shadow-md"
              src="/icons/react.svg"
              width={96}
              height={96}
              alt="React icon"
            />
            <Image
              className="mb-2 mt-2 h-28 w-28 rounded-lg bg-white p-2 drop-shadow-md"
              src="/icons/node.js.svg"
              width={96}
              height={96}
              alt="Node.js icon"
            />
          </div>
        </div>
        <Subtitle>CERTIFICATIONS</Subtitle>
        <div className="mb-6 flex items-center gap-6 rounded-lg bg-slate-50 pb-2 pl-4 pr-4 pt-2 shadow">
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
            className="mb-2 mt-2 h-28 w-28 rounded-lg bg-white p-2 drop-shadow-md"
            src="/icons/kubernetes.svg"
            width={96}
            height={96}
            alt="Kubernetes icon"
          />
        </div>
        <Subtitle>OPEN SOURCE</Subtitle>
        <div className="mb-6 flex flex-row-reverse items-center gap-6 rounded-lg bg-slate-50 pb-2 pl-4 pr-4 pt-2 shadow">
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
            className="mb-2 mt-2 h-28 w-28 rounded-lg bg-white p-2 drop-shadow-md"
            src="/icons/npm.svg"
            width={96}
            height={96}
            alt="npm icon"
          />
        </div>
        <Subtitle>COMMUNITY</Subtitle>
        <div className="mb-6 flex items-center gap-6 rounded-lg bg-slate-50 pb-2 pl-4 pr-4 pt-2 shadow">
          <p className="mb-6">
            Based in the vibrant city of Osaka, I’m always looking to connect
            with like-minded professionals and enthusiasts. For that reason, I
            created a{" "}
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
            className="mb-2 mt-2 h-28 w-28 rounded-lg bg-white p-2 drop-shadow-md"
            src="/icons/meetup.svg"
            width={96}
            height={96}
            alt="Meetup icon"
          />
        </div>
        <div className="mb-6 flex flex-row-reverse items-center gap-6 rounded-lg bg-slate-50 pb-2 pl-4 pr-4 pt-2 shadow">
          <p className="mb-6">
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
            className="mb-2 mt-2 h-28 w-28 rounded-lg bg-white p-2 drop-shadow-md"
            src="/icons/mirc.svg"
            width={96}
            height={96}
            alt="mIRC icon"
          />
        </div>
        <p className="text-center">
          Feel free to reach out! Drop me an{" "}
          <Link
            href="mailto:roberto.reale.ja@gmail.com"
            aria-label="Send email to Roberto Reale"
          >
            email
          </Link>{" "}
          and let’s start a conversation. :-)
        </p>
      </TextWrapper>
    </>
  );
}
