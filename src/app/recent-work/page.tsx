import { ReactNode } from "react";
import GoTop from "../components/GoTop";
import H1 from "../components/H1";
import RecentWorkEntry from "../components/RecentWorkItem";
import TextWrapper from "../components/TextWrapper";

export type Project = {
  title: ReactNode;
  contents: ReactNode;
};

export default function RecentWork() {
  return (
    <>
      <TextWrapper>
        <H1 withBack>Recent work</H1>
        <p className="text-quinary">
          Due to the diverse nature of the roles I&apos;ve covered in my career,
          some of the most memorable achievements are not something that can be
          shared on GitHub. To learn more about what I worked on, see the
          sections below!
        </p>
      </TextWrapper>
      <RecentWorkEntry
        techStackIcons={["gcp", "kubernetes", "rubyonrails"]}
        title="From GCP to K8s"
        description="Slashed monthly cloud costs by $12K by developing a custom Ruby solution to migrate VM provisioning from Google Cloud Platform to bare metal Kubernetes clusters."
        link="/recent-work/from-gcp-to-k8s"
      />
      <RecentWorkEntry
        techStackIcons={["aws", "node.js", "typescript"]}
        title="AWS Resource Cleanup Automation"
        description="Engineered an automated solution that reduced AWS costs from $300/day to single digits by systematically eliminating unused resources across multiple accounts."
        link="/recent-work/aws-nuker"
      />
      <RecentWorkEntry
        techStackIcons={["electron", "javascript"]}
        title="Electron App Update"
        description="Modernized UXPin's Electron app through a methodical version-by-version upgrade strategy, resolving dozens of bugs and upgrading the embedded Chrome browser from v80 to v110."
        link="/recent-work/electron-upgrade-from-v8-to-v24"
      />
      <RecentWorkEntry
        techStackIcons={["css", "html", "typescript", "node.js"]}
        title="VWO Data Integration for A/B Testing"
        description="Implemented complex A/B testing UI variations and built an automated ETL pipeline that seamlessly merged VWO test data with internal databases for actionable marketing insights."
        link="/recent-work/etl-with-vwo"
      />
      <RecentWorkEntry
        techStackIcons={["figma", "javascript"]}
        title="UXPin Figma Plugin"
        description="Developed a seamless integration between Figma and UXPin, enabling designers to effortlessly import and convert their Figma designs into interactive prototypes."
        link="/recent-work/uxpin-figma-plugin"
      />
      <GoTop />
    </>
  );
}
