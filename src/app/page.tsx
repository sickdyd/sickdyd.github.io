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
        <p className="mb-6 mt-2">
          👋 Hi, I'm Roberto Reale. Welcome to my homepage!{" "}
        </p>
        <Subtitle>SKILLS</Subtitle>
        <p className="mb-6">
          I am a seasoned web developer with over 14 years of experience,
          specializing in React, Next.js, Node.js, and Ruby on Rails. I also
          have a strong foundation in HTML and CSS, including Tailwind.
        </p>
        <Subtitle>CERTIFICATIONS</Subtitle>
        <p className="mb-6">
          I am proud to be a{" "}
          <Link
            target="_blank"
            href="https://www.credly.com/badges/08104359-709a-4150-b3b7-297d90f26ccf/public_url"
            aria-label="Certified Kubernetes Administrator badge on Credly"
          >
            Certified Kubernetes Administrator
          </Link>{" "}
          and a Certified Kubernetes Security Specialist.
        </p>
        <Subtitle>OPEN SOURCE</Subtitle>
        <p className="mb-6">
          In my free time I contribute to the Open Source community with various{" "}
          <Link
            target="_blank"
            href="https://www.npmjs.com/~sickdyd"
            aria-label="npm packages on npmjs.com"
          >
            npm packages
          </Link>
          .
        </p>
        <Subtitle>COMMUNITY</Subtitle>
        <p className="mb-6">
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
        <p className="mb-6">
          I am always happy to chat on IRC: irc.libera.chat, mainly on
          #javascript, #node.js, #rubyonrails, #react and #kubernetes.
        </p>
        <p>
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
