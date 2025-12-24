import { Button } from "@/components/ui/button";

export function CreatorPromo() {
  return (
    <section className="mt-8 rounded-2xl bg-gradient-to-r from-primary to-[#dca435] p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(hsl(var(--primary-foreground)) 2px, transparent 2px)", backgroundSize: "20px 20px" }} />
      <div className="relative z-10 max-w-lg">
        <h2 className="text-2xl md:text-3xl font-black text-primary-foreground">
          Join the AfriStory Creator Program
        </h2>
        <p className="mt-2 text-primary-foreground/80 font-medium">
          Turn your passion into a profession. Publish on AfriStory Pro and start monetizing your art today.
        </p>
      </div>
      <div className="relative z-10 shrink-0">
        <Button size="lg" className="bg-primary-foreground text-primary-foreground hover:bg-primary-foreground/90 shadow-lg text-white">
          Start Creating
        </Button>
      </div>
    </section>
  );
}
