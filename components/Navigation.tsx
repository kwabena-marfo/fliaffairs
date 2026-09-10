import ThemeToggle from "@/components/theme-toggle";
import MobileNav from "@/components/mobile-nav";
import Logo from "@/components/logo";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo size="lg" />
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {/* <a href="#features" className="hover:text-primary transition-colors">
            Programs
          </a>
          <a href="#features" className="hover:text-primary transition-colors">
            Locations
          </a> */}
          <a
            href="#testimonials"
            className="hover:text-primary transition-colors"
          >
            Testimonials
          </a>
          <ThemeToggle />
          <a
            href="#waitlist"
            className="rounded-full bg-foreground px-5 py-2 text-background hover:opacity-90 transition-all active:scale-95"
          >
            Join Waitlist
          </a>
        </div>
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
