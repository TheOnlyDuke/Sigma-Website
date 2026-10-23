import { NextResponse } from "next/server";
import { getQuestionsByTopic } from "@/utils/dummydatas";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const topic = searchParams.get("topic");

  try {
    if (process.env.NEXT_PRIVATE_BACKEND_BASE_URL) {
      const response = await fetch(
        `${process.env.NEXT_PRIVATE_BACKEND_BASE_URL}/question-web/`,
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
    }
  } catch (error) {
    // Fall back to local mock data
  }

  const fallbackData = getQuestionsByTopic(topic);
  return NextResponse.json(fallbackData);
}

