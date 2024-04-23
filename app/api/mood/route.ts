import { getMood } from '@/app/services/firestore.service';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const date = new Date(searchParams.get('date') || Date.now());
    const mood = await getMood(date);
    return Response.json(mood, { status: mood ? 200 : 404 });
}