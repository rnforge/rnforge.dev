import { getInAppUpdatesLLMIndex } from '@/lib/in-app-updates-llm';

export const revalidate = false;

export function GET() {
  return new Response(getInAppUpdatesLLMIndex(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
