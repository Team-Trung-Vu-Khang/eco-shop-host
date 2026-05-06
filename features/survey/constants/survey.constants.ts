import {
  BookText,
  Factory,
  ShoppingBag,
  Sprout,
} from "lucide-react";
import {
  type SurveyQuestionType,
  type SurveyRequestType,
} from "@/features/survey/api";

export const DEFAULT_SURVEY_LOOKUP_VALUE = "0315624919";

export const BRANCH_QUESTION_CODE = "KS06";
export const BRANCH_QUESTION_CONTENT =
  "Bạn mong muốn giải quyết vấn đề nào nhất khi tham gia App MEVI?";

export const SURVEY_META: Record<
  SurveyRequestType,
  {
    name: string;
    description: string;
    icon: typeof BookText;
    accent: string;
    softAccent: string;
  }
> = {
  general: {
    name: "Khảo sát chung",
    description: "Ghi nhận ý kiến chung để MEVI hỗ trợ bà con rõ ràng hơn.",
    icon: BookText,
    accent: "var(--mevi-green-700)",
    softAccent: "rgba(16, 185, 129, 0.12)",
  },
  farm: {
    name: "MEVI FARM",
    description: "Phù hợp với nhu cầu canh tác, theo dõi mùa vụ và nông trại.",
    icon: Sprout,
    accent: "#15803d",
    softAccent: "rgba(34, 197, 94, 0.12)",
  },
  factory: {
    name: "MEVI FACTORY",
    description:
      "Phù hợp với quy trình sơ chế, chế biến và kiểm soát chất lượng.",
    icon: Factory,
    accent: "#c2410c",
    softAccent: "rgba(249, 115, 22, 0.12)",
  },
  shop: {
    name: "MEVI SHOP",
    description:
      "Phù hợp với nhu cầu bán hàng, chăm sóc khách hàng và vận hành.",
    icon: ShoppingBag,
    accent: "#7c3aed",
    softAccent: "rgba(168, 85, 247, 0.12)",
  },
};

export const QUESTION_TYPE_LABELS: Record<SurveyQuestionType, string> = {
  essay: "Tự luận",
  single_choice: "Chọn 1",
  multiple_choice: "Chọn nhiều",
  linear_range: "Thang tuyến tính",
  rating: "Thang điểm",
  yes_no: "Có / Không",
  single_choice_matrix: "Ma trận 1 chọn",
  multi_choice_matrix: "Ma trận nhiều chọn",
  linear_matrix: "Ma trận tuyến tính",
};
