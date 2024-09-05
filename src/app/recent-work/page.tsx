import { ReactNode } from "react";
import H1 from "../components/H1";
import TextWrapper from "../components/TextWrapper";
import RecentWorkEntry from "./RecentWorkItem";

export type Project = {
  title: ReactNode;
  contents: ReactNode;
};

export default function RecentWork() {
  return (
    <>
      <TextWrapper>
        <H1>Recent work</H1>
        <p className="text-quinary">
          Due to the diverse nature of the roles I've covered in my career, some
          of the most memorable achievements are not something that can be
          shared on GitHub. To learn more about what I worked on, see the
          sections below!
        </p>
      </TextWrapper>
      <RecentWorkEntry
        techStackIcons={["gcp", "kubernetes", "rubyonrails"]}
        title="FROM GCP TO K8S"
        description="Saving $12k per month on our Google Cloud Platform bill by building a custom Ruby library to provision virtual machines on our self-managed Kubernetes clusters..."
        link="/recent-work/from-gcp-to-k8s"
      />
      <RecentWorkEntry
        techStackIcons={["aws", "node.js", "typescript"]}
        title="AWS NUKER"
        description="Automate AWS accounts resources clean up to prevent wasting thousands of $$$ per week..."
        link="/recent-work/aws-nuke"
      />
      <RecentWorkEntry
        techStackIcons={["electron", "javascript"]}
        title="ELECTRON APP UPDATE"
        description="Update the UXPin Electron app from version v8 to v24, getting rid of dozens of bugs in one go..."
        link="/recent-work/electron-upgrade-from-8-to-24"
      />
      <RecentWorkEntry
        techStackIcons={["css", "html", "typescript", "node.js"]}
        title="VWO INTEGRATION AND ETL"
        description="Integrating VWO for A/B testing and creating an ETL application to extract data from VWO and combine it with our DB data..."
        link="/recent-work/etl-with-vwo"
      />
      <RecentWorkEntry
        techStackIcons={["figma", "javascript"]}
        title="FIGMA PLUGIN"
        description="Figma plugin for UXPin application, allowing designers to import their Figma projects in UXPin..."
        link="/recent-work/uxpin-plugin-figma"
      />
    </>
  );
}
