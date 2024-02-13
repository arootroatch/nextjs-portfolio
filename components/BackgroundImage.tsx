import Image from "next/image"

export default function BackgroundImage() {
  return (
    <div id="bg-pic" className="-z-10 fixed top-0 h-screen w-screen">
      <Image
        alt="Alex Root-Roatch portrait"
        src="/lookright.jpg"
        priority={true}
        quality={50}
        fill={true}
        objectFit="cover"
      />
      
    </div>
  )
}
