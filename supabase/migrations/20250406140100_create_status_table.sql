-- up
create table public.stalls_status (
  id            uuid primary key default gen_random_uuid(),
  wait_minutes  int     not null check (wait_minutes between 0 and 300),
  is_sold_out   boolean not null default false,
  message       text,
  created_at    timestamptz default now()
);

alter table public.stalls_status enable row level security;

-- select
create policy "public read"
  on public.stalls_status
  for select
  using ( true );

-- insert
create policy "public insert"
  on public.stalls_status
  for insert
  with check ( true );

-- update
create policy "public update"
  on public.stalls_status
  for update
  using     ( true )
  with check ( true );
