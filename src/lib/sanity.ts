import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from "next-sanity";

const config = {
  dataset: "production",
  projectId: "c9hptfq7",
  useCdn: process.env.NODE_ENV === "production",
};

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

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

export const getClient = (usePreview) => (usePreview ? previewClient : sanityClient);
