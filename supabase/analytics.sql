-- Create the analytics_events table
create table if not exists public.analytics_events (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  event_type text not null, -- 'puzzle_completed' | 'puzzle_printed'
  metadata jsonb default '{}'::jsonb,
  country text,
  region text,
  city text
);

-- Enable Row Level Security (RLS)
alter table public.analytics_events enable row level security;

-- Create a policy to allow anyone (anon) to insert events
-- Since these are public analytics, we allow anonymous inserts
create policy "Enable insert for everyone" 
on public.analytics_events 
for insert 
to anon
with check (true);

-- Optional: Create policy for authenticated users if needed later
create policy "Enable insert for authenticated users" 
on public.analytics_events 
for insert 
to authenticated
with check (true);
