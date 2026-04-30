"use client";

import { type CSSProperties, type ReactNode } from "react";
import { MeviPortalCard } from "@/components/mevi-portal-card";

type MeviPortalHeaderProps = {
  badgeLabel: string;
  className?: string;
  cardClassName?: string;
  rightSlot?: ReactNode;
  rightSlotClassName?: string;
  style?: CSSProperties;
};

export function MeviPortalHeader({
  badgeLabel,
  className = "",
  cardClassName = "",
  rightSlot,
  rightSlotClassName = "",
  style,
}: MeviPortalHeaderProps) {
  return (
    <nav
      className={`relative z-10 flex items-center justify-between gap-3 ${className}`.trim()}
      style={style}
    >
      <MeviPortalCard badgeLabel={badgeLabel} className={cardClassName} />

      {rightSlot ? (
        <div className={rightSlotClassName || "flex items-center justify-end"}>
          {rightSlot}
        </div>
      ) : null}
    </nav>
  );
}
