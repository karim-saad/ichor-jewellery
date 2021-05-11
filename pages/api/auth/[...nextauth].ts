import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    })
  ]
};

const authHandler: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => NextAuth(req, res, options);
export default authHandler;
