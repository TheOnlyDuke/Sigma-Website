import { NextResponse } from "next/server";
import { getQuestionById } from "@/utils/dummydatas";

export async function GET(request, context) {
  try {
    const params = await context.params;
    const { questionId } = params;

    if (process.env.NEXT_PRIVATE_BACKEND_BASE_URL) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PRIVATE_BACKEND_BASE_URL}/question-web/${questionId}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
            cache: "no-store",
          }
        );

        if (response.ok) {
          const data = await response.json();
          return NextResponse.json(data);
        }
      } catch (e) {
        // Fall back to local mock data
      }
    }

    const question = getQuestionById(questionId);
    if (question) {
      return NextResponse.json(question);
    }

    return NextResponse.json(
      { error: "Question not found" },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch question" },
      { status: 500 }
    );
  }
}

