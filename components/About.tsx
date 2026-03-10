import ReactMarkdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import SectionHeader from "./SectionHeader";
import {
  motion,
  useTransform,
  MotionValue,
  motionValue,
} from "framer-motion";
import { aboutData } from "@/lib/data";

const markdownComponents: Components = {
  p: ({ children }) => <>{children}</>,
  em: ({ children }) => <span className="italic">{children}</span>,
  strong: ({ children }) => (
    <span className="font-bold tracking-widest">{children}</span>
  ),
  u: ({ children }) => <span className="underline">{children}</span>,
};

const STATIC_ZERO = motionValue(0);

function AboutParagraph({ text }: { text: string }) {
  return (
    <p className="bg-[rgba(217,199,214,0.34)] dark:bg-transparent rounded-lg text-left">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
        {text}
      </ReactMarkdown>
    </p>
  );
}

function FlowerField({ opacity, y }: { opacity: MotionValue<number>; y: MotionValue<number> }) {
  return (
    <motion.div
      className="absolute -bottom-32 left-0 right-0 flex justify-center items-end pointer-events-none"
      style={{ opacity, y }}
    >
      <img src="/noun-poppy-fields-7976627.svg" alt="" className="w-72 h-96 dark:invert opacity-10 -mb-16" />
      <img src="/noun-flower-bouquet-7735656.svg" alt="" className="w-80 h-[26rem] dark:invert opacity-10 -mb-20 -mx-20" />
      <img src="/noun-poppy-fields-7976627.svg" alt="" className="w-64 h-80 dark:invert opacity-10 -mb-12 -mx-16 scale-x-[-1]" />
      <img src="/noun-flower-bouquet-7735656.svg" alt="" className="w-72 h-96 dark:invert opacity-10 -mb-16 -mx-20 scale-x-[-1]" />
      <img src="/noun-poppy-fields-7976627.svg" alt="" className="w-80 h-[26rem] dark:invert opacity-10 -mb-20 -mx-16" />
      <img src="/noun-flower-bouquet-7735656.svg" alt="" className="w-64 h-80 dark:invert opacity-10 -mb-12 -mx-20" />
      <img src="/noun-poppy-fields-7976627.svg" alt="" className="w-72 h-96 dark:invert opacity-10 -mb-16 -mx-16 scale-x-[-1]" />
    </motion.div>
  );
}

function AudiencePhoto({
  opacity,
  pointerEvents,
  y,
}: {
  opacity: MotionValue<number>;
  pointerEvents: MotionValue<"auto" | "none">;
  y: MotionValue<number>;
}) {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 flex justify-center"
      style={{ opacity, pointerEvents, y }}
    >
      <div className="relative w-full">
        <img src="/audience.png" alt="" className="w-full max-h-[30vh] object-cover opacity-10" />
        <a
          href="https://pngtree.com/freepng/audiences-in-club-musical_8485712.html"
          className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] opacity-30 hover:opacity-60 transition"
        >
          png image from pngtree.com
        </a>
      </div>
    </motion.div>
  );
}

function SideIcon({
  src,
  className,
  position,
  opacity,
  x,
}: {
  src: string;
  className: string;
  position: string;
  opacity: MotionValue<number>;
  x: MotionValue<number>;
}) {
  return (
    <motion.div
      className={`absolute top-[50%] -translate-y-1/2 ${position}`}
      style={{ opacity, x }}
    >
      <img src={src} alt="" className={className} />
    </motion.div>
  );
}

export default function About({
  scrollYProgress,
}: {
  scrollYProgress?: MotionValue<number>;
}) {
  const progress = scrollYProgress ?? STATIC_ZERO;

  const headerOpacity = useTransform(
    progress,
    [0, 0.043, 0.10, 0.65, 0.677],
    [0, 0, 1, 1, 0]
  );

  const p1Opacity = useTransform(progress, [0.06, 0.12, 0.20, 0.22], [0, 1, 1, 0]);
  const p2Opacity = useTransform(progress, [0.22, 0.28, 0.36, 0.38], [0, 1, 1, 0]);
  const p3Opacity = useTransform(progress, [0.38, 0.44, 0.52, 0.54], [0, 1, 1, 0]);
  const p4Opacity = useTransform(progress, [0.54, 0.60, 0.65, 0.677], [0, 1, 1, 0]);

  const paragraphOpacities = [p1Opacity, p2Opacity, p3Opacity, p4Opacity];

  const p3PointerEvents = useTransform(p3Opacity, (o) =>
    o > 0.1 ? "auto" : "none"
  );

  // Bottom accent animations
  const p1BottomY = useTransform(progress, [0.06, 0.12, 0.20, 0.22], [100, 0, 0, 100]);
  const p3AudienceY = useTransform(progress, [0.38, 0.44, 0.52, 0.54], [100, 0, 0, 100]);
  const p4BottomY = useTransform(progress, [0.54, 0.60, 0.65, 0.677], [100, 0, 0, 100]);

  // Side icon slide animations
  const p2LeftX = useTransform(progress, [0.22, 0.28, 0.36, 0.38], [-200, 0, 0, -200]);
  const p2RightX = useTransform(progress, [0.22, 0.28, 0.36, 0.38], [200, 0, 0, 200]);
  const p3LeftX = useTransform(progress, [0.38, 0.44, 0.52, 0.54], [-200, 0, 0, -200]);
  const p3RightX = useTransform(progress, [0.38, 0.44, 0.52, 0.54], [200, 0, 0, 200]);

  // Desktop: scroll-driven animations
  if (scrollYProgress) {
    return (
      <section className="text-center h-full w-full leading-8 absolute inset-0 overflow-visible">
        <motion.div className="absolute top-[30%] left-0 right-0" style={{ opacity: headerOpacity }}>
          <SectionHeader>About Me</SectionHeader>
        </motion.div>

        <div className="absolute top-[55%] -translate-y-1/2 left-0 right-0 px-4">
          <div className="relative h-[16rem]">
            {aboutData.map((text, index) => (
              <motion.div
                key={index}
                className="w-[90%] xl:w-auto xl:max-w-[40rem] mx-auto absolute top-0 left-0 right-0"
                style={{ opacity: paragraphOpacities[index] }}
              >
                <AboutParagraph text={text} />
              </motion.div>
            ))}
          </div>
        </div>

        <AudiencePhoto opacity={paragraphOpacities[2]} pointerEvents={p3PointerEvents} y={p3AudienceY} />

        {/* Chisel — P1 */}
        <motion.div
          className="absolute -bottom-[22rem] left-0 right-0 flex justify-center pointer-events-none overflow-visible"
          style={{ opacity: paragraphOpacities[0], y: p1BottomY }}
        >
          <img
            src="/noun-chisel-5271019.svg"
            alt=""
            className="w-[44rem] h-[44rem] dark:invert opacity-10"
            style={{ transform: "rotate(-45deg)" }}
          />
        </motion.div>

        <FlowerField opacity={paragraphOpacities[3]} y={p4BottomY} />

        <SideIcon src="/noun-drone-8174065.svg" className="w-[40rem] h-[40rem] -mt-72 -ml-24 dark:invert opacity-10" position="-left-24" opacity={paragraphOpacities[1]} x={p2LeftX} />
        <SideIcon src="/noun-shopping-cart-5419148.svg" className="w-[30rem] h-[30rem] -mt-48 dark:invert opacity-10 scale-x-[-1]" position="-right-48" opacity={paragraphOpacities[1]} x={p2RightX} />
        <SideIcon src="/line array vector svg.svg" className="w-80 h-80 -mt-40 dark:invert opacity-10" position="-left-24" opacity={paragraphOpacities[2]} x={p3LeftX} />
        <SideIcon src="/line array vector svg.svg" className="w-80 h-80 -mt-40 dark:invert opacity-10 scale-x-[-1]" position="-right-24" opacity={paragraphOpacities[2]} x={p3RightX} />
      </section>
    );
  }

  // Mobile: whileInView animations
  return (
    <section className="mb-28 w-full text-center leading-8 overflow-visible">
      <SectionHeader>About Me</SectionHeader>
      {aboutData.map((text, index) => (
        <motion.div
          key={index}
          className="relative mb-4"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="bg-[rgba(217,199,214,0.34)] dark:bg-transparent rounded-lg px-4 mx-4">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
              {text}
            </ReactMarkdown>
          </p>
        </motion.div>
      ))}
    </section>
  );
}
