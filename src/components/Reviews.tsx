import { Star } from "lucide-react";

const reviews = [
  {
    text: "The team helped us turn a plain backyard into a beautiful pool and entertaining area. The communication was clear and the finish feels premium.",
    name: "Anna M.",
  },
  {
    text: "Professional from the first quote to handover. They understood the look we wanted and made practical suggestions that improved the final result.",
    name: "Michael R.",
  },
  {
    text: "Our plunge pool looks incredible and fits the space perfectly. The build process was organised and the team was easy to deal with.",
    name: "Samantha K.",
  },
];

const Reviews = () => {
  return (
    <section className="bg-background py-18 md:py-24">
      <div className="container-custom">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-eyebrow mb-4 text-primary">Customer reviews</p>
          <h2 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">What Sydney Homeowners Say</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="border border-border bg-white p-7 shadow-subtle">
              <div className="mb-5 flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="font-body text-sm leading-7 text-muted-foreground">“{review.text}”</p>
              <p className="mt-6 font-body text-sm font-semibold text-foreground">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
