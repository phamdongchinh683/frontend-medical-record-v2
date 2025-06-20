export interface IRecord {
  tokenIds: readonly bigint[] | undefined;
  isLoading: boolean;
  error: Error | null;
}
