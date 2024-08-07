import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  dataset: "production",
  projectId: "c9hptfq7",
  apiVersion: "2021-09-06",
  useCdn: process.env.NODE_ENV === "production",
});

export const urlFor = (source: any) =>
  createImageUrlBuilder({ projectId: "c9hptfq7", dataset: "production" }).image(source);
