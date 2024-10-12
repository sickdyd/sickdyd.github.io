import GoTop from "@/app/components/GoTop";
import H1 from "@/app/components/H1";
import Link from "@/app/components/Link";
import Subtitle from "@/app/components/Subtitle";
import TextWrapper from "@/app/components/TextWrapper";

<>
  <h3>Context</h3>
  <span></span>
  <h3>Steps, challenges and notable achievements</h3>
</>;

export default function GCPToK8s() {
  return (
    <div className="flex flex-col">
      <TextWrapper>
        <H1 withBack>UXPin Figma plugin</H1>
        <Subtitle>The challenge</Subtitle>
        <p className="mb-6">
          One of the main competitors of{" "}
          <Link href="https://www.uxpin.com" target="_blank">
            UXPin
          </Link>{" "}
          is Figma, a widely used tool for Web Designers. In order to shift some
          of their user base to UXPin, we decided to create a Figma plugin that
          would allow designers to easily import their projects to UXPin. I was
          paired with a fellow developer (creator of{" "}
          <Link href="https://bestofjs.org/" target="_blank">
            The Best of JS
          </Link>
          ) on picking up the work left from a previous external collaborator:
          together we built the final version of the{" "}
          <Link
            href="https://www.figma.com/community/plugin/1133387866564475565/uxpin-copy-paste-prototype"
            target="_blank"
          >
            UXPin Figma plugin
          </Link>
          .
        </p>
      </TextWrapper>
      <GoTop />
    </div>
  );
}
