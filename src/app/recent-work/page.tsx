import { ReactNode } from "react";
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
        <h1 className="mb-4 text-4xl font-bold text-primary">Recent work</h1>
        <p>
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
      />
      <RecentWorkEntry
        techStackIcons={["aws", "node.js", "typescript"]}
        title="AWS NUKER"
        description="Automate AWS accounts resources clean up to prevent wasting thousands of $$$ per week..."
      />
      <RecentWorkEntry
        techStackIcons={["electron", "javascript"]}
        title="ELECTRON APP UPDATE"
        description="Update the UXPin Electron app from version v8 to v24, getting rid of dozens of bugs in one go..."
      />
      <RecentWorkEntry
        techStackIcons={["css", "html", "typescript", "node.js"]}
        title="VWO INTEGRATION AND ETL"
        description="Integrating VWO for A/B testing and creating an ETL application to extract data from VWO and combine it with our DB data..."
      />
      <RecentWorkEntry
        techStackIcons={["figma", "javascript"]}
        title="FIGMA PLUGIN"
        description="Figma plugin for UXPin application, allowing designers to import their Figma projects in UXPin..."
      />
    </>
  );
}
