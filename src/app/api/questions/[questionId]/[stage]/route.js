import { NextResponse } from "next/server";
import { evaluateAnswer } from "@/utils/dummydatas";

export async function POST(request, context) {
  try {
    const params = await context.params;
    const { questionId, stage } = params;
    const body = await request.json();

    if (!body.answer) {
      throw new Error("Answer option is required");
    }

    if (process.env.NEXT_PRIVATE_BACKEND_BASE_URL) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PRIVATE_BACKEND_BASE_URL}/question-web/${questionId}/${stage}/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
            body: JSON.stringify({ answer: body.answer }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          return NextResponse.json(data);
        }
      } catch (e) {
        // Fall back to local mock evaluation
      }
    }

    const result = evaluateAnswer(questionId, Number(stage), Number(body.answer));
    if (result) {
      return NextResponse.json(result);
    }

    return NextResponse.json(
      { error: "Question or stage not found" },
      { status: 404 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to submit answer" },
      { status: 500 }
    );
  }
}

