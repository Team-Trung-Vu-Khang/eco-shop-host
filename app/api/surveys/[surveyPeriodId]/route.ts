import {
  SURVEY_API_BASE,
  SURVEY_API_ORIGIN,
  normalizeObjectKeys,
} from "@/lib/survey";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ surveyPeriodId: string }> },
) {
  const { surveyPeriodId } = await context.params;
  const email = request.nextUrl.searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { message: "Thiếu email khảo sát." },
      { status: 400 },
    );
  }

  const apiUrl = new URL(
    `${SURVEY_API_BASE}/survey-periods/${surveyPeriodId}/results`,
  );
  apiUrl.searchParams.set("email", email);

  const response = await fetch(apiUrl.toString(), {
    headers: {
      origin: SURVEY_API_ORIGIN,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const payload = await response.json();
  const normalized = normalizeObjectKeys(payload);

  return NextResponse.json(normalized, { status: response.status });
}
