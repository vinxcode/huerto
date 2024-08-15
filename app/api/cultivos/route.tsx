import { createClient } from '@supabase/supabase-js';

const supabaseUrl: any = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey: any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


export async function POST(request: any) {
    const { nombre_cultivo } = await request.json();

    try {
        const { data, error } = await supabase
            .from('cultivos')
            .insert([{ nombre_cultivo }]);

        if (error) {
            throw error;
        }

        return new Response(JSON.stringify({ data }), { status: 200 });
    } catch (e: any) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
}