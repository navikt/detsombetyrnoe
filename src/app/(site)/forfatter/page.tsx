import { getAllForfattere } from "src/lib/services/sanity/model/forfatter/forfatterQuery";

const Page = async () => {
  const forfattere = await getAllForfattere();

  return <pre>{JSON.stringify(forfattere, undefined, 2)}</pre>;
};

export default Page;
