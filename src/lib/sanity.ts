import {
  ClientConfig,
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from "next-sanity";
import useSWR from "swr";
import { isDevelopment } from "../utils/environment";

const config: ClientConfig = {
  dataset: "production",
  projectId: "c9hptfq7",
  useCdn: process.env.NODE_ENV === "production",
};

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
});

const sanityClient = createClient(config);

const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const getClient = (usePreview: boolean) => (usePreview ? previewClient : sanityClient);

export const useSWRSanity = <Data>(query: string) =>
  useSWR<Data>(query, (query: string) => getClient(isDevelopment()).fetch(query));
