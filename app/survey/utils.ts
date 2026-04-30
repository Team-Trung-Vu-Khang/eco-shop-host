import { type SurveyAnswerValue, type SurveyOption } from "@/lib/survey";

export function optionIsSelected(
  value: SurveyAnswerValue,
  option: SurveyOption,
) {
  if (Array.isArray(value)) return value.includes(option.id);
  if (typeof value === "number") return value === option.id;
  if (typeof value === "boolean") return Number(value) === option.id;
  return false;
}
