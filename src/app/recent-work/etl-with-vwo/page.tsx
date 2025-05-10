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
        <H1 withBack>VWO Data Integration for A/B Testing</H1>
        <Subtitle>The challenge</Subtitle>
        <p className="mb-6">
          Our marketing team at{" "}
          <Link href="https://www.uxpin.com/" target="_blank">
            UXPin
          </Link>{" "}
          was enthusiastic about conducting an A/B test on two distinct
          iterations of the pricing page. Each version featured substantial UI
          enhancements designed to optimize customer acquisition and conversion
          rates.{" "}
          <Link href="https://vwo.com/" target="_blank">
            VWO
          </Link>{" "}
          allows editing views and display one of several views depending on the
          segment of users.
        </p>
        <Subtitle>The path to the goal</Subtitle>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <span>-</span>
            <p>
              The first challenge was implementing several quite complicated
              changes to the pricing page html/css using the VWO UI. VWO has
              some limitations, but after some battling with the CSS and a few
              hacks, the new designs were implemented.
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Attaching triggers to the buttons was tricky as well, given that
              they would change radically depending on what type of account the
              user had. After adding unique identifiers and custom attributes to
              the buttons, the triggers were set up correctly.
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Data collection: VWO allows to download CSS files containing the
              data collected, however we needed to join this data with what was
              already in our database. To do so, I created a Node.js application
              with Express.js that would do the following:
              <ul className="mt-4 list-inside list-disc">
                <li className="mb-1">Download/extract/parse the VWO data.</li>
                <li className="mb-1">Fetch the data from our DB.</li>
                <li className="mb-1">Merge the data from the two sources.</li>
                <li className="mb-1">Generate a new CSV file and zip it.</li>
                <li className="mb-1">
                  Sending an email to the designed recipient.
                </li>
              </ul>
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              The integrated data pipeline delivered consolidated insights
              directly to marketers&apos; inboxes, eliminating manual data
              processing and empowering them to make timely, data-driven
              decisions without technical assistance.
            </p>
          </div>
        </div>
      </TextWrapper>
      <GoTop />
    </div>
  );
}
