// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { login, findNonFollowers } from "../../_api/ig";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const client = await login(username, password);
    if (!client) return res.status(401).send();

    const nonFollowers = await findNonFollowers(client);

    res.json({ nonFollowers });
  }
  res.status(404).send();
}
