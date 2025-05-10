import CodeBlock from "@/app/components/CodeBlock";
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
        <H1 withBack>From GCP to Kubernetes</H1>
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
          machines used by candidates to assess their skills in order to get a
          certificate. Our customers include world-renowned names, such as{" "}
          <SuperStrong>Google</SuperStrong>, <SuperStrong>Elastic</SuperStrong>,{" "}
          <SuperStrong>HashiCorp</SuperStrong>,{" "}
          <SuperStrong>VMWare</SuperStrong> and more.
        </p>
        <p className="mb-2">
          During 2023/2024, we completed the installation of several bare metal
          Kubernetes clusters worldwide, while simultaneously developing our own
          Heroku-like Platform-as-a-Service (PaaS) solution, called{" "}
          <Link target="_blank" href="https://build.io/">
            Build.io
          </Link>
          . We decided to migrate the provisioning of the VMs there with the aim
          of reducing our GCP bill to zero. I was tasked with leading the
          migration project.
        </p>
        <Subtitle>The path to the goal</Subtitle>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Initial investigation of available tools potentially viable to
              complete the task such as{" "}
              <Link
                target="_blank"
                href="https://github.com/ManageIQ/kubeclient"
              >
                kubeclient
              </Link>{" "}
              and{" "}
              <Link target="_blank" href="https://github.com/k8s-ruby/k8s-ruby">
                k8s-ruby
              </Link>
              . Having encountered some compatibility issues with the Kubernetes
              version we were using and how{" "}
              <Link target="_blank" href="https://build.io/">
                Build.io
              </Link>{" "}
              works, we decided to build our own.
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Outlined the YAML definition for various resources to rebuild a
              POC of what TrueAbility does on GCP:{" "}
              <CodeBlock>virtualmachine</CodeBlock>,
              <CodeBlock>loadbalancer</CodeBlock>,{" "}
              <CodeBlock>networkpolicy</CodeBlock>,{" "}
              <CodeBlock>virtualmachinesnapshot</CodeBlock>,
              <CodeBlock>virtualmachinerestore</CodeBlock>, are the key
              resources we needed to define.
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Instead of using images, converted existing images to docker
              images and pushed them to our internal registry. Paired with the{" "}
              <CodeBlock>datavolume</CodeBlock> resource type, it allowed us to
              have an easier way to handle image updates.
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Establishing a direct communication channel with the{" "}
              <Link href="https://kubevirt.io/" target="_blank">
                KubeVirt
              </Link>{" "}
              dev team to shed light on some of the initial unknowns. Shoutout
              to their amazing support!
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Building a Ruby service to communicate with the k8s API control
              plane to dynamically generate all required resources on demand.
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Successfully reduced our GCP bill by approximately $12,000 per
              month, <SuperStrong>achieving our zero-cost target</SuperStrong>.
            </p>
          </div>
        </div>
      </TextWrapper>
      <GoTop />
    </div>
  );
}
