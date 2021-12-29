export enum EStatusCode {
	// All `1xx` status codes.
	Continue = 100,
	SwitchingProtocols = 101,
	Processing = 102,
	EarlyHints = 103,

	// All `2xx` status codes.
	OK = 200,
	Created = 201,
	Accepted = 202,
	NonAuthoritativeInformation = 203,
	NoContent = 204,
	ResetContent = 205,
	PartialContent = 206,
	MultiStatus = 207,
	AlreadyReported = 208,
	IMUsed = 226,

	// All `3xx` status codes.
	MultipleChoices = 300,
	MovedPermanently = 301,
	Found = 302,
	SeeOther = 303,
	NotModified = 304,
	UseProxy = 305,
	SwitchProxy = 306,
	TemporaryRedirect = 307,
	PermanentRedirect = 308,

	// All `4xx` error codes.
	BadRequest = 400,
	Unauthorized = 401,
	PaymentRequired = 402,
	Forbidden = 403,
	NotFound = 404,
	MethodNotAllowed = 405,
	NotAcceptable = 406,
	ProxyAuthenticationRequired = 407,
	RequestTimeout = 408,
	Conflict = 409,
	Gone = 410,
	LengthRequired = 411,
	PreconditionFailed = 412,
	PayloadTooLarge = 413,
	URITooLong = 414,
	UnsupportedMediaType = 415,
	RangeNotSatisfiable = 416,
	ExpectationFailed = 417,
	ImATeapot = 418,
	MisdirectedRequest = 421,
	UnprocessableEntity = 422,
	Locked = 423,
	FailedDependency = 424,
	UpgradeRequired = 426,
	PreconditionRequired = 428,
	TooManyRequests = 429,
	RequestHeaderFieldsTooLarge = 431,
	UnavailableForLegalReasons = 451,

	// All `5xx` error codes.
	InternalServerError = 500,
	NotImplemented = 501,
	BadGateway = 502,
	ServiceUnavailable = 503,
	GatewayTimeout = 504,
	HTTPVersionNotSupported = 505,
	VariantAlsoNegotiates = 506,
	InsufficientStorage = 507,
	LoopDetected = 508,
	NotExtended = 510,
	NetworkAuthenticationRequired = 511,
}

export default class StatusCodeUtils {
	/**
	 * Check if status code is informational response
	 *
	 * @param code
	 */
	public static isInformational = (code: EStatusCode): boolean => {
		const informationalCodes: EStatusCode[] = [
			EStatusCode.Continue,
			EStatusCode.SwitchingProtocols,
			EStatusCode.Processing,
			EStatusCode.EarlyHints,
		];

		return informationalCodes.includes(code);
	};

	/**
	 * Check if status code is informational response
	 *
	 * @param code
	 */
	public static isSuccess = (code: EStatusCode): boolean => {
		const successCodes: EStatusCode[] = [
			EStatusCode.OK,
			EStatusCode.Created,
			EStatusCode.Accepted,
			EStatusCode.NonAuthoritativeInformation,
			EStatusCode.NoContent,
			EStatusCode.ResetContent,
			EStatusCode.PartialContent,
			EStatusCode.MultiStatus,
			EStatusCode.AlreadyReported,
			EStatusCode.IMUsed,
		];

		return successCodes.includes(code);
	};

	/**
	 * Check if status code is informational response
	 *
	 * @param code
	 */
	public static isRedirection = (code: EStatusCode): boolean => {
		const redirectionCodes: EStatusCode[] = [
			EStatusCode.MultipleChoices,
			EStatusCode.MovedPermanently,
			EStatusCode.Found,
			EStatusCode.SeeOther,
			EStatusCode.NotModified,
			EStatusCode.UseProxy,
			EStatusCode.SwitchProxy,
			EStatusCode.TemporaryRedirect,
			EStatusCode.PermanentRedirect,
		];

		return redirectionCodes.includes(code);
	};

	/**
	 * Check if status code is informational response
	 *
	 * @param code
	 */
	public static isClientError = (code: EStatusCode): boolean => {
		const clientErrorCodes: EStatusCode[] = [
			EStatusCode.BadRequest,
			EStatusCode.Unauthorized,
			EStatusCode.PaymentRequired,
			EStatusCode.Forbidden,
			EStatusCode.NotFound,
			EStatusCode.MethodNotAllowed,
			EStatusCode.NotAcceptable,
			EStatusCode.ProxyAuthenticationRequired,
			EStatusCode.RequestTimeout,
			EStatusCode.Conflict,
			EStatusCode.Gone,
			EStatusCode.LengthRequired,
			EStatusCode.PreconditionFailed,
			EStatusCode.PayloadTooLarge,
			EStatusCode.URITooLong,
			EStatusCode.UnsupportedMediaType,
			EStatusCode.RangeNotSatisfiable,
			EStatusCode.ExpectationFailed,
			EStatusCode.ImATeapot,
			EStatusCode.MisdirectedRequest,
			EStatusCode.UnprocessableEntity,
			EStatusCode.Locked,
			EStatusCode.FailedDependency,
			EStatusCode.UpgradeRequired,
			EStatusCode.PreconditionRequired,
			EStatusCode.TooManyRequests,
			EStatusCode.RequestHeaderFieldsTooLarge,
			EStatusCode.UnavailableForLegalReasons,
		];

		return clientErrorCodes.includes(code);
	};

	/**
	 * Check if status code is informational response
	 *
	 * @param code
	 */
	public static isServerError = (code: EStatusCode): boolean => {
		const serverErrorCodes: EStatusCode[] = [
			EStatusCode.InternalServerError,
			EStatusCode.NotImplemented,
			EStatusCode.BadGateway,
			EStatusCode.ServiceUnavailable,
			EStatusCode.GatewayTimeout,
			EStatusCode.HTTPVersionNotSupported,
			EStatusCode.VariantAlsoNegotiates,
			EStatusCode.InsufficientStorage,
			EStatusCode.LoopDetected,
			EStatusCode.NotExtended,
			EStatusCode.NetworkAuthenticationRequired,
		];

		return serverErrorCodes.includes(code);
	};
}
