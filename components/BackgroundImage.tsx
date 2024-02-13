import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div id="bg-pic" className="-z-10 fixed top-0 h-screen w-screen">
      <Image
        className="relative -translate-y-6 scale-125 md:scale-125 lg:translate-y-6 lg:scale-125 xl:scale-110 2xl:scale-100"
        alt="Alex Root-Roatch portrait"
        src="/lookright.jpg"
        priority={true}
        quality={75}
        fill={true}
        objectFit="cover"
      />
    </div>
  );
}
