"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common";

import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right */}

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost">
              Login
            </Button>

            <Button>
              Get Started
            </Button>
          </div>

          {/* Mobile */}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>

        </div>
      </Container>
    </header>
  );
}