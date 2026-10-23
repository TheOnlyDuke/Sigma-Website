import { redirect } from "next/navigation";

export default function QuestionsLandingPage() {
  redirect("/dashboard#topics");
}
