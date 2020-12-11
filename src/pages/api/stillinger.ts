const getStillinger = require("../../lib/get-stillinger");

export default async (request: any, response: any) => {
  const stillinger = await getStillinger();
  response.statusCode = 200;
  response.json(stillinger);
};
