import { NextApiRequest } from 'next';

export enum HttpMethods {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	PATCH = 'PATCH',
	DELETE = 'DELETE',
}

export default class HttpMethodUtils {
	/**
	 * Whether a call should continue executing based on the method that is allowed.
	 *
	 * @param method The method to allow
	 * @param req
	 * @static
	 * @returns boolean Whether you should continue
	 */
	public static allowMethod = (method: HttpMethods, req: NextApiRequest): boolean =>
		req.method === method; // TODO: Refactor as middleware
}
