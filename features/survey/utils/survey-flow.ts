import {
  BRANCH_QUESTION_CODE,
  BRANCH_QUESTION_CONTENT,
} from "@/features/survey/constants/survey.constants";
import {
  type MatrixSurveyAnswerValue,
  type SurveyAnswerValue,
  type SurveyLookupType,
  type SurveyQuestion,
  type SurveyRequestType,
  inferSurveyLookupType,
} from "@/features/survey/api";

export function isBranchQuestion(question?: SurveyQuestion | null) {
  if (!question) return false;

  return (
    question.code === BRANCH_QUESTION_CODE ||
    question.content
      .toLocaleLowerCase("vi")
      .includes(BRANCH_QUESTION_CONTENT.toLocaleLowerCase("vi"))
  );
}

export function getBranchSurveyType(
  question: SurveyQuestion | undefined,
  value: SurveyAnswerValue,
): SurveyRequestType | null {
  if (!question || !isBranchQuestion(question) || typeof value !== "number") {
    return null;
  }

  const selectedOption = question.options?.find(
    (option) => option.id === value,
  );
  const selectedLabel = selectedOption?.label.toLocaleUpperCase("vi") ?? "";

  if (selectedLabel.includes("MEVI FARM")) return "farm";
  if (selectedLabel.includes("MEVI FACTORY")) return "factory";
  if (selectedLabel.includes("MEVI SHOP")) return "shop";

  return null;
}

export function getStoredLookupType(value: string): SurveyLookupType {
  if (typeof window === "undefined") return inferSurveyLookupType(value);

  const storedType = window.sessionStorage.getItem("mevi_user_lookup_type");
  if (
    storedType === "phone" ||
    storedType === "email" ||
    storedType === "code" ||
    storedType === "userId"
  ) {
    return storedType;
  }

  return inferSurveyLookupType(value);
}

export function getInitialSurveyType(value: string | null): SurveyRequestType {
  const surveyType = value?.trim();

  if (
    surveyType === "general" ||
    surveyType === "farm" ||
    surveyType === "factory" ||
    surveyType === "shop"
  ) {
    return surveyType;
  }

  return "general";
}

export function isMatrixAnswerValue(
  value: SurveyAnswerValue,
): value is MatrixSurveyAnswerValue {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

export function getMatrixParts(question: SurveyQuestion) {
  const options = question.options ?? [];

  return {
    columns: options.filter((option) => !option.isRow),
    rows: options.filter((option) => option.isRow),
  };
}
