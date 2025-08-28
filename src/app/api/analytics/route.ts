import metrics from "src/lib/metrics";

export async function POST(request: Request) {
  const body = await request.json();

  if (body.type === "showStilling") {
    metrics.showStillingCounter.inc({ title: body.data.title, page: body.data.page ?? "/" });
  }
  if (body.type === "clickStilling") {
    metrics.clickStillingCounter.inc({ title: body.data.title, page: body.data.page ?? "/" });
  }
  return new Response("{}", { status: 200 });
}
