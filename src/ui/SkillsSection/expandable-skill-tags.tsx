"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { Badge } from "./badge";
import { Button } from "./button";

/* ✅ Skill Type */
type SkillItem = {
  label: string;
  icon?: string; // optional icon path (svg/png)
};

/* ✅ Props */
interface ExpandableSkillTagsProps {
  title: string;
  skills: (string | SkillItem)[];
  initialCount?: number;
  className?: string;
}

export const ExpandableSkillTags = ({
  title,
  skills,
  initialCount = 10,
  className,
}: ExpandableSkillTagsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  /* ✅ Memoized lists */
  const visibleSkills = React.useMemo(
    () => skills.slice(0, initialCount),
    [skills, initialCount]
  );

  const hiddenSkills = React.useMemo(
    () => skills.slice(initialCount),
    [skills, initialCount]
  );

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  /* ✅ Animation configs */
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  /* ✅ Render Skill Badge */
  const renderSkill = (skill: string | SkillItem) => {
    const isObject = typeof skill !== "string";
    const label = isObject ? skill.label : skill;
    const icon = isObject ? skill.icon : null;

    return (
      <Badge
        variant="secondary"
        className="flex items-center gap-1.5 px-2.5 py-1 text-xs  transition"
      >
        {icon && (
          <img
            src={icon}
            alt={label}
            className="w-3.5 h-3.5 object-contain"
          />
        )}
        {label}
      </Badge>
    );
  };

  return (
    <section className={cn("w-full", className)}>
      {/* Title */}
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>

      {/* Skills Container */}
      <motion.div
        className="flex flex-wrap gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Visible Skills */}
        {visibleSkills.map((skill, index) => (
          <motion.div key={`visible-${index}`} variants={itemVariants}>
            {renderSkill(skill)}
          </motion.div>
        ))}

        {/* Hidden Skills */}
        <AnimatePresence>
          {isExpanded &&
            hiddenSkills.map((skill, index) => (
              <motion.div
                key={`hidden-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {renderSkill(skill)}
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      {/* Toggle Button */}
      {skills.length > initialCount && (
        <Button
          variant="link"
          className="mt-3 px-0 text-sm text-cyan-400 cursor-pointer"
          onClick={toggleExpansion}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "View less skills" : "View all skills"}
        </Button>
      )}
    </section>
  );
};