"use client";

import { useState } from "react";
import { Check, Star, Zap } from "lucide-react";
import type { Plan } from "@/types";

interface Props {
  plans: Plan[];
}

type BillingPeriod = "monthly" | "lifetime";

export default function PricingCards({ plans }: Props) {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  const filtered = plans.filter((p) =>
    billing === "monthly" ? p.monthlyPrice !== null : p.lifetimePrice !== null
  );

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <button
          onClick={() => setBilling("monthly")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
            billing === "monthly"
              ? "bg-brand-glow text-white shadow-glow-purple"
              : "text-slate-400 hover:text-white border border-brand-border"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("lifetime")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
            billing === "lifetime"
              ? "bg-brand-glow text-white shadow-glow-purple"
              : "text-slate-400 hover:text-white border border-brand-border"
          }`}
        >
          Lifetime
          <span className="text-xs bg-brand-amber/20 text-amber-400 px-1.5 py-0.5 rounded-full">
            Save 33%
          </span>
        </button>
      </div>

      {/* Cards */}
      <div className={`grid grid-cols-1 gap-6 mx-auto ${
        filtered.length >= 3
          ? "md:grid-cols-3 max-w-5xl"
          : "md:grid-cols-2 max-w-3xl"
      }`}>
        {filtered.map((plan) => (
          <PricingCard key={plan.id} plan={plan} billing={billing} />
        ))}
      </div>
    </div>
  );
}

function PricingCard({ plan, billing }: { plan: Plan; billing: BillingPeriod }) {
  const price = billing === "monthly" ? plan.monthlyPrice : plan.lifetimePrice;

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId: plan.id }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={`
        relative glass-card p-6 flex flex-col transition-all duration-300
        ${plan.highlight
          ? "border-brand-glow/60 shadow-glow-purple ring-1 ring-brand-glow/30 scale-[1.02]"
          : "border-brand-border hover:border-brand-muted"
        }
      `}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 bg-brand-glow text-white text-xs font-bold px-3 py-1 rounded-full shadow-glow-purple">
            <Star className="w-3 h-3 fill-white" />
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
        <p className="text-slate-400 text-sm">{plan.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-end gap-1">
          <span className="text-5xl font-black text-white">${price}</span>
          {billing === "monthly" && (
            <span className="text-slate-400 text-sm mb-2">/month</span>
          )}
          {billing === "lifetime" && (
            <span className="text-slate-400 text-sm mb-2">one time</span>
          )}
        </div>
        {billing === "monthly" && (
          <p className="text-slate-500 text-xs mt-1">Cancel anytime</p>
        )}
        {billing === "lifetime" && (
          <p className="text-brand-neon text-xs mt-1 flex items-center gap-1">
            <Zap className="w-3 h-3" />
            Access forever — no renewals
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-2.5 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check className="w-4 h-4 text-brand-neon flex-shrink-0 mt-0.5" />
            <span className="text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={handleCheckout}
        className={plan.highlight ? "btn-primary w-full text-center" : "btn-secondary w-full text-center"}
      >
        Get started
      </button>
    </div>
  );
}
