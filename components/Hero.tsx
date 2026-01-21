import Image from "next/image";
import { Button } from "./ui/button";

const pillItems = [
  {
    id: 1,
    text: "Predictable traffic",
    color: "bg-secondary-4",
    textColor: "secondary-3",
  },
  {
    id: 2,
    text: "Measurable growth",
    color: "bg-primary-1",
    textColor: "primary-2",
  },
  {
    id: 3,
    text: "One Intelligent Platform",
    color: "bg-secondary-1",
    textColor: "secondary-2",
  },
];

export default function Hero() {
  return (
    <section className="relative h-svh w-full flex items-center justify-center bg-primary-4">
      <Image
        src="/herobg.svg"
        alt="LSS Contractor Services"
        fill
        loading="eager"
        className="object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="hidden md:flex items-center justify-between gap-4 mb-2">
          {pillItems.map((item) => (
            <div
              key={item.id}
              className={`${item.color} text-${item.textColor} py-2 px-4 rounded-full`}
            >
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-primary-2">
          Power in Visibility.
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-primary-2 mb-6">
          Precision in numbers.
        </h1>
        <p className="text-lg md:text-2xl font-medium text-primary-2 mb-8 max-w-2xl">
          We help service businesses get more qualified leads with SEO and
          performance marketing.
        </p>
        <Button className="bg-primary-2 text-primary-3 px-6 py-5 rounded-full text-lg font-medium hover:bg-primary-3 transition">
          Get a Free Quote
        </Button>
      </div>
    </section>
  );
}
