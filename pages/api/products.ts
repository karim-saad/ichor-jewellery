import { NextApiRequest, NextApiResponse } from 'next';
import { dynamoClient } from '../../lib/dynamoClient';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(dynamoClient.getProducts());
}
