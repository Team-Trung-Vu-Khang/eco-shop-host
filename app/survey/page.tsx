"use client";

import { Suspense } from "react";
import { SurveyPageContent } from "@/app/survey/_components/survey-page-content";

export default function SurveyPage() {
  return (
    <Suspense fallback={null}>
      <SurveyPageContent />
    </Suspense>
  );
}
