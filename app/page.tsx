import Image from "next/image";
import HeroSection from "./hero_section";
export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center px-20 items-center font-kode gap-24">
      <div className="">
        <h1 className="text-5xl mb-2">Rediet Ferew</h1>

        <h2 className="text-3xl">Software Engineer</h2>
      </div>
      <div>
      {/* <div className="relative w-64 h-64 md:w-96 md:h-96">
          <Image
            src="/images/red_png.png"
            layout="fill"
            objectFit="contain"
            className="brightness-125"
            alt="tech background image"
          />
        </div> */}
        
        <HeroSection/>
      </div>
    </main>
  );
}
