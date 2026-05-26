import { FeatureCard } from "@/components/feature-card";
import { TopNavigation } from "@/components/top-navigation";

const features = [
  {
    title: "Prioritize the work",
    description:
      "Keep the most important quests visible so the next step is always easy to find.",
  },
  {
    title: "Track steady progress",
    description:
      "Use a focused dashboard view to see what is active, blocked, or ready to review.",
  },
  {
    title: "Stay lightweight",
    description:
      "Start with a clean structure that can grow without turning into a full design system too early.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopNavigation />

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
            Quest dashboard
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Organize your quests without losing sight of the next move.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
            Questboard gives this project a simple, responsive starting point
            for planning priorities, following progress, and shaping the app
            one clear step at a time.
          </p>
        </section>

        <section
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Questboard features"
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
