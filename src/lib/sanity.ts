import { ClientConfig, createClient, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
  dataset: "production",
  projectId: "c9hptfq7",
  apiVersion: "2021-09-06",
  useCdn: process.env.NODE_ENV === "production",
};

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const sanityClient = createClient(config);
