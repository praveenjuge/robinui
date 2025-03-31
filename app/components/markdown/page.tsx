import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markdown Component | Robin UI",
  description:
    "Learn about the Markdown component in Robin UI. A powerful component for rendering markdown content in chat messages with syntax highlighting and custom styling.",
};

export default function MarkdownPage() {
  return (
    <>
      <h1>Markdown</h1>
      <p>
        The Markdown component allows you to render markdown content in your
        chat messages with syntax highlighting and custom styling.
      </p>
    </>
  );
}
