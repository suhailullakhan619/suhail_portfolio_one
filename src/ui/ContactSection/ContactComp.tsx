
import { motion } from "framer-motion";
import type { Variants } from "framer-motion"

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { ArrowUpRight } from "lucide-react";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import type { SvgIconComponent } from "@mui/icons-material";
import SuhailProfileImg from '../../assets/SuhailProfileImg.png'
type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: SvgIconComponent;
};



const socialLinks: SocialLink[] = [
  {
    label: "Gmail",
    handle: "suhailullakhan619@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=suhailullakhan619@gmail.com",
    icon: EmailIcon,
  },
  {
    label: "WhatsApp",
    handle: "+91 72043 38475",
    href: "https://wa.me/917204338475",
    icon: WhatsAppIcon,
  },
  {
    label: "LinkedIn",
    handle: "Suhail Ulla Khan",
    href: "https://www.linkedin.com/in/suhailullakhan",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    handle: "@suhailullakhan619",
    href: "https://github.com/suhailullakhan619",
    icon: GitHubIcon,
  },
  {
    label: "Twitter",
    handle: "@SuhailUllaKhan7",
    href: "https://x.com/SuhailUllaKhan7",
    icon: XIcon,
  },
];

const listVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export function Contact() {

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  return (
    <section className="flex items-center justify-center min-h-screen overflow-hidden p-4 md:p-8">
      <div className="max-w-3xl w-full">
        {/* Glass gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.05] via-transparent to-transparent pointer-events-none" />
        {/* Right column - Profile card */}
        <div className="relative">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-primary/15 via-transparent to-transparent blur-3xl" />
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-border/50 bg-background/60 p-8 backdrop-blur-xl">
            <div className="flex flex-col items-center text-center">
              {/* Avatar with glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative mb-6"
              >
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl" />
                <img
                  src={SuhailProfileImg}
                  alt="Profile Image"
                  className="relative h-32 w-32 rounded-full border border-border/40 object-cover shadow-[0_25px_60px_rgba(15,23,42,0.3)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-1"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  Suhail Ulla Khan
                </h3>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/45">
                  Frontend Developer · React & Vue.js
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70"
              >
                Frontend developer focused on building scalable,
                responsive, and high-performance web applications
                with React.js, Vue.js, TypeScript, and modern UI technologies.
              </motion.p>
            </div>

            {/* Social links */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="mt-8 flex flex-col gap-3"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    variants={itemVariants}
                    href={
                      social.label === "Gmail"
                        ? isMobile
                          ? "mailto:suhailullakhan619@gmail.com"
                          : "https://mail.google.com/mail/?view=cm&fs=1&to=suhailullakhan619@gmail.com"
                        : social.href
                    }
                    target={
                      social.label === "Gmail" && isMobile
                        ? undefined
                        : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-border/40 bg-background/70 px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:border-border/60 hover:bg-background/80 hover:shadow-md"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.985 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/70 text-foreground/80 shadow-[0_10px_30px_rgba(15,23,42,0.2)] transition-all group-hover:shadow-[0_10px_30px_rgba(15,23,42,0.3)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] dark:group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {social.label}
                        </p>
                        <p className="text-xs text-foreground/60">
                          {social.handle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground/70" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
