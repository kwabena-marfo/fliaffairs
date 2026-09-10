import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24 md:pt-32 md:pb-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono font-medium text-primary uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
            <p className="font-extrabold">LEAP FORWARD</p>
            </div>
            
            <h1 className="text-balance text-5xl font-extrabold tracking-tight md:text-7xl leading-[0.95] mb-8">
              Your future doesn{"'"}t{" "}
              <span>have to be </span>
              <span className="text-primary">border-locked.</span>
            </h1>
            <p className="max-w-[50ch] text-lg text-muted-foreground md:text-xl text-pretty leading-relaxed">
              We simplify the complex bureaucracy of working and studying
              abroad. Join thousands finding their next chapter in Germany, USA and UK.
            </p>

            <div className="mt-12 hidden lg:block">
              <Image
                src="/hero-passport.jpg"
                alt="Open passport with a colorful entry stamp and a modern boarding pass"
                width={1024}
                height={576}
                className="w-full max-w-2xl aspect-video object-cover rounded-2xl shadow-2xl rotate-1"
              />
            </div>
          </div>

          <div
            id="waitlist"
            className="lg:col-span-5 animate-fade-up [animation-delay:200ms]"
          >
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
