import Link from "next/link";
import { Code2 } from "lucide-react";
import AuthForm from "@/components/auth/AuthForm";

export const metadata = { title: "Sign Up — QuestCode" };

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center px-4">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-glow/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 bg-brand-glow rounded-xl flex items-center justify-center shadow-glow-purple">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">QuestCode</span>
        </Link>

        <div className="glass-card p-8">
          <h1 className="text-2xl font-bold text-white mb-1">Create your account</h1>
          <p className="text-slate-400 text-sm mb-8">
            First challenge is on us. No credit card required.
          </p>

          <AuthForm mode="signup" />

          <p className="text-center text-slate-500 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-brand-accent hover:text-purple-300 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
