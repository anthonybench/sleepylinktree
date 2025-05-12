import Image from "next/image";

export default function MyImage() {
  return (
    <Image
      src="/path/to/image.jpg" // Replace with your image path
      alt="My Image"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
  );
}
