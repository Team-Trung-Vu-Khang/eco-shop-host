"use client";

import Image from "next/image";

type MeviPortalFooterProps = {
  className?: string;
  mobileMode?: "compact" | "full";
};

export function MeviPortalFooter({
  className = "",
  mobileMode = "full",
}: MeviPortalFooterProps) {
  return (
    <footer
      className={`fixed inset-x-0 bottom-0 z-40 w-full px-4 pt-3 pb-2 text-center sm:py-8 backdrop-blur-sm ${className}`.trim()}
      style={{
        borderTop: "1px solid var(--mevi-border)",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-x-2 gap-y-1.5 sm:hidden">
        <div className="flex shrink-0 items-center gap-2">
          <Image
            src="/mevi-logo.jpeg"
            alt="MEVI"
            className="h-5 w-5 rounded-md object-contain"
            width={20}
            height={20}
          />
          <span
            className="text-sm font-bold"
            style={{ color: "var(--mevi-text-primary)" }}
          >
            MEVI
          </span>
        </div>
        <p
          className={`min-w-0 max-w-full whitespace-normal text-[9px] leading-snug ${
            mobileMode === "compact" ? "tracking-normal" : "tracking-normal"
          }`}
          style={{ color: "var(--mevi-text-muted)" }}
        >
          © 2026 MEVI — Hệ sinh thái Nông nghiệp thông minh. Tất cả quyền được
          bảo lưu.
        </p>
      </div>

      <div className="hidden sm:block">
        <div className="mb-2 flex items-center justify-center gap-2">
          <Image
            src="/mevi-logo.jpeg"
            alt="MEVI"
            className="h-6 w-6 rounded-lg object-contain"
            width={24}
            height={24}
          />
          <span
            className="text-sm font-bold"
            style={{ color: "var(--mevi-text-primary)" }}
          >
            MEVI
          </span>
        </div>
        <p
          className="mx-auto max-w-full whitespace-nowrap text-[10px] leading-none sm:text-xs"
          style={{ color: "var(--mevi-text-muted)" }}
        >
          © 2026 MEVI — Hệ sinh thái Nông nghiệp thông minh. Tất cả quyền được
          bảo lưu.
        </p>
      </div>
    </footer>
  );
}
