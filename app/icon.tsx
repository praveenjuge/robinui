import { ImageResponse } from "next/og";

export const size = { width: 100, height: 100 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        width="101"
        height="101"
        viewBox="0 0 101 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.717957"
          y="0.0276489"
          width="100"
          height="100"
          rx="12.8"
          fill="black"
        />
        <path
          d="M25.0988 79.768V33.5282H38.778V52.4127C38.778 52.4127 50.8455 20.2285 79.0082 20.2285V37.1249C79.0082 37.1249 39.5823 44.3667 40.3866 79.768H25.0988Z"
          fill="white"
        />
        <path
          d="M79.005 65.1429C70.7177 65.1429 63.9392 71.6061 63.4373 79.7648C62.9355 71.6061 56.157 65.1429 47.8696 65.1429C56.157 65.1429 62.9355 58.6765 63.4373 50.5178C63.9392 58.6765 70.7177 65.1429 79.005 65.1429Z"
          fill="white"
        />
      </svg>
    ),
    { ...size },
  );
}
