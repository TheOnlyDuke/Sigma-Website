import AuthGuard from "@/components/auth/AuthGuard";

export default function QuestionsLayout({ children }) {
  return <AuthGuard>{children}</AuthGuard>;
}
