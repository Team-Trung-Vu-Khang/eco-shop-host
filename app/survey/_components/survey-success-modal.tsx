import { CheckCircle2 } from "lucide-react";

type SurveySuccessModalProps = {
  onGoHome: () => void;
};

export function SurveySuccessModal({ onGoHome }: SurveySuccessModalProps) {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/25 px-4 backdrop-blur-sm">
      <div
        className="w-full max-w-md rounded-[28px] p-6 shadow-2xl animate-fade-in-scale"
        style={{
          background: "rgba(255, 255, 255, 0.97)",
        }}
      >
        <div className="flex items-start gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, var(--mevi-green-100), var(--mevi-green-200))",
              color: "var(--mevi-green-700)",
            }}
          >
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <p
              className="text-lg font-bold"
              style={{ color: "var(--mevi-text-primary)" }}
            >
              Gửi khảo sát thành công
            </p>
            <p
              className="mt-2 text-sm leading-6"
              style={{ color: "var(--mevi-text-secondary)" }}
            >
              Cảm ơn bà con đã chia sẻ ý kiến. MEVI sẽ chuyển tiếp ngay để bạn
              tiếp tục công việc.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onGoHome}
            className="mevi-btn-primary w-auto px-5"
          >
            <span>Về trang chủ</span>
          </button>
        </div>
      </div>
    </div>
  );
}
