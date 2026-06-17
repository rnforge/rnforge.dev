import { getSiteLLMIndex } from '@/lib/site-llm';

export const revalidate = false;

export function GET() {
  return new Response(getSiteLLMIndex(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
