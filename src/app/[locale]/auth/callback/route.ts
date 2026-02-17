import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    // Get the locale from the URL path
    const pathParts = new URL(request.url).pathname.split('/')
    const locale = pathParts[1] || 'en'
    const next = searchParams.get('next') ?? `/${locale}/dashboard`

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            return NextResponse.redirect(`${origin}${next}`)
        }
    }

    // Return the user to an error page with some instructions
    return NextResponse.redirect(`${origin}/${locale}/login?error=auth_callback_error`)
}
