import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export function ProductShowcase() {
  return (
    <section id="product" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See CampusConnect in Action
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore the powerful admin dashboard that puts you in control of your association's operations.
          </p>
        </div>
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mx-auto max-w-2xl">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="registration">Registrations</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="voting">Voting</TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <TabsContent value="dashboard">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="https://placehold.co/1200x600.png"
                    alt="Dashboard view"
                    width={1200}
                    height={600}
                    className="w-full"
                    data-ai-hint="dashboard analytics"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="registration">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="https://placehold.co/1200x600.png"
                    alt="Student registration management view"
                    width={1200}
                    height={600}
                    className="w-full"
                    data-ai-hint="user list table"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="payments">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="https://placehold.co/1200x600.png"
                    alt="Payment records view"
                    width={1200}
                    height={600}
                    className="w-full"
                    data-ai-hint="transaction history"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="voting">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src="https://placehold.co/1200x600.png"
                    alt="Voting campaign setup view"
                    width={1200}
                    height={600}
                    className="w-full"
                    data-ai-hint="voting poll creation"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
