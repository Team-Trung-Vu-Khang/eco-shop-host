import { ShieldCheck } from "lucide-react";
import { MeviPortalHeader } from "@/components/mevi-portal-header";

type SurveyPortalHeaderProps = {
  title: string;
  accent: string;
};

export function SurveyPortalHeader({ title, accent }: SurveyPortalHeaderProps) {
  return (
    <MeviPortalHeader
      badgeLabel={title}
      className="flex flex-col gap-3 px-3 py-3 opacity-0 animate-fade-in-up sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4 md:px-12"
      style={{ animationFillMode: "forwards" }}
      rightSlotClassName="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end sm:gap-4"
      rightSlot={
        <>
          <div
            className="hidden min-w-0 items-center gap-2 text-sm sm:flex"
            style={{ color: "var(--mevi-text-secondary)" }}
          >
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--mevi-green-500), var(--mevi-green-700))",
              }}
            >
              <ShieldCheck className="h-4 w-4" />
            </div>
            <span className="truncate font-medium">Khảo sát MEVI</span>
          </div>

          <div
            className="flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold"
            style={{
              color: accent,
              background: "rgba(255, 255, 255, 0.78)",
              border: "1px solid rgba(212, 229, 216, 0.9)",
            }}
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span className="truncate">{title}</span>
          </div>
        </>
      }
    />
  );
}
