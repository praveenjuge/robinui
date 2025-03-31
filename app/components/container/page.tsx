import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Container Component | Robin UI",
  description:
    "Learn about the Container component in Robin UI. A flexible and customizable container component for building chat interfaces with proper spacing and layout.",
};

export default function ContainerPage() {
  return (
    <>
      <h1>Container</h1>
      <p>
        The Container component provides a flexible wrapper for chat content
        with proper spacing and layout.
      </p>
    </>
  );
}
