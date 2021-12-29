import { NextApiRequest, NextApiResponse } from 'next';
import HttpMethodUtils, { HttpMethods } from '@/utils/httpMethod.utils';
import { EStatusCode } from '@/utils/statusCode.utils';

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
	if (!HttpMethodUtils.allowMethod(HttpMethods.GET, req)) {
		return res.status(EStatusCode.MethodNotAllowed).end();
	}

	return res.status(EStatusCode.OK).json({ status: 'OK' });
};

export default handler;
