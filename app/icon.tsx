import { ImageResponse } from "next/og";

export const size = { width: 500, height: 500 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="500" height="500" rx="64" fill="black" />
        <path
          d="M375.99 189.193C371.728 183.831 371.637 176.004 376.48 171.161L433.494 125.17C441.306 117.358 435.773 104.001 424.725 104.001H276.489C240.995 104.001 208.129 122.708 190.006 153.227L65.7763 362.43C57.0499 377.125 67.6406 395.731 84.7314 395.731H340.53C343.819 395.731 346.975 394.439 349.26 392.073C406.995 332.273 425.069 250.935 375.99 189.193Z"
          fill="white"
        />
      </svg>
    ),
    { ...size },
  );
}
