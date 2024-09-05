import CodeBlock from "@/app/components/CodeBlock";
import H1 from "@/app/components/H1";
import Link from "@/app/components/Link";
import Subtitle from "@/app/components/Subtitle";
import SuperStrong from "@/app/components/SuperStrong";
import TextWrapper from "@/app/components/TextWrapper";

export default function GCPToK8s() {
  return (
    <>
      <TextWrapper>
        <H1>From GCP to Kubernetes</H1>
        <Subtitle>The challenge</Subtitle>
        <p className="mb-6">
          At{" "}
          <Link
            href="https://www.trueability.com"
            target="_blank"
            aria-label="Visit TrueAbility"
          >
            TrueAbility
          </Link>{" "}
          we provision ephemeral test environments with two or more virtual
          machines used by candiates to assess their skills in order to get a
          certificate. Our customers include world-renowned names, such as{" "}
          <SuperStrong>Google</SuperStrong>, <SuperStrong>Elastic</SuperStrong>,{" "}
          <SuperStrong>HashiCorp</SuperStrong>,{" "}
          <SuperStrong>VMWare</SuperStrong> and more.
        </p>
        <p className="mb-2">
          During 2023/2024, we completed the installation of several
          self-managed Kubernetes clusters worldwide. We decided to migrate the
          provisioning of the test environment VMs to our new clusters, with the
          aim of reducing our GCP bill to zero. I was tasked with leading the
          migration project.
        </p>
        <Subtitle>Steps, issues and notable achievements</Subtitle>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Trying to avoid <i>reinventing the wheel:</i> initial
              investigation of available tools potentially viable to complete
              the task — none of them was a good fit
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Estabilishing a direct communication channel with the{" "}
              <Link href="https://kubevirt.io/" target="_blank">
                KubeVirt
              </Link>{" "}
              dev team (email and Slack) to shed light on some of the initial
              unknowns
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Setting up a sensible local dev environment to test provisioning
              on k8s, achieved by redirecting the staging domain by leveraging
              ngrok endpoints and edges — no local dev environment to test
              provisioning was available before this; in terms of dev speed,
              this was a game changer!
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Converting GCP resources to the k8s equivalents (VPCs, additional
              disks, etc)
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Building a Ruby on Rails service to communicate with the k8s API
              control plane to dynamically generate all required resources on
              demand
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Adding support for multiple clusters across the world, with
              support for different{" "}
              <Link
                href="https://kubernetes.io/docs/concepts/storage/storage-classes/"
                target="_blank"
              >
                storage classes
              </Link>
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Implementing VM imaging with{" "}
              <CodeBlock>VirtualMachineSnapshot</CodeBlock> and restore with{" "}
              <CodeBlock>VirtualMachineRestore</CodeBlock> to be able to restart
              old test environments when needed
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              After extensive testing, careful migration of live test
              environments provisioning to k8s
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              In a time span of 3 months,{" "}
              <SuperStrong>virtually zeroing our GCP bill</SuperStrong> 🏁
            </p>
          </div>
        </div>
      </TextWrapper>
    </>
  );
}
