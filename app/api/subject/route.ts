import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  console.log("Heelo form endpoint")
  try {
    const subjects = await db.subject.findMany();
    return NextResponse.json(subjects);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch subjects' }, { status: 500 });
  }
}