import { getSiteLLMFull } from '@/lib/site-llm';

export const revalidate = false;

export async function GET() {
  return new Response(await getSiteLLMFull(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
