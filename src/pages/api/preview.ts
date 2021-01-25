import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  res.setPreviewData({});
  const slug = req.query.slug as string;
  res.redirect(slug + "?preview=true");
};

export default handler;
