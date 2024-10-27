// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ message: 'Hello, World!' });
  response.headers.set('X-Secret', 'my-secret-header');
  return response;
}
