"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Navigation, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Variants } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const EXPAND_SCROLL_THRESHOLD = 80;

/* ---------------- Variants ---------------- */

const containerVariants: Variants = {
  expanded: {
    y: 0,
    opacity: 1,
    width: "auto",
  },
  collapsed: {
    y: 0,
    opacity: 1,
    width: "3rem",
  },
};

const logoVariants: Variants = {
  expanded: { opacity: 1, x: 0 },
  collapsed: { opacity: 0, x: -25 },
};

const itemVariants: Variants = {
  expanded: { opacity: 1, x: 0 },
  collapsed: { opacity: 0, x: -20 },
};
const collapsedIconVariants: Variants = {
  expanded: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  collapsed: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      delay: 0.15,
    }
  }
}
/* ---------------- Component ---------------- */

export function AnimatedNavFramer() {
  const [isExpanded, setExpanded] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  /* -------- Scroll animation (desktop only matters visually) -------- */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;

    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest;
    } else if (
      !isExpanded &&
      latest < previous &&
      scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD
    ) {
      setExpanded(true);
    }

    lastScrollY.current = latest;
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      e.preventDefault();
      setExpanded(true);
    }
  };

  return (
    <>
      {/* ================= MOBILE ================= */}
      <div className="fixed md:hidden top-4 left-1/2 -translate-x-1/2 z-50">
        {/* Button */}
        <div className="flex items-center justify-between w-20 h-12 px-3 rounded-full border bg-background/80 backdrop-blur-sm shadow-lg">
          <Navigation className="h-5 w-5" />

          <button onClick={() => setMenuOpen((p) => !p)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl border bg-background/95 backdrop-blur-xl shadow-xl p-4"
            >
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  show: { transition: { staggerChildren: 0.08 } },
                }}
                className="flex flex-col gap-3"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      show: { opacity: 1, x: 0 },
                    }}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ================= DESKTOP ================= */}
      <div className="fixed hidden md:flex top-4 left-1/2 -translate-x-1/2 z-50">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={containerVariants}
          onClick={handleNavClick}
          className={cn(
            "flex items-center overflow-visible rounded-full border bg-background/80 shadow-lg backdrop-blur-sm h-12",
            !isExpanded && "cursor-pointer justify-center"
          )}
        >
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            className="flex items-center pl-4 pr-2"
          >
            <Navigation className="h-6 w-6" />
          </motion.div>

          {/* Items */}
          <motion.div
            className={cn(
              "flex items-center gap-4 pr-4",
              !isExpanded && "pointer-events-none"
            )}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                variants={itemVariants}
                onClick={(e) => e.stopPropagation()}
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-2 py-1"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              variants={collapsedIconVariants}
              animate={isExpanded ? "expanded" : "collapsed"}
            >
              <Menu className="h-6 w-6" />
            </motion.div>
          </div>
        </motion.nav>
      </div>
    </>
  );
}