"use client";

import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { c } from "@/_data/config";

import {
  SiApachekafka,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRedis,
  SiTypescript,
} from "react-icons/si";

const Icons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Jest: SiJest,
  "Nest.js": SiNestjs,
  Node: SiNodedotjs,
  Prisma: SiPrisma,
  GraphQL: SiGraphql,
  Redis: SiRedis,
  Kafka: SiApachekafka,
};

type IconsVariants = keyof typeof Icons;

export function Skills() {
  return (
    <div className="mx-auto">
      <ul className="flex list-none flex-wrap justify-center gap-6 text-neutral-700 transition-colors duration-300 dark:text-neutral-200">
        <TooltipProvider>
          {c.skills?.map((label) => {
            const Icon = Icons[label as IconsVariants];
            return (
              <li key={label}>
                <Tooltip>
                  <TooltipTrigger>
                    <Icon size={18} aria-label={label} />
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              </li>
            );
          })}
        </TooltipProvider>
      </ul>
    </div>
  );
}
