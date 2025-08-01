import { PageMeta } from './page-meta.model';

export interface PaginatedResponse<T> {
  data: T[];
  meta: PageMeta;
}