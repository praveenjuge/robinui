import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message Component | Robin UI",
  description:
    "Learn about the Message component in Robin UI. A versatile component for displaying chat messages with support for different types, timestamps, and user avatars.",
};

export default function MessagePage() {
  return (
    <>
      <h1>Message</h1>
      <p>
        The Message component is designed to display chat messages with support
        for different types, timestamps, and user avatars.
      </p>
    </>
  );
}
