import {
  type SubmitSurveyPayload,
  type SurveyAnswerValue,
  type SurveyLookupType,
  type SurveyQuestion,
  getDefaultAnswer,
  isAnswered,
} from "@/features/survey/api";
import {
  getMatrixParts,
  isMatrixAnswerValue,
} from "./survey-flow";

export function buildSubmitPayload(
  questions: SurveyQuestion[],
  answersByQuestion: Record<number, SurveyAnswerValue>,
): SubmitSurveyPayload["dataSubmit"] {
  return questions
    .map((question): SubmitSurveyPayload["dataSubmit"][number] | null => {
      const value =
        answersByQuestion[question.id] ?? getDefaultAnswer(question);

      if (!isAnswered(value)) return null;

      if (question.type === "essay" && typeof value === "string") {
        const answerIds = (question.options ?? []).map((option) => option.id);
        return {
          questionId: question.id,
          answers: [
            {
              answerIds,
              content: value.trim(),
            },
          ],
        };
      }

      if (question.type === "multiple_choice" && Array.isArray(value)) {
        const answers = value.map((answerId) => {
          const option = question.options?.find((item) => item.id === answerId);

          return {
            answerIds: [answerId],
            content: option?.label ?? "",
          };
        });

        return {
          questionId: question.id,
          answers,
        };
      }

      if (
        (question.type === "single_choice" ||
          question.type === "rating" ||
          question.type === "linear_range") &&
        typeof value === "number"
      ) {
        const option = question.options?.find((item) => item.id === value);
        return {
          questionId: question.id,
          answers: [
            {
              answerIds: [value],
              content: option?.label ?? "",
            },
          ],
        };
      }

      if (question.type === "yes_no" && typeof value === "boolean") {
        const answerId = value ? 1 : 0;
        const option = question.options?.find((item) => item.id === answerId);
        return {
          questionId: question.id,
          answers: [
            {
              answerIds: [answerId],
              content: option?.label ?? "",
            },
          ],
        };
      }

      if (
        (question.type === "single_choice_matrix" ||
          question.type === "multi_choice_matrix" ||
          question.type === "linear_matrix") &&
        isMatrixAnswerValue(value)
      ) {
        const { rows } = getMatrixParts(question);
        const answers = rows
          .map((row) => {
            const rowValue = value[String(row.id)];

            if (Array.isArray(rowValue) && rowValue.length > 0) {
              return {
                answerRowId: row.id,
                answerIds: rowValue,
              };
            }

            if (typeof rowValue === "number") {
              return {
                answerRowId: row.id,
                answerIds: [rowValue],
              };
            }

            return null;
          })
          .filter(
            (
              item,
            ): item is {
              answerRowId: number;
              answerIds: number[];
            } => Boolean(item),
          );

        if (!answers.length) return null;

        return {
          questionId: question.id,
          answers,
        };
      }

      return null;
    })
    .filter((item): item is SubmitSurveyPayload["dataSubmit"][number] =>
      Boolean(item),
    );
}

export function buildLookupSubmitPayload(
  type: SurveyLookupType,
  value: string,
): Pick<SubmitSurveyPayload, "type" | "phone" | "email" | "code" | "userId"> {
  switch (type) {
    case "phone":
      return { type, phone: value };
    case "email":
      return { type, email: value };
    case "code":
      return { type, code: value };
    case "userId":
      return { type, userId: value };
  }
}
