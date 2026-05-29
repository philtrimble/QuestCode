"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

    if (!key) return; // silently skip in dev if key not set

    posthog.init(key, {
      api_host: host,
      // Capture pageviews automatically on route changes
      capture_pageview: false, // we use the Next.js router hook below instead
      capture_pageleave: true,
      persistence: "localStorage+cookie",
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
