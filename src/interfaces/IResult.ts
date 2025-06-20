export interface IResult<T> {
  data: T;
  isLoading: boolean;
  error: Error | null;
}
