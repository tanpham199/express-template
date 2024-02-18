export interface ResponseJson<T = null> {
  message: string;
  data: T;
}
