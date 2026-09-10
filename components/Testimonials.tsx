import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Fliaffairs turned a 6-month visa nightmare into a 2-week success story. I'm writing this from a cafe in Lisbon!",
    name: "Sarah Jenkins",
    role: "UI Designer in Portugal",
  },
  {
    quote:
      "The study-abroad paperwork for Japan was daunting until I found Fliaffairs. Truly professional support.",
    name: "Marcus Thorne",
    role: "Student in Tokyo",
  },
  {
    quote:
      "They don't just help with visas; they helped me find a community in Berlin before I even landed.",
    name: "Elena Rossi",
    role: "Engineer in Germany",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary py-24 text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Trusted by global nomads
          </h2>
        </div>
        <div className="flex overflow-x-auto pb-8 gap-6 md:grid md:grid-cols-3 no-scrollbar">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="min-w-75 gap-6 border-white/10 bg-white/5 py-8 text-secondary-foreground shadow-none"
            >
              <CardContent className="px-8">
                <p className="italic text-lg mb-6 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-white/10" />
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs font-mono uppercase">
                      {t.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
