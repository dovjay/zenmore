import type { NextApiRequest, NextApiResponse } from "next"

import prisma from "../_base"

async function getCharacters(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const characters = await prisma.character.findMany()
    res.status(200).json({ characters })
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  getCharacters(req, res)
}