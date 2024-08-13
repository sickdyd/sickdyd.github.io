import Link from "next/link";
import { Paragraph } from "./components/Paragraph";
import Quote from "./components/Quote";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-screen-md m-auto w-full mt-12">
      <Quote
        cite="https://quoteinvestigator.com/2015/04/02/simple/"
        quote="Simplicity is the ultimate sophistication."
        author="Leonardo Da Vinci"
      />

      <Paragraph>👋 Hello, welcome to my homepage!</Paragraph>
      <Paragraph>
        Throughout my career, I have honed my skills in various programming
        languages and frameworks. I work mainly with <strong>JavaScript</strong>{" "}
        (React, Next.js, Node.js) and <strong>Ruby on Rails</strong>. I am
        proficient with <strong>HTML</strong> and <strong>CSS</strong> (vanilla
        and Tailwind). I am also a{" "}
        <Link
          target="_blank"
          href="https://www.credly.com/badges/08104359-709a-4150-b3b7-297d90f26ccf/Paragraphublic_url"
          aria-label="Certified Kubernetes Administrator badge on Credly"
        >
          <strong>Certified Kubernetes Administrator</strong>
        </Link>
        .
      </Paragraph>
      <Paragraph>
        In my spare time I am contribuiting with a few{" "}
        <Link
          target="_blank"
          href="https://www.npmjs.com/~sickdyd"
          aria-label="npm packages on npmjs.com"
        >
          npm packages
        </Link>{" "}
        to the Open Source Community.
      </Paragraph>
      <Paragraph>
        I am located in Osaka, <strong>Japan</strong>.
      </Paragraph>
      <Paragraph>
        If you want to get in touch, hit me up with an{" "}
        <Link
          href="mailto:roberto.reale.ja@gmail.com"
          aria-label="Send email to Roberto Reale"
        >
          email
        </Link>{" "}
        :-)
      </Paragraph>
    </main>
  );
}
