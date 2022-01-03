import { NextApiHandler } from "next";
import { client } from "../../../api-utils/github/client";
import { query } from "../../../api-utils/github/query";

const apiHandler: NextApiHandler = async (request, response) => {
  try {
    const data = await client.query({ query });
    response.setHeader("Access-Control-Allow-Origin", "https://navikt.github.com");
    response.status(200).json(data.data);
  } catch (error) {
    response.status(500).json("Det skjedde en feil: " + JSON.stringify(error));
  }
};

export default apiHandler;
