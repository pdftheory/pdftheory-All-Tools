-- Create api_keys table
create table public.api_keys (
    id uuid not null default gen_random_uuid (),
    user_id uuid not null references auth.users (id) on delete cascade,
    key_hash text not null,
    name text not null,
    status text not null default 'active'::text check (status in ('active', 'revoked')),
    created_at timestamp with time zone not null default now(),
    last_used_at timestamp with time zone null,
    constraint api_keys_pkey primary key (id),
    constraint api_keys_key_hash_key unique (key_hash)
);
-- Enable RLS
alter table public.api_keys enable row level security;
-- Policies
create policy "Users can view their own API keys" on public.api_keys for
select using (auth.uid() = user_id);
create policy "Users can create their own API keys" on public.api_keys for
insert with check (auth.uid() = user_id);
create policy "Users can update their own API keys" on public.api_keys for
update using (auth.uid() = user_id);
create policy "Users can delete their own API keys" on public.api_keys for delete using (auth.uid() = user_id);
-- Create index for faster lookups
create index api_keys_user_id_idx on public.api_keys (user_id);
create index api_keys_key_hash_idx on public.api_keys (key_hash);