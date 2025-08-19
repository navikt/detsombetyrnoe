import { register } from "prom-client";

export async function GET() {
  try {
    const metrics = await register.metrics();
    return new Response(metrics, {
      headers: { "Content-Type": register.contentType },
    });
  } catch (error) {
    console.error("Error collecting metrics:", error);
    return new Response("Error collecting metrics", { status: 500 });
  }
}
