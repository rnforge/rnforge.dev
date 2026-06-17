import { getInAppUpdatesLLMFull } from '@/lib/in-app-updates-llm';

export const revalidate = false;

export async function GET() {
  return new Response(await getInAppUpdatesLLMFull(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
