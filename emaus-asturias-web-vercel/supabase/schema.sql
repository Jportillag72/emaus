create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.retreats (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  community text not null check (community in ('emaus_hombres', 'emaus_mujeres', 'effeta', 'bartimeo')),
  start_date date not null,
  end_date date not null,
  location text not null,
  image_url text,
  short_description text not null,
  full_description text not null,
  status text not null default 'proximamente' check (status in ('proximamente', 'inscripciones_abiertas', 'completo', 'finalizado')),
  is_visible boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null,
  featured_image_url text,
  excerpt text not null,
  content text not null,
  published_at timestamptz not null default now(),
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  community_interest text not null,
  message text not null,
  privacy_accepted boolean not null default false,
  status text not null default 'nueva' check (status in ('nueva', 'en_revision', 'contestada', 'archivada')),
  created_at timestamptz not null default now()
);

create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  content text not null,
  seo_title text,
  seo_description text,
  updated_at timestamptz not null default now()
);

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  setting_key text not null unique,
  setting_value text not null default '',
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_retreats_updated_at on public.retreats;
create trigger set_retreats_updated_at
before update on public.retreats
for each row execute function public.set_updated_at();

drop trigger if exists set_news_updated_at on public.news;
create trigger set_news_updated_at
before update on public.news
for each row execute function public.set_updated_at();

drop trigger if exists set_pages_updated_at on public.pages;
create trigger set_pages_updated_at
before update on public.pages
for each row execute function public.set_updated_at();

drop trigger if exists set_site_settings_updated_at on public.site_settings;
create trigger set_site_settings_updated_at
before update on public.site_settings
for each row execute function public.set_updated_at();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where admin_users.user_id = auth.uid()
  );
$$;

alter table public.admin_users enable row level security;
alter table public.retreats enable row level security;
alter table public.news enable row level security;
alter table public.contact_requests enable row level security;
alter table public.pages enable row level security;
alter table public.site_settings enable row level security;

drop policy if exists "Admins can read admin users" on public.admin_users;
create policy "Admins can read admin users"
on public.admin_users
for select
using (public.is_admin());

drop policy if exists "Public can read visible retreats" on public.retreats;
create policy "Public can read visible retreats"
on public.retreats
for select
using (is_visible is true);

drop policy if exists "Admins can manage retreats" on public.retreats;
create policy "Admins can manage retreats"
on public.retreats
for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Public can read published news" on public.news;
create policy "Public can read published news"
on public.news
for select
using (is_published is true);

drop policy if exists "Admins can manage news" on public.news;
create policy "Admins can manage news"
on public.news
for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Public can create contact requests" on public.contact_requests;
create policy "Public can create contact requests"
on public.contact_requests
for insert
with check (privacy_accepted is true);

drop policy if exists "Admins can manage contact requests" on public.contact_requests;
create policy "Admins can manage contact requests"
on public.contact_requests
for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Public can read editable pages" on public.pages;
create policy "Public can read editable pages"
on public.pages
for select
using (true);

drop policy if exists "Admins can manage pages" on public.pages;
create policy "Admins can manage pages"
on public.pages
for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Public can read safe settings" on public.site_settings;
create policy "Public can read safe settings"
on public.site_settings
for select
using (setting_key <> 'notification_emails');

drop policy if exists "Admins can manage site settings" on public.site_settings;
create policy "Admins can manage site settings"
on public.site_settings
for all
using (public.is_admin())
with check (public.is_admin());

insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Public can read media" on storage.objects;
create policy "Public can read media"
on storage.objects
for select
using (bucket_id = 'media');

drop policy if exists "Admins can upload media" on storage.objects;
create policy "Admins can upload media"
on storage.objects
for insert
with check (bucket_id = 'media' and public.is_admin());

drop policy if exists "Admins can update media" on storage.objects;
create policy "Admins can update media"
on storage.objects
for update
using (bucket_id = 'media' and public.is_admin())
with check (bucket_id = 'media' and public.is_admin());

drop policy if exists "Admins can delete media" on storage.objects;
create policy "Admins can delete media"
on storage.objects
for delete
using (bucket_id = 'media' and public.is_admin());

-- Despues de crear un usuario en Supabase Auth, anade su UUID:
-- insert into public.admin_users (user_id) values ('00000000-0000-0000-0000-000000000000');
