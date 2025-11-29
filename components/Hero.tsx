import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/katatokinokiseki1.png" 
          alt="Main Visual"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* タイトル */}
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter mb-4 drop-shadow-lg">
          PortFolio
        </h1>
        <p className="text-lg md:text-xl font-light tracking-widest opacity-90">
          Engineer × Illustrator
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce text-white/80">
        <span className="text-sm tracking-widest">SCROLL</span>
      </div>
    </section>
  );
}