// pages/api/user/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const authHeader = req.headers.authorization;
  const DUMMY_JWT = process.env.DUMMY_JWT;

  if (!authHeader || authHeader !== `Bearer ${DUMMY_JWT}`) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  // ダミーのユーザーデータを返す
  const userData = { name: 'テストユーザー', email: 'test@example.com' };
  res.status(200).json(userData);
}
