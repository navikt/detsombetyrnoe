export async function showStillingClient(title: string) {
  await postMetrics({ title }, "showStilling");
}

export async function clickStillingClient(title: string) {
  await postMetrics({ title }, "clickStilling");
}

async function postMetrics(data: Record<string, string>, type: string) {
  fetch("/api/logger/metrics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type, data }),
  }).catch((error) => {
    console.error(`Error recording ${type} metric:`, error);
  });
}
