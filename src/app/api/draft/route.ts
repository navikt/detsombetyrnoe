import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

import { client } from "src/lib/services/sanity/client";
import { sanityReadToken } from "src/lib/services/sanity/tokens";

const clientWithToken = client.withConfig({ token: sanityReadToken });

export async function GET(request: Request) {
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(clientWithToken, request.url);

  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

  draftMode().enable();

  redirect(redirectTo);
}
