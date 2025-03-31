import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reasoning Component | Robin UI",
  description:
    "Learn about the Reasoning component in Robin UI. A component for displaying AI reasoning and thought processes in chat interfaces with step-by-step explanations.",
};

export default function ReasoningPage() {
  return (
    <>
      <h1>Reasoning</h1>
      <p>
        The Reasoning component is designed to display AI reasoning and thought
        processes in a clear, step-by-step format.
      </p>
    </>
  );
}
