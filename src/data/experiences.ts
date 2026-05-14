import { CalendarDays, Landmark, MicVocal, Mountain } from "lucide-react";
import type { ExperienceId } from "@/i18n/dictionaries/types";

export const experienceItems = [
  {
    id: "tours" as const satisfies ExperienceId,
    icon: Landmark,
  },
  {
    id: "concerts" as const satisfies ExperienceId,
    icon: MicVocal,
  },
  {
    id: "viewpoint" as const satisfies ExperienceId,
    icon: Mountain,
  },
  {
    id: "bookEvents" as const satisfies ExperienceId,
    icon: CalendarDays,
  },
] as const;
