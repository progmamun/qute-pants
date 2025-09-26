import { Footer } from "@/components/shared/Footer";
import { Navigation } from "@/components/shared/Navigation";
import { TopBar } from "@/components/shared/TopBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <TopBar />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
