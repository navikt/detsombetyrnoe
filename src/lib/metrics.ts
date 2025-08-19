import { collectDefaultMetrics, Counter, Histogram } from "prom-client";

import { nextleton } from "nextleton";

export class AppMetrics {
  constructor() {
    console.log("Initializing metrics client");

    collectDefaultMetrics();
  }

  public pageVisitsCounter = new Counter({
    name: "page_visits_total",
    help: "Total number of page visits",
    labelNames: ["path", "kommerFra"],
  });
}

export default nextleton("metrics", () => new AppMetrics());
