import Image from "next/image";

export default function MyImage() {
  return (
    <Image
      /* for github pages?
      /nextjs-github-pages/<path>
    */
      src="/path/to/image.jpg" // Replace with your image path
      alt="My Image"
      layout="fill"
      objectFit="cover"
      className="rounded-lg"
    />
  );
}
