"use client";

import {
  ArrowRight,
  BookOpen,
  Factory,
  Leaf,
  Link2,
  Loader2,
  Lock,
  Mail,
  ShieldCheck,
  ShoppingBag,
  Sprout,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

/* ===== Module Quick Access Data ===== */

const modules = [
  {
    id: "edu",
    name: "Edu",
    icon: BookOpen,
    variant: "edu" as const,
    dotColor: "bg-blue-400",
  },
  {
    id: "farm",
    name: "Farm",
    icon: Sprout,
    variant: "farm" as const,
    dotColor: "bg-green-400",
  },
  {
    id: "factory",
    name: "Factory",
    icon: Factory,
    variant: "factory" as const,
    dotColor: "bg-orange-400",
  },
  {
    id: "shop",
    name: "Shop",
    icon: ShoppingBag,
    variant: "shop" as const,
    dotColor: "bg-purple-400",
  },
];

/* ===== Decorative Leaves ===== */

function DecorativeLeaves() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute -top-4 -right-12 w-64 h-64 opacity-[0.04] animate-leaf-sway"
        viewBox="0 0 200 200"
      >
        <path
          d="M120 20 C160 40, 180 80, 170 130 C160 160, 130 180, 90 170 C60 160, 40 130, 50 90 C55 60, 80 30, 120 20Z"
          fill="currentColor"
          className="text-green-700"
        />
      </svg>
      <svg
        className="absolute -bottom-8 -left-16 w-48 h-48 opacity-[0.03]"
        viewBox="0 0 200 200"
        style={{ animation: "leaf-sway 4s ease-in-out infinite 1.5s" }}
      >
        <path
          d="M40 160 C20 120, 30 70, 70 40 C100 20, 140 30, 160 60 C170 80, 165 110, 140 130 C110 155, 70 170, 40 160Z"
          fill="currentColor"
          className="text-green-600"
        />
      </svg>
    </div>
  );
}

/* ===== Ecosystem Flow Mini ===== */

function EcosystemFlowMini() {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 py-3 opacity-0 animate-fade-in-up delay-500"
      style={{ animationFillMode: "forwards" }}
    >
      {modules.map((mod, i) => (
        <div key={mod.id} className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full ${mod.dotColor}`}></div>
            <span
              className="text-xs font-medium"
              style={{ color: "var(--mevi-text-muted)" }}
            >
              {mod.name}
            </span>
          </div>
          {i < modules.length - 1 && (
            <div
              className="hidden sm:block w-4 h-px bg-gradient-to-r from-green-300 to-green-200 animate-grow-line"
              style={{
                animationDelay: `${0.6 + i * 0.1}s`,
                animationFillMode: "forwards",
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ===== Login Page ===== */

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    // Simulate login then redirect to dashboard
    setTimeout(() => {
      setIsLoggingIn(false);
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <div className="mevi-portal relative flex min-h-dvh flex-col overflow-x-hidden overflow-y-auto">
      <DecorativeLeaves />

      {/* Top Nav */}
      <nav
        className="relative z-10 flex flex-col gap-4 px-4 py-5 opacity-0 animate-fade-in-up sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-12"
        style={{ animationFillMode: "forwards" }}
      >
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <img
            src="/mevi-logo.jpeg"
            alt="MEVI Logo"
            className="h-10 w-10 rounded-xl object-contain shadow-sm"
            style={{ border: "1px solid var(--mevi-border)" }}
          />
          <div>
            <h1
              className="text-lg font-bold tracking-tight"
              style={{ color: "var(--mevi-text-primary)" }}
            >
              MEVI
            </h1>
            <p
              className="text-[11px] font-medium leading-tight -mt-0.5"
              style={{ color: "var(--mevi-text-muted)" }}
            >
              Hệ sinh thái Nông nghiệp
            </p>
          </div>
        </div>
        <div className="mevi-badge hidden sm:flex sm:self-auto">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Nền tảng bảo mật</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 pb-10 pt-2 sm:px-6 sm:pb-12 md:px-8 md:pt-4">
        {/* Hero */}
        <div className="mb-6 max-w-2xl text-center md:mb-8">
          <div
            className="opacity-0 animate-fade-in-up delay-100"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="mevi-ecosystem-badge mx-auto mb-3 text-xs py-1">
              <Link2 className="w-3.5 h-3.5" />
              <span>Mevi Ecosystem</span>
            </div>
          </div>

          <h2
            className="text-2xl font-extrabold leading-tight tracking-tight opacity-0 animate-fade-in-up delay-200 sm:text-3xl md:text-4xl"
            style={{
              color: "var(--mevi-text-primary)",
              animationFillMode: "forwards",
            }}
          >
            Nền tảng quản lý
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--mevi-green-600), var(--mevi-green-800))",
              }}
            >
              Nông nghiệp thông minh
            </span>
          </h2>

          <EcosystemFlowMini />
        </div>

        {/* Login Card */}
        <div
          className="mevi-login-card w-full max-w-sm p-5 opacity-0 animate-fade-in-scale delay-300 sm:p-6 md:p-8"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-3 animate-float">
              <img
                src="/mevi-logo.jpeg"
                alt="MEVI Logo"
                className="h-10 w-10 rounded-xl object-contain shadow-sm"
                style={{ border: "1px solid var(--mevi-border)" }}
              />
            </div>
            <h3
              className="text-lg font-bold"
              style={{ color: "var(--mevi-text-primary)" }}
            >
              Chào mừng trở lại!
            </h3>
            <p
              className="text-xs mt-0.5"
              style={{ color: "var(--mevi-text-muted)" }}
            >
              Đăng nhập vào hệ thống MEVI
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="login-email"
                className="block text-sm font-medium"
                style={{ color: "var(--mevi-text-secondary)" }}
              >
                Email / Số điện thoại
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] pointer-events-none"
                  style={{ color: "var(--mevi-text-muted)" }}
                />
                <input
                  id="login-email"
                  type="text"
                  className="mevi-input"
                  style={{ paddingLeft: "44px" }}
                  placeholder="nguyenvana@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium"
                  style={{ color: "var(--mevi-text-secondary)" }}
                >
                  Mật khẩu
                </label>
                <button
                  type="button"
                  className="text-xs font-medium hover:underline"
                  style={{ color: "var(--mevi-green-600)" }}
                >
                  Quên mật khẩu?
                </button>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] pointer-events-none"
                  style={{ color: "var(--mevi-text-muted)" }}
                />
                <input
                  id="login-password"
                  type="password"
                  className="mevi-input"
                  style={{ paddingLeft: "44px" }}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2 pt-1">
              <input
                id="remember-me"
                type="checkbox"
                className="w-4 h-4 rounded"
                style={{ accentColor: "var(--mevi-green-600)" }}
              />
              <label
                htmlFor="remember-me"
                className="text-sm"
                style={{ color: "var(--mevi-text-secondary)" }}
              >
                Ghi nhớ đăng nhập
              </label>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="mevi-btn-primary"
                disabled={isLoggingIn}
              >
                <span className="flex items-center justify-center gap-2">
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Đang đăng nhập...
                    </>
                  ) : (
                    <>
                      Đăng nhập
                      <ArrowRight className="w-[18px] h-[18px]" />
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 mt-auto w-full px-4 py-6 text-center sm:py-8"
        style={{
          borderTop: "1px solid var(--mevi-border)",
          background: "rgba(255,255,255,0.3)",
        }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <img
            src="/mevi-logo.jpeg"
            alt="MEVI"
            className="h-6 w-6 rounded-lg object-contain"
          />
          <span
            className="text-sm font-bold"
            style={{ color: "var(--mevi-text-primary)" }}
          >
            MEVI
          </span>
        </div>
        <p
          className="mx-auto max-w-md text-xs leading-relaxed sm:max-w-none"
          style={{ color: "var(--mevi-text-muted)" }}
        >
          © 2026 MEVI — Hệ sinh thái Nông nghiệp thông minh. Tất cả quyền được
          bảo lưu.
        </p>
      </footer>
    </div>
  );
}
