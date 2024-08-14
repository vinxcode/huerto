import { createClient } from '@supabase/supabase-js';

const supabaseUrl: any = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey: any = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


export async function POST(request: any) {
    const { descripcion_pendiente, fecha_todo, siembra } = await request.json();

    try {
        const { data, error } = await supabase
            .from('todos_siembra')
            .insert([{ descripcion_pendiente, fecha_todo, siembra }]);

        if (error) {
            throw error;
        }

        return new Response(JSON.stringify({ data }), { status: 200 });
    } catch (e: any) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
}

export async function DELETE(request: any) {
    const { id_todo_siembra } = await request.json();

    try {
        const {data, error} = await supabase
            .from('todos_siembra')
            .delete()
            .eq('id_todo_siembra', id_todo_siembra)

        if (error) {
            throw error;
        }

        return new Response(JSON.stringify({ data }), { status: 200 });
    } catch (e: any) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
}

export async function PUT(request: any) {
    const { id_todo_siembra, is_completed } = await request.json();

    try {
        const {data, error} = await supabase
            .from('todos_siembra')
            .update({ is_completed: is_completed })
            .eq('id_todo_siembra', id_todo_siembra)

        if (error) {
            throw error;
        }

        return new Response(JSON.stringify({ data }), { status: 200 });
    } catch (e: any) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
}