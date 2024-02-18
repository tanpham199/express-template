export interface ResponseJson<T = null> {
  message: string;
  data: T;
}

export interface ModelDate {
  createdTimestamp: number;
  updatedTimestamp: number;
}
