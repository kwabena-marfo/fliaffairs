import { LucideInbox } from "lucide-react";

import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <Logo size="sm" />
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Forward Leap International Affairs
          </p>
        </div>
        <p className="text-xs text-muted-foreground font-mono">
          © 2025 FLIAFFAIRS GLOBAL RELOCATION. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          <a
            href="https://twitter.com/Fliaffairs"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <LucideInbox className="size-5" />
          </a>
          <a
            href="https://linkedin.com/company/fliaffairs"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <LucideInbox className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
