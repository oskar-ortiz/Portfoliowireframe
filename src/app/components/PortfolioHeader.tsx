"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { BrandMonogram } from "./BrandMonogram";

type PortfolioHeaderProps = Readonly<{
  navigationItems: readonly string[];
}>;

export function PortfolioHeader({ navigationItems }: PortfolioHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const mobileMenuId = "mobile-navigation";

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const themeLabel = isDark ? "Switch to light mode" : "Switch to dark mode";
  const menuLabel = mobileMenuOpen ? "Close navigation menu" : "Open navigation menu";

  return (
    <header className="nav-shell">
      <div className="content-shell">
        <nav className="nav-row" aria-label="Primary navigation">
          <div className="brand-stack">
            <div className="brand-mark">
              <BrandMonogram className="brand-monogram-icon" />
            </div>
            <span className="brand-copy">Oskar Ortiz</span>
          </div>

          <div className="nav-tools">
            <div className="desktop-nav">
              {navigationItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </a>
              ))}
            </div>

            <button
              type="button"
              aria-label={themeLabel}
              title={themeLabel}
              className="theme-toggle"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {isDark ? (
                <Sun className="theme-toggle-icon" aria-hidden="true" />
              ) : (
                <Moon className="theme-toggle-icon" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="mobile-tools">
            <button
              type="button"
              aria-label={themeLabel}
              title={themeLabel}
              className="theme-toggle"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {isDark ? (
                <Sun className="theme-toggle-icon" aria-hidden="true" />
              ) : (
                <Moon className="theme-toggle-icon" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              className="menu-toggle"
              aria-label={menuLabel}
              title={menuLabel}
              aria-expanded={mobileMenuOpen}
              aria-controls={mobileMenuId}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <X className="menu-toggle-icon" aria-hidden="true" />
              ) : (
                <Menu className="menu-toggle-icon" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <nav id={mobileMenuId} className="mobile-nav-panel" aria-label="Mobile navigation">
            <div className="mobile-nav-list">
              {navigationItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
