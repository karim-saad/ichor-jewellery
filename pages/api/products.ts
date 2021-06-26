import { NextApiRequest, NextApiResponse } from 'next';
import { dynamoClient } from '../../lib';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(await dynamoClient.getProducts());
}
