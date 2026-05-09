import { Loader2, LogOut, ShieldCheck } from "lucide-react";
import { MeviPortalHeader } from "@/components/mevi-portal-header";

type SurveyPortalHeaderProps = {
  title: string;
  accent: string;
  isExiting?: boolean;
  onExit?: () => void;
};

export function SurveyPortalHeader({
  title,
  accent,
  isExiting = false,
  onExit,
}: SurveyPortalHeaderProps) {
  return (
    <MeviPortalHeader
      badgeLabel={title}
      className="flex flex-col gap-3 px-3 py-3 opacity-0 animate-fade-in-up sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4 md:px-12"
      style={{ animationFillMode: "forwards" }}
      rightSlotClassName="flex w-full flex-wrap items-center justify-between gap-3 sm:w-auto sm:justify-end sm:gap-4"
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

          {onExit && (
            <button
              type="button"
              onClick={onExit}
              disabled={isExiting}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-red-50 disabled:pointer-events-none disabled:opacity-60"
              style={{
                color: "var(--mevi-text-muted)",
              }}
              title="Thoát"
            >
              {isExiting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <LogOut className="h-4 w-4" />
              )}
              <span>{isExiting ? "Đang thoát..." : "Thoát"}</span>
            </button>
          )}
        </>
      }
    />
  );
}
