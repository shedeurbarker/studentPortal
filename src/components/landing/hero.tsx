import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Streamline Your Student Association
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Introducing CampusConnect: The all-in-one platform for registration, payments, communication, and voting, designed for modern campus life.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#pricing">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://placehold.co/400x800.png"
            alt="CampusConnect App on a phone"
            width={300}
            height={600}
            className="rounded-3xl shadow-2xl"
            data-ai-hint="app mockup phone"
          />
        </div>
      </div>
    </section>
  );
}
