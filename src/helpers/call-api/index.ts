import { API_ROOT, HttpMethods } from 'common';
import { IQuery, TRequestArgs, THeader, TBody, IRequestInit } from './types';

const getQuery = (query: IQuery) =>
  Object.keys(query).reduce(
    (string, key, index) =>
      `${string}${index === 0 ? '?' : '&'}${key}=${query[key]}`,
    '',
  );

const getUrl = ({ endpoint, query }: TRequestArgs): RequestInfo =>
  API_ROOT + endpoint + (query ? getQuery(query) : '');

const getArgs = (args: TRequestArgs): RequestInit => {
  const headers: THeader = {};
  let body: TBody | null = null;
  const method = args.method || HttpMethods.GET;

  headers['X-RapidAPI-Key'] = process.env.REACT_APP_API_KEY as string;

  if (method !== HttpMethods.GET && args?.body) {
    if (args.body instanceof FormData) {
      body = args.body;
    } else {
      body = JSON.stringify(args.body);
      headers['Content-Type'] = 'application/json';
    }
  }

  headers.Accept = 'application/json';

  return {
    method,
    headers,
    ...(body ? { body } : {}),
  } as IRequestInit;
};

const callApi = (args: TRequestArgs): Promise<Response> =>
  fetch(getUrl(args), getArgs(args));

export default callApi;
