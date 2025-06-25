import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const standardFeatures = [
  "Online Registration",
  "Mobile Payments & E-Receipts",
  "Bulk SMS Communication",
  "Admin Dashboard",
  "Souvenir & Stock Management",
];

const premiumFeatures = [
  ...standardFeatures,
  "Online Voting System",
  "Dedicated Support",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transparent Pricing for Every Association
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Choose the plan that fits your needs. No hidden fees, just simple,
            transaction-based pricing.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="flex flex-col shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl">Standard</CardTitle>
              <CardDescription>Perfect for core management tasks.</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold font-headline">8%</span>
                <span className="text-muted-foreground"> / transaction</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {standardFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Choose Standard
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col shadow-lg border-primary border-2 relative">
            <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
              <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1">
                Most Popular
              </div>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl">Premium</CardTitle>
              <CardDescription>For associations needing advanced features.</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold font-headline">10%</span>
                <span className="text-muted-foreground"> / transaction</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Choose Premium
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
