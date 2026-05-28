"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronLeft, User, CreditCard, Shield, Check,
  AlertTriangle, Loader2, Eye, EyeOff, ExternalLink, Code2,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { PLANS } from "@/lib/plans";
import type { UserSubscription } from "@/types";

interface Props {
  user: { id: string; email: string; displayName: string };
  subscription: UserSubscription | null;
  completedChallenges: number;
}

// ── Small shared primitives ───────────────────────────────────────────────────

function SectionCard({ title, icon: Icon, children }: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-brand-border">
        <Icon className="w-5 h-5 text-brand-glow" />
        <h2 className="text-white font-semibold text-base">{title}</h2>
      </div>
      <div className="px-6 py-5 space-y-5">{children}</div>
    </div>
  );
}

function FieldRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

function SaveButton({ loading, saved, onClick, disabled }: {
  loading: boolean; saved: boolean; onClick: () => void; disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className="flex items-center gap-2 bg-brand-glow hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : saved ? (
        <Check className="w-4 h-4" />
      ) : null}
      {loading ? "Saving…" : saved ? "Saved!" : "Save changes"}
    </button>
  );
}

// ── Profile Section ───────────────────────────────────────────────────────────

function ProfileSection({ user }: { user: Props["user"] }) {
  const supabase = createClient();
  const [displayName, setDisplayName] = useState(user.displayName);
  const [nameLoading, setNameLoading] = useState(false);
  const [nameSaved, setNameSaved] = useState(false);
  const [nameError, setNameError] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailMsg, setEmailMsg] = useState("");
  const [emailError, setEmailError] = useState("");

  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [pwLoading, setPwLoading] = useState(false);
  const [pwSaved, setPwSaved] = useState(false);
  const [pwError, setPwError] = useState("");

  const saveName = async () => {
    if (!displayName.trim()) return;
    setNameLoading(true);
    setNameError("");
    const { error } = await supabase.auth.updateUser({
      data: { full_name: displayName.trim() },
    });
    setNameLoading(false);
    if (error) {
      setNameError(error.message);
    } else {
      setNameSaved(true);
      setTimeout(() => setNameSaved(false), 3000);
    }
  };

  const saveEmail = async () => {
    if (!newEmail.trim() || newEmail === user.email) return;
    setEmailLoading(true);
    setEmailError("");
    setEmailMsg("");
    const { error } = await supabase.auth.updateUser({ email: newEmail.trim() });
    setEmailLoading(false);
    if (error) {
      setEmailError(error.message);
    } else {
      setEmailMsg("Confirmation sent — check both your old and new email to confirm the change.");
      setNewEmail("");
    }
  };

  const savePassword = async () => {
    if (!newPw || newPw !== confirmPw) {
      setPwError("Passwords don't match.");
      return;
    }
    if (newPw.length < 8) {
      setPwError("Password must be at least 8 characters.");
      return;
    }
    setPwLoading(true);
    setPwError("");
    const { error } = await supabase.auth.updateUser({ password: newPw });
    setPwLoading(false);
    if (error) {
      setPwError(error.message);
    } else {
      setPwSaved(true);
      setCurrentPw("");
      setNewPw("");
      setConfirmPw("");
      setTimeout(() => setPwSaved(false), 3000);
    }
  };

  return (
    <SectionCard title="Profile" icon={User}>
      {/* Display name */}
      <FieldRow label="Display name">
        <div className="flex gap-3">
          <input
            type="text"
            value={displayName}
            onChange={(e) => { setDisplayName(e.target.value); setNameSaved(false); }}
            className="flex-1 bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-glow/50 transition-colors"
            placeholder="Your name"
          />
          <SaveButton
            loading={nameLoading}
            saved={nameSaved}
            onClick={saveName}
            disabled={!displayName.trim() || displayName.trim() === user.displayName}
          />
        </div>
        {nameError && <p className="text-red-400 text-xs mt-1">{nameError}</p>}
      </FieldRow>

      {/* Email */}
      <FieldRow label="Email address">
        <p className="text-sm text-slate-400 mb-2 font-mono">{user.email}</p>
        <div className="flex gap-3">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => { setNewEmail(e.target.value); setEmailMsg(""); setEmailError(""); }}
            className="flex-1 bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-glow/50 transition-colors"
            placeholder="New email address"
          />
          <button
            onClick={saveEmail}
            disabled={emailLoading || !newEmail.trim() || newEmail === user.email}
            className="flex items-center gap-2 bg-brand-surface hover:bg-brand-card disabled:opacity-50 disabled:cursor-not-allowed border border-brand-border text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
          >
            {emailLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {emailLoading ? "Sending…" : "Change"}
          </button>
        </div>
        {emailMsg && <p className="text-green-400 text-xs mt-1">{emailMsg}</p>}
        {emailError && <p className="text-red-400 text-xs mt-1">{emailError}</p>}
      </FieldRow>

      {/* Password */}
      <FieldRow label="Change password">
        <div className="space-y-2">
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              value={newPw}
              onChange={(e) => { setNewPw(e.target.value); setPwSaved(false); setPwError(""); }}
              className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 pr-10 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-glow/50 transition-colors"
              placeholder="New password (min 8 characters)"
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
            >
              {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <input
            type={showPw ? "text" : "password"}
            value={confirmPw}
            onChange={(e) => { setConfirmPw(e.target.value); setPwError(""); }}
            className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-glow/50 transition-colors"
            placeholder="Confirm new password"
          />
          <SaveButton
            loading={pwLoading}
            saved={pwSaved}
            onClick={savePassword}
            disabled={!newPw || !confirmPw}
          />
          {pwError && <p className="text-red-400 text-xs">{pwError}</p>}
        </div>
      </FieldRow>
    </SectionCard>
  );
}

// ── Subscription Section ──────────────────────────────────────────────────────

function SubscriptionSection({
  subscription,
  completedChallenges,
}: {
  subscription: UserSubscription | null;
  completedChallenges: number;
}) {
  const [portalLoading, setPortalLoading] = useState(false);
  const [portalError, setPortalError] = useState("");

  const openPortal = async () => {
    setPortalLoading(true);
    setPortalError("");
    const res = await fetch("/api/account/portal", { method: "POST" });
    const data = await res.json();
    setPortalLoading(false);
    if (!res.ok || !data.url) {
      setPortalError(data.error ?? "Could not open billing portal");
      return;
    }
    window.location.href = data.url;
  };

  const plan = subscription ? PLANS[subscription.planId] : null;
  const renewalDate = subscription?.currentPeriodEnd
    ? new Date(subscription.currentPeriodEnd).toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric",
      })
    : null;

  return (
    <SectionCard title="Subscription" icon={CreditCard}>
      {/* Stats row */}
      <div className="flex gap-4">
        <div className="flex-1 bg-brand-bg rounded-lg px-4 py-3 text-center border border-brand-border">
          <p className="text-2xl font-bold text-white">{completedChallenges}</p>
          <p className="text-xs text-slate-500 mt-0.5">challenges done</p>
        </div>
        <div className="flex-1 bg-brand-bg rounded-lg px-4 py-3 text-center border border-brand-border">
          <p className="text-sm font-bold text-white truncate">
            {plan ? plan.name : "Free"}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">current plan</p>
        </div>
      </div>

      {/* Plan details */}
      {subscription && plan ? (
        <div className="bg-brand-bg border border-brand-glow/20 rounded-lg p-4">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <p className="text-white font-semibold">{plan.name}</p>
              <p className="text-slate-400 text-sm mt-0.5">{plan.tagline}</p>
            </div>
            <div className="flex flex-col items-end gap-1.5 shrink-0">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                subscription.isLifetime
                  ? "bg-brand-amber/20 text-brand-amber"
                  : "bg-green-900/40 text-green-400"
              }`}>
                {subscription.isLifetime ? "Lifetime" : "Active"}
              </span>
            </div>
          </div>

          {/* Renewal / lifetime note */}
          {subscription.isLifetime ? (
            <p className="text-xs text-slate-500">
              ✓ Lifetime access — no future charges, no expiry.
            </p>
          ) : renewalDate ? (
            <p className="text-xs text-slate-500">
              Renews on {renewalDate}
            </p>
          ) : null}

          {/* What's included */}
          <ul className="mt-3 space-y-1">
            {plan.features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* Manage button — only for monthly plans with a Stripe customer */}
          {!subscription.isLifetime && subscription.stripeCustomerId && (
            <div className="mt-4 pt-4 border-t border-brand-border">
              <button
                onClick={openPortal}
                disabled={portalLoading}
                className="flex items-center gap-2 bg-brand-surface hover:bg-brand-card border border-brand-border text-white text-sm font-medium px-4 py-2 rounded-lg transition-all disabled:opacity-50"
              >
                {portalLoading
                  ? <Loader2 className="w-4 h-4 animate-spin" />
                  : <ExternalLink className="w-4 h-4" />
                }
                {portalLoading ? "Opening…" : "Manage billing & cancel"}
              </button>
              <p className="text-xs text-slate-600 mt-2">
                Opens Stripe — update payment method, download invoices, or cancel.
              </p>
              {portalError && <p className="text-red-400 text-xs mt-1">{portalError}</p>}
            </div>
          )}
        </div>
      ) : (
        /* Free / no subscription */
        <div className="bg-brand-bg border border-brand-border rounded-lg p-4 text-center">
          <p className="text-white font-semibold mb-1">Free plan</p>
          <p className="text-slate-400 text-sm mb-4">
            You have access to the first 3 challenges per theme &amp; language.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-brand-glow hover:bg-purple-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all"
          >
            Upgrade your plan
          </Link>
        </div>
      )}
    </SectionCard>
  );
}

// ── Danger Zone ───────────────────────────────────────────────────────────────

function DangerZone({ userEmail }: { userEmail: string }) {
  const router = useRouter();
  const supabase = createClient();
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const CONFIRM_PHRASE = "delete my account";
  const canDelete = confirmText.toLowerCase().trim() === CONFIRM_PHRASE;

  const handleDelete = async () => {
    if (!canDelete) return;
    setLoading(true);
    setError("");

    const res = await fetch("/api/account/delete", { method: "DELETE" });
    const data = await res.json();

    if (!res.ok) {
      setLoading(false);
      setError(data.error ?? "Something went wrong. Please try again or contact support.");
      return;
    }

    // Sign out locally — auth user is already gone server-side
    await supabase.auth.signOut();
    router.push("/?deleted=true");
    router.refresh();
  };

  return (
    <SectionCard title="Danger zone" icon={Shield}>
      {!showConfirm ? (
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-white font-medium text-sm">Delete account</p>
            <p className="text-slate-400 text-xs mt-1 leading-relaxed max-w-sm">
              Permanently remove your account, all progress, and cancel any active
              subscription. This cannot be undone.
            </p>
          </div>
          <button
            onClick={() => setShowConfirm(true)}
            className="shrink-0 flex items-center gap-1.5 border border-red-500/40 text-red-400 hover:bg-red-950/40 text-sm font-medium px-4 py-2 rounded-lg transition-all"
          >
            <AlertTriangle className="w-4 h-4" />
            Delete account
          </button>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
            <p className="text-red-400 font-semibold text-sm">This is permanent and irreversible.</p>
          </div>
          <p className="text-slate-300 text-sm mb-1">
            All progress for <span className="text-white font-medium">{userEmail}</span> will
            be deleted. Any active monthly subscription will be cancelled immediately.
          </p>
          <p className="text-slate-400 text-sm mb-4">
            Type <span className="text-white font-mono font-medium">delete my account</span> to confirm:
          </p>
          <input
            type="text"
            value={confirmText}
            onChange={(e) => { setConfirmText(e.target.value); setError(""); }}
            className="w-full bg-brand-bg border border-red-500/30 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-red-500/60 transition-colors mb-3"
            placeholder="delete my account"
            autoFocus
          />
          {error && <p className="text-red-400 text-xs mb-3">{error}</p>}
          <div className="flex gap-3">
            <button
              onClick={handleDelete}
              disabled={!canDelete || loading}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? "Deleting…" : "Yes, delete my account"}
            </button>
            <button
              onClick={() => { setShowConfirm(false); setConfirmText(""); setError(""); }}
              className="text-slate-400 hover:text-white text-sm px-4 py-2 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </SectionCard>
  );
}

// ── Page shell ────────────────────────────────────────────────────────────────

export default function AccountClient({ user, subscription, completedChallenges }: Props) {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Top bar */}
      <header className="border-b border-brand-border bg-brand-surface/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-3xl mx-auto flex items-center h-14 px-4 gap-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Dashboard
          </Link>
          <div className="h-5 w-px bg-brand-border" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-glow rounded-md flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-white">Account settings</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <div className="mb-2">
          <h1 className="text-2xl font-bold text-white">Your account</h1>
          <p className="text-slate-400 text-sm mt-1">{user.email}</p>
        </div>

        <ProfileSection user={user} />
        <SubscriptionSection subscription={subscription} completedChallenges={completedChallenges} />
        <DangerZone userEmail={user.email} />
      </main>
    </div>
  );
}
