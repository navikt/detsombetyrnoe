import {
  ClientConfig,
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from "next-sanity";

const config: ClientConfig = {
  dataset: "production",
  projectId: "c9hptfq7",
  useCdn: process.env.NODE_ENV === "production",
};

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const sanityClient = createClient(config);
