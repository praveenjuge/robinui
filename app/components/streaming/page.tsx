import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Streaming Component | Robin UI",
  description:
    "Learn about the Streaming component in Robin UI. A component for handling real-time streaming of chat messages with smooth animations and typing indicators.",
};

export default function StreamingPage() {
  return (
    <>
      <h1>Streaming</h1>
      <p>
        The Streaming component enables real-time streaming of chat messages
        with smooth animations and typing indicators.
      </p>
    </>
  );
}
