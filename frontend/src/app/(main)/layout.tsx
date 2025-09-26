export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
