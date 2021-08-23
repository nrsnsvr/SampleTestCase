export const trimLeadingSlash = (uri: string) => uri.charAt(0) === '/' ? uri.substr(1, uri.length - 1) : uri;
export const getUri = (uri: string) =>  trimLeadingSlash(uri);
export const getAbsoluteUrl = (uri: string) => `${process.env.baseUrl}/${getUri(uri)}`;
