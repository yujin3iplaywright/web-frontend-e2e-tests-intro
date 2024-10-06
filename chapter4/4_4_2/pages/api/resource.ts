import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 例として、リクエストを2秒待ってからレスポンスを返す
  setTimeout(() => {
    res.status(200).json({ message: 'Resource fetched successfully' });
  }, 2000); // 2秒待つ
}
