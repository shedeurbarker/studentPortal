import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  UserPlus,
  SmartphoneNfc,
  MessagesSquare,
  Vote,
  LayoutDashboard,
  ReceiptText,
} from "lucide-react";

const features = [
  {
    icon: <UserPlus className="h-8 w-8 text-primary" />,
    title: "Online Registration",
    description:
      "Seamless self-registration for students, accessible on any device to avoid queues and congestion.",
  },
  {
    icon: <SmartphoneNfc className="h-8 w-8 text-primary" />,
    title: "Mobile Payments",
    description:
      "Conveniently pay for dues and purchase souvenirs using Mobile Money wallets right from your phone.",
  },
  {
    icon: <ReceiptText className="h-8 w-8 text-primary" />,
    title: "E-Receipts",
    description:
      "Instantly receive electronic receipts for all transactions, eliminating the hassle of lost paper receipts.",
  },
  {
    icon: <MessagesSquare className="h-8 w-8 text-primary" />,
    title: "Bulk SMS",
    description:
      "Admins can send important announcements and updates to all students via bulk SMS messages.",
  },
  {
    icon: <Vote className="h-8 w-8 text-primary" />,
    title: "Online Voting System",
    description:
      "Facilitate secure and transparent elections for dinner nights, awards, and executive positions.",
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: "Admin Dashboard",
    description:
      "Manage student records, confirm purchases, track souvenir inventory, and oversee all association activities.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            CampusConnect provides a powerful suite of tools to manage your
            association with ease and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col text-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                {feature.icon}
                <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
