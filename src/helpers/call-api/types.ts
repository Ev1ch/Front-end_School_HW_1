export type TBody = unknown;

export type THeader = Headers | string[][] | Record<string, string> | undefined;

export type IQuery = Record<string, string | number>;

export interface IRequestArgs {
  endpoint: string;
  method?: string;
  query?: IQuery;
  body?: TBody;
}

export interface IRequestInit {
  method: string;
  headers: THeader;
  body?: FormData | string;
}
