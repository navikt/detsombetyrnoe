const dev = process.env.NODE_ENV !== "production";

export const serverUrl = dev ? "http://localhost:3000" : "https://www.detsombetyrnoe.no";
