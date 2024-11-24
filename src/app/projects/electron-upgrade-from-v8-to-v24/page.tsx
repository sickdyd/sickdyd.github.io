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
        <H1 withBack>Electron app upgrade</H1>
        <Subtitle>The challenge</Subtitle>
        <p className="mb-6">
          <Link href="https://www.uxpin.com" target="_blank">
            UXPin
          </Link>{" "}
          is a tool used to create interactive prototypes for websites. One of
          the features they offer, is a desktop application built with{" "}
          <Link href="https://www.electronjs.org/" target="_blank">
            Electron
          </Link>
          . The app was stuck on version 8, which meant also that the Chrome
          version running in it was wildly outdated, causing several bugs in the
          application. I was tasked with updating the app to the latest version
          of Electron.
        </p>
        <Subtitle>THE PATH TO THE GOAL</Subtitle>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Upgrading Electron directly from v8 to v24 would break the app,
              therefore I decided to update the dependency with increases of 1
              major version at a time. This allowed me to identify and fix the
              compatibility issues with the legacy code bit by bit, making it
              easier by looking at the Electron release notes
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              The security features in Electron changed drastically even just
              from version 8 to version 9 (
              <Link
                href="https://www.electronjs.org/blog/electron-9-0#change-the-default-of-contextisolation-from-false-to-true-starting-in-electron-10"
                target="_blank"
              >
                contextIsolation
              </Link>
              ) and I had to compromise between security and compatibility with
              the existing code to be able to deliver the update in a reasonable
              time
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              Another security feature implemented was to remove support for
              complex objects when using the{" "}
              <Link
                href="https://www.electronjs.org/docs/latest/api/ipc-renderer"
                target="_blank"
              >
                ipcRenderer
              </Link>{" "}
              ; to solve this, I had to update the code to serialize complex
              objects when using it
            </p>
          </div>
          <div className="flex gap-2">
            <span>-</span>
            <p>
              After a few weeks of intense work and several fixes, the app was
              updated to the latest available version at the time.{" "}
              <SuperStrong>
                Chrome was updated from version 80 to version 110
              </SuperStrong>
              ! Needless to say, several bugs were solved allowing us to close
              right away a few dozens of tickets 🙂
            </p>
          </div>
        </div>
      </TextWrapper>
      <GoTop />
    </div>
  );
}
