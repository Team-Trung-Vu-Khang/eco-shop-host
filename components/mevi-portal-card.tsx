"use client";

import Image from "next/image";

type MeviPortalCardProps = {
  badgeLabel: string;
  accentColor?: string;
  className?: string;
};

export function MeviPortalCard({
  badgeLabel,
  accentColor = "var(--mevi-green-700)",
  className = "",
}: MeviPortalCardProps) {
  return (
    <div
      className={`group w-fit max-w-[calc(100vw-1.5rem)] self-start rounded-[22px] bg-transparent p-2.5 shadow-[0_16px_42px_-30px_rgba(6,78,59,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_54px_-28px_rgba(6,78,59,0.25)] sm:max-w-none sm:p-3.5 ${className}`.trim()}
      style={{ background: "transparent" }}
    >
      <div className="flex items-start gap-2.5 sm:gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/95 shadow-sm transition-transform duration-300 group-hover:scale-[1.03] sm:h-12 sm:w-12"
          style={{ border: "1px solid rgba(212, 229, 216, 0.45)" }}
        >
          <Image
            src="/mevi-logo.jpeg"
            alt="MEVI"
            className="h-7 w-7 rounded-xl object-contain sm:h-8 sm:w-8"
            width={32}
            height={32}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <h1
              className="shrink-0 text-sm font-bold tracking-tight sm:text-base"
              style={{ color: "var(--mevi-text-primary)" }}
            >
              MEVI
            </h1>
            <span
              className="min-w-0 truncate rounded-full px-2 py-0.5 text-[9px] font-semibold sm:text-[10px]"
              style={{
                color: accentColor,
                background: "rgba(255,255,255,0.35)",
              }}
            >
              {badgeLabel}
            </span>
          </div>

          <p
            className="mt-0.5 whitespace-nowrap text-[10px] leading-tight sm:text-[11px]"
            style={{ color: "var(--mevi-text-muted)" }}
          >
            Hệ sinh thái Nông nghiệp
          </p>

          <div className="mt-1.5 space-y-0.5 text-[10px] leading-tight sm:mt-2 sm:space-y-1 sm:text-[11px]">
            <p
              className="hidden sm:block"
              style={{ color: "var(--mevi-text-secondary)" }}
            >
              Địa chỉ: Tầng 9 - Tòa Zodiac, Số 1, Ngõ 19, Phố Duy Tân, Cầu Giấy,
              Hà Nội
            </p>
            <p style={{ color: "var(--mevi-text-secondary)" }}>
              SĐT: 08.1221.3836
            </p>
            <a
              href="https://mevi.edtexco.vn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex whitespace-nowrap no-underline transition-colors hover:underline sm:inline-flex"
              style={{ color: accentColor }}
            >
              <span className="hidden sm:flex">Website: mevi.edtexco.vn</span>
              <span className="sm:hidden">Website: mevi.edtexco.vn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
