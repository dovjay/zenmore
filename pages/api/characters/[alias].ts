import type { NextApiRequest, NextApiResponse } from "next"

import prisma from "../_base"

async function getCharacter(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { alias } = req.query

  if (req.method === 'GET') {
    const character: object | null = await prisma.character
      .findUnique({ 
        where: { alias: alias?.toString() },
        include: { 
          faction: true, 
          baseStat: true, 
          skills: true
        }
      })
    res.status(200).json({ character })
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  getCharacter(req, res)
}