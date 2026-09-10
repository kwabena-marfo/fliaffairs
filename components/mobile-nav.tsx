"use client";

import * as React from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "#features", label: "Programs" },
  { href: "#features", label: "Locations" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          className="md:hidden"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-xs">
        <SheetHeader>
          <SheetTitle className="text-left text-lg font-extrabold tracking-tighter">
            FLIAFFAIRS
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {links.map((link) => (
            <SheetClose asChild key={link.label}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <a
              href="#waitlist"
              className="mt-2 rounded-full bg-foreground px-5 py-3 text-center font-medium text-background transition-all hover:opacity-90 active:scale-95"
            >
              Join Waitlist
            </a>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
