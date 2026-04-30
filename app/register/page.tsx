"use client";

import {
  CheckCircle2,
  LogOut,
  Loader2,
  MapPin,
  Phone,
  Sprout,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MeviPortalFooter } from "@/components/mevi-portal-footer";
import { MeviPortalHeader } from "@/components/mevi-portal-header";

const audienceOptions = [
  "A. Cá nhân/Hộ nông dân.",
  "B. Tổ hợp tác/Hợp tác xã.",
  "C. Doanh nghiệp/Cơ sở sản xuất.",
  "D. Khác (Sinh viên, người yêu nông nghiệp...).",
];

type RegistrationFormValues = {
  fullName: string;
  phone: string;
  birthYear: string;
  city: string;
  audienceGroups: string[];
};

function DecorativeLeaves() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute -top-4 -right-12 h-64 w-64 opacity-[0.04] animate-leaf-sway"
        viewBox="0 0 200 200"
      >
        <path
          d="M120 20 C160 40, 180 80, 170 130 C160 160, 130 180, 90 170 C60 160, 40 130, 50 90 C55 60, 80 30, 120 20Z"
          fill="currentColor"
          className="text-green-700"
        />
      </svg>
      <svg
        className="absolute -bottom-8 -left-16 h-48 w-48 opacity-[0.03]"
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

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="text-xs text-red-600">{message}</p>;
}

export default function RegistrationPage() {
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [submittedData, setSubmittedData] =
    useState<RegistrationFormValues | null>(null);

  const currentYear = new Date().getFullYear();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    defaultValues: {
      fullName: "",
      phone: "",
      birthYear: "",
      city: "",
      audienceGroups: [],
    },
  });

  const onSubmit = handleSubmit((values) => {
    setIsSubmittingForm(true);

    window.setTimeout(() => {
      setSubmittedData(values);
      setIsSubmittingForm(false);
      reset();
    }, 900);
  });

  return (
    <div className="mevi-portal relative flex h-dvh flex-col overflow-hidden">
      <DecorativeLeaves />

      <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto pb-28 sm:pb-32">
        <MeviPortalHeader
          badgeLabel="Đăng ký"
          className="px-4 py-4 sm:px-6 md:px-10"
          rightSlot={
            <>
              <div className="sm:hidden">
                <Link
                  href="/"
                  className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-xs font-medium opacity-80 transition hover:opacity-100"
                  style={{ color: "var(--mevi-text-muted)" }}
                >
                  <LogOut className="h-4 w-4" />
                  Quay lại
                </Link>
              </div>

              <div className="hidden items-center gap-5 sm:flex">
                <Link
                  href="/"
                  className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-medium opacity-80 transition hover:opacity-100"
                  style={{ color: "var(--mevi-text-muted)" }}
                >
                  <LogOut className="h-4 w-4" />
                  Quay lại
                </Link>
              </div>
            </>
          }
        />

        <main className="flex w-full flex-1 items-center px-3 py-2 sm:px-6 md:px-10">
        <div className="mx-auto grid w-full max-w-5xl gap-3 lg:grid-cols-[0.88fr_1.12fr]">
          <section className="hidden flex-col justify-center lg:flex">
            <div className="mevi-ecosystem-badge mb-3 w-fit px-3 py-1 text-[11px]">
              <Sprout className="h-3 w-3" />
              <span>Mevi Registration</span>
            </div>

            <h2
              className="max-w-xl text-balance text-[clamp(1.75rem,3.2vw,2.85rem)] font-bold leading-[1.07] tracking-[-0.02em]"
              style={{ color: "var(--mevi-text-primary)" }}
            >
              Đăng ký để tham gia
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--mevi-green-600), var(--mevi-earth-600))",
                }}
              >
                hệ sinh thái nông nghiệp MEVI
              </span>
            </h2>

            <p
              className="mt-3 max-w-lg text-[15px] leading-7"
              style={{ color: "var(--mevi-text-secondary)" }}
            >
              Điền nhanh các thông tin cơ bản để đội ngũ MEVI hiểu hơn về khu
              vực hoạt động và nhóm đối tượng bạn đang hướng tới.
            </p>

            <div className="mt-4 grid gap-2.5">
              <div className="mevi-login-card rounded-2xl p-3 shadow-[0_8px_18px_-14px_rgba(6,78,59,0.25)]">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--mevi-text-muted)" }}
                >
                  Bước 1
                </p>
                <p
                  className="mt-1.5 text-sm font-semibold"
                  style={{ color: "var(--mevi-text-primary)" }}
                >
                  Cung cấp thông tin cá nhân
                </p>
              </div>

              <div className="mevi-login-card rounded-2xl p-3 shadow-[0_8px_18px_-14px_rgba(6,78,59,0.25)]">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--mevi-text-muted)" }}
                >
                  Bước 2
                </p>
                <p
                  className="mt-1.5 text-sm font-semibold"
                  style={{ color: "var(--mevi-text-primary)" }}
                >
                  Xác định khu vực hoạt động
                </p>
              </div>

              <div className="mevi-login-card rounded-2xl p-3 shadow-[0_8px_18px_-14px_rgba(6,78,59,0.25)]">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--mevi-text-muted)" }}
                >
                  Bước 3
                </p>
                <p
                  className="mt-1.5 text-sm font-semibold"
                  style={{ color: "var(--mevi-text-primary)" }}
                >
                  Chọn nhóm đối tượng phù hợp
                </p>
              </div>
            </div>
          </section>

          <section className="mevi-login-card mx-auto flex h-full min-h-0 w-full max-w-3xl flex-col rounded-[24px] p-4 sm:p-[18px] md:p-5">
            <div className="mb-3">
              <h3
                className="text-base font-bold md:text-lg"
                style={{ color: "var(--mevi-text-primary)" }}
              >
                Phiếu đăng ký
              </h3>
            </div>

            <form
              onSubmit={onSubmit}
              className="flex min-h-0 flex-1 flex-col gap-2.5"
            >
              <div className="grid min-h-0 flex-1 gap-2.5 pr-1">
                <div className="space-y-1">
                  <label
                    htmlFor="fullName"
                    className="flex items-center gap-2 text-xs font-semibold sm:text-sm"
                    style={{ color: "var(--mevi-text-secondary)" }}
                  >
                    <User className="h-4 w-4" />
                    1. Họ và tên của bạn
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="mevi-input"
                    placeholder="Nguyễn Văn A"
                    {...register("fullName", {
                      required: "Vui lòng nhập họ và tên.",
                    })}
                  />
                  <FieldError message={errors.fullName?.message} />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="phone"
                    className="flex items-center gap-2 text-xs font-semibold sm:text-sm"
                    style={{ color: "var(--mevi-text-secondary)" }}
                  >
                    <Phone className="h-4 w-4" />
                    2. Số điện thoại
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    className="mevi-input"
                    placeholder="09xxxxxxxx"
                    {...register("phone", {
                      required: "Vui lòng nhập số điện thoại.",
                      pattern: {
                        value: /^(0|\+84)\d{9,10}$/,
                        message: "Số điện thoại chưa đúng định dạng.",
                      },
                    })}
                  />
                  <FieldError message={errors.phone?.message} />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="birthYear"
                    className="flex items-center gap-2 text-xs font-semibold sm:text-sm"
                    style={{ color: "var(--mevi-text-secondary)" }}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    3. Năm sinh
                  </label>
                  <input
                    id="birthYear"
                    type="number"
                    className="mevi-input"
                    placeholder="1995"
                    {...register("birthYear", {
                      required: "Vui lòng nhập năm sinh.",
                      validate: (value) => {
                        const year = Number(value);
                        if (!Number.isInteger(year)) {
                          return "Năm sinh không hợp lệ.";
                        }
                        if (year < 1940 || year > currentYear) {
                          return `Năm sinh cần nằm trong khoảng 1940 - ${currentYear}.`;
                        }
                        return true;
                      },
                    })}
                  />
                  <FieldError message={errors.birthYear?.message} />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="city"
                    className="flex items-center gap-2 text-xs font-semibold sm:text-sm"
                    style={{ color: "var(--mevi-text-secondary)" }}
                  >
                    <MapPin className="h-4 w-4" />
                    4. Địa chỉ khu vực bạn đang hoạt động (Tỉnh/Thành phố)
                  </label>
                  <input
                    id="city"
                    type="text"
                    className="mevi-input"
                    placeholder="Ví dụ: Đắk Lắk, Cần Thơ, Hà Nội"
                    {...register("city", {
                      required: "Vui lòng nhập tỉnh/thành phố.",
                    })}
                  />
                  <FieldError message={errors.city?.message} />
                </div>

                <div className="space-y-1.5">
                  <p
                    className="text-xs font-semibold sm:text-sm"
                    style={{ color: "var(--mevi-text-secondary)" }}
                  >
                    5. Bạn thuộc nhóm đối tượng nào?
                  </p>

                  <div className="grid gap-1.5 rounded-xl border border-[var(--mevi-border)] bg-white/60 p-2.5">
                    {audienceOptions.map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-start gap-2 rounded-lg px-1 py-0.5"
                        style={{ color: "var(--mevi-text-primary)" }}
                      >
                        <input
                          type="checkbox"
                          value={option}
                          className="mt-0.5 h-4 w-4 rounded"
                          style={{ accentColor: "var(--mevi-green-600)" }}
                          {...register("audienceGroups", {
                            validate: (value) =>
                              value.length > 0 ||
                              "Vui lòng chọn ít nhất một nhóm đối tượng.",
                          })}
                        />
                        <span className="text-xs leading-5">{option}</span>
                      </label>
                    ))}
                  </div>
                  <FieldError message={errors.audienceGroups?.message} />
                </div>
              </div>

              <button
                type="submit"
                className="mevi-btn-primary h-10 rounded-xl text-sm"
                disabled={isSubmittingForm}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmittingForm ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Đang gửi đăng ký...
                    </>
                  ) : (
                    "Gửi thông tin đăng ký"
                  )}
                </span>
              </button>
            </form>

            {submittedData ? (
              <div className="mt-2.5 rounded-xl border border-emerald-200 bg-emerald-50/90 p-2.5">
                <p className="text-xs font-semibold text-emerald-800 sm:text-sm">
                  Đăng ký thành công cho {submittedData.fullName}
                </p>
                <p className="mt-1 text-xs text-emerald-700 sm:text-sm md:hidden">
                  SĐT: {submittedData.phone} · Năm sinh:{" "}
                  {submittedData.birthYear}
                </p>
                <p className="mt-1 text-xs text-emerald-700 sm:text-sm md:hidden">
                  Khu vực: {submittedData.city}
                </p>
                <p className="mt-1 text-xs text-emerald-700 sm:text-sm md:hidden">
                  Nhóm đối tượng: {submittedData.audienceGroups.join(", ")}
                </p>
                <p className="mt-1 hidden text-xs text-emerald-700 md:block">
                  {submittedData.phone} · {submittedData.city} ·{" "}
                  {submittedData.audienceGroups.length} nhóm đối tượng đã chọn
                </p>
              </div>
            ) : null}
          </section>
        </div>
        </main>
      </div>

      <MeviPortalFooter />
    </div>
  );
}
