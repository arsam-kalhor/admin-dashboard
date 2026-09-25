import LoginForm from "@/components/LoginForm";

type LoginPageProps = {
  searchParams: Promise<{
    callbackUrl?: string | string[];
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { callbackUrl } = await searchParams;
  const safeCallbackUrl =
    typeof callbackUrl === "string" ? callbackUrl : "";

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <LoginForm callbackUrl={safeCallbackUrl} />
    </main>
  );
}
