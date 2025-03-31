import { Metadata } from "next";
import { highlight } from "sugar-high";

export const metadata: Metadata = {
  title: "Installation | Robin UI",
  description:
    "Learn how to install and set up Robin UI components in your React project. Follow our step-by-step guide to get started with chat components.",
};

export default function InstallationPage() {
  return (
    <>
      <h1>Installation</h1>
      <p>
        Get started with Robin UI by following these simple installation steps.
      </p>

      <h3>Step 1: Prerequisites</h3>
      <ul>
        <li>React 19+</li>
        <li>shadcn/ui</li>
      </ul>

      <h3>Step 2: Install shadcn/ui</h3>
      <p>
        Install shadcn/ui using your preferred package manager.{" "}
        <a href="https://ui.shadcn.com/docs/installation">
          https://ui.shadcn.com/docs/installation
        </a>
      </p>

      <h3>Step 3: Install Robin UI Components</h3>
      <p>
        Install Robin UI components using your shadcn/ui cli.
      </p>

      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: highlight(`npx shadcn@latest add "https://robinui.com/message.json"`),
          }}
        />
      </pre>

      <h3>Step 4: Import the components</h3>
      <p>
        Import the components into your project.
      </p>

      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlight(`import { Message } from "@/components/ui/message"`) }} />
      </pre>
    </>
  );
}
