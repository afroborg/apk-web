export interface IPaginatedResponse<T> {
  meta: IPaginationMeta;
  data: T[];
}

interface IPaginationMeta {
  totalRecords: number;
  totalPages: number;
  currentPage: number;
}
