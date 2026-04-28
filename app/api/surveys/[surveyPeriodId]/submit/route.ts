import {
  SURVEY_API_BASE,
  SURVEY_API_ORIGIN,
  normalizeObjectKeys,
} from "@/lib/survey";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ surveyPeriodId: string }> },
) {
  const { surveyPeriodId } = await context.params;
  const body = await request.json();

  const response = await fetch(
    `${SURVEY_API_BASE}/survey-periods/${surveyPeriodId}/results/submit`,
    {
      method: "POST",
      headers: {
        origin: SURVEY_API_ORIGIN,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    },
  );

  const payload = await response.json();
  const normalized = normalizeObjectKeys(payload);

  return NextResponse.json(normalized, { status: response.status });
}
