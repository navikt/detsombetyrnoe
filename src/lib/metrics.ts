import { collectDefaultMetrics, Counter } from "prom-client";

import { nextleton } from "nextleton";

export class AppMetrics {
  constructor() {
    console.log("Initializing metrics client");

    collectDefaultMetrics();
  }

  public pageVisitsCounter = new Counter({
    name: "dsbn_page_visits_total",
    help: "Total number of page visits",
    labelNames: ["path", "kommerFra"],
  });

  public showStillingCounter = new Counter({
    name: "dsbn_show_stilling",
    help: "Number of views for a specific job listing",
    labelNames: ["title", "page"],
  });

  public clickStillingCounter = new Counter({
    name: "dsbn_click_stilling",
    help: "Number of clicks on a specific job listing",
    labelNames: ["title", "page"],
  });
}

export default nextleton("metrics", () => new AppMetrics());
