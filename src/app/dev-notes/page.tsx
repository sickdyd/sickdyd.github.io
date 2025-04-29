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
        <H1 withBack>Dev Notes</H1>
        <p className="text-quinary">
          These are some gists I have created to share my knowledge and experience with the community. I hope you find them helpful!
        </p>
      </TextWrapper>
      <RecentWorkEntry
        title="Windows Server 2012 R2 on k8s"
        description="In this gist I will guide you step by step on how to run Windows Server 2012 on k8s with minikube."
        link="https://gist.github.com/sickdyd/18363addb996408cd62fcbadb1d18d5e"
        target="_blank"
      />
      <GoTop />
    </>
  );
}
