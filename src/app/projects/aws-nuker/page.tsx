import GoTop from "@/app/components/GoTop";
import H1 from "@/app/components/H1";
import Link from "@/app/components/Link";
import Subtitle from "@/app/components/Subtitle";
import SuperStrong from "@/app/components/SuperStrong";
import TextWrapper from "@/app/components/TextWrapper";

export default function GCPToK8s() {
  return (
    <div className="flex flex-col">
      <TextWrapper>
        <H1 withBack>AWS nuker</H1>
        <Subtitle>The challenge</Subtitle>
        <p className="mb-6">
          Some of our customers at{" "}
          <Link
            href="https://www.trueability.com"
            target="_blank"
            aria-label="Visit TrueAbility"
          >
            TrueAbility
          </Link>
          , require to provision additional resources on AWS in order to create
          a viable environment to test the candidate&apos;s skills. Due to the
          inability to automatically delete unused / dangling resources on AWS,
          we saw a significant and steady increase in our AWS bill. The clean up
          process was manual, which was time-consuming and tedious. I was tasked
          with creating an automated solution to fix the problem.
        </p>
        <Subtitle>THE PATH TO THE GOAL</Subtitle>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Collaboration with the{" "}
              <Link href="https://www.hashicorp.com/" target="_blank">
                HashiCorp
              </Link>{" "}
              dev team to identify the best tools for the task:{" "}
              <Link href="https://github.com/rebuy-de/aws-nuke" target="_blank">
                aws-nuke
              </Link>{" "}
              was the tool picked up for deleting resources on AWS{" "}
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Created a microservice with Express.js, serving an API endpoint
              accepting a payload with an array of AWS account IDs to be cleared
              up
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Created a worker on Ruby on Rails (on our main app) to collect all{" "}
              <i>nukeable</i> accounts and send them to the Express.js server
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Added calls to the microservice in strategic steps of our
              provisioning flow to immediately remove unused resources when no
              longer needed
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Identified a set of resources that are not supported on aws-nuke
              and implemented a custom solution to delete them with aws-cli from
              the microservice
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Scaled costs{" "}
              <SuperStrong>
                from an average of $300 per day to a few bucks
              </SuperStrong>{" "}
              🏁
            </p>
          </div>
        </div>
      </TextWrapper>
      <GoTop />
    </div>
  );
}
