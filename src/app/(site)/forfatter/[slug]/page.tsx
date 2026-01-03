import { notFound } from "next/navigation";
import Forfatter from "src/components/Forfatter";
import { getForfatterBySlug } from "src/lib/services/sanity/model/forfatter/forfatterQuery";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const ForfatterPage = async ({ params }: Props) => {
  const forfatter = await getForfatterBySlug((await params).slug);

  if (!forfatter) {
    return notFound();
  }

  return <Forfatter {...forfatter} />;
};

export default ForfatterPage;
