import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get((req, res) => {
  res.status(200).send({ message: "Order created successfully" });
});

export default handler;
