const getStillinger = require("../../lib/get-stillinger");

export default async (request, response) => {
  const stillinger = await getStillinger();
  response.statusCode = 200;
  response.json(stillinger);
};
