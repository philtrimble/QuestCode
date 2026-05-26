-- ============================================================
-- Themeable Learn to Code — Supabase Schema
-- Run this in your Supabase SQL Editor to set up the database
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ─── Profiles ─────────────────────────────────────────────────────────────────
-- Extends Supabase auth.users with display name and avatar
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  display_name text,
  avatar_url text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- ─── Subscriptions ────────────────────────────────────────────────────────────
create table if not exists public.subscriptions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  plan_id text not null,
  stripe_subscription_id text unique,
  stripe_customer_id text not null,
  status text not null default 'active',   -- active | canceled | past_due | trialing
  current_period_end timestamptz,
  is_lifetime boolean default false,
  selected_theme_id text,    -- for unlimited-languages plans
  selected_language_id text, -- for unlimited-themes plans
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.subscriptions enable row level security;

create policy "Users can view own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- Service role can manage subscriptions (via webhook)
create policy "Service can manage subscriptions"
  on public.subscriptions for all
  using (true)
  with check (true);


-- ─── Progress ─────────────────────────────────────────────────────────────────
create table if not exists public.progress (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  challenge_id text not null,
  theme_id text not null,
  language_id text not null,
  completed boolean default false,
  completed_at timestamptz,
  last_code text,
  attempts integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(user_id, challenge_id)
);

alter table public.progress enable row level security;

create policy "Users can view own progress"
  on public.progress for select
  using (auth.uid() = user_id);

create policy "Users can upsert own progress"
  on public.progress for insert
  with check (auth.uid() = user_id);

create policy "Users can update own progress"
  on public.progress for update
  using (auth.uid() = user_id);


-- ─── Indexes ──────────────────────────────────────────────────────────────────
create index if not exists idx_subscriptions_user_id on public.subscriptions(user_id);
create index if not exists idx_subscriptions_stripe_customer on public.subscriptions(stripe_customer_id);
create index if not exists idx_progress_user_id on public.progress(user_id);
create index if not exists idx_progress_theme_language on public.progress(theme_id, language_id);
