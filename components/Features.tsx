import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const items = [
  {
    number: "01",
    title: "Visa Concierge",
    description:
      "Expert guidance through Digital Nomad and Study-Work visas for over 15 countries.",
  },
  {
    number: "02",
    title: "Direct Placements",
    description:
      "Access to a curated database of international companies hiring for relocation roles.",
  },
  {
    number: "03",
    title: "Local Arrival",
    description:
      "From bank accounts to housing, we help you land softly in your new home country.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-24 border-t border-border"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card
            key={item.number}
            className="group transition-colors hover:border-primary"
          >
            <CardHeader>
              <div className="mb-2 size-12 bg-background rounded-xl border border-border flex items-center justify-center shadow-sm transition-colors group-hover:border-primary">
                <span className="font-mono text-xl font-bold text-primary">
                  {item.number}
                </span>
              </div>
              <CardTitle className="text-xl font-bold">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
