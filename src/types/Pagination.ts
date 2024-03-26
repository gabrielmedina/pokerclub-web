export type PaginationType<T> = {
  content: Array<T>
  pageable: PageableType
  last: boolean,
  totalPages: number,
  totalElements: number,
  first: boolean,
  size: number,
  number: number,
  sort: SortType,
  numberOfElements: number,
  empty: boolean
}

type PageableType = {
  pageNumber: number
  pageSize: number
  sort: SortType
  offset: number,
  paged: boolean,
  unpaged: boolean
}

type SortType = {
  sorted: boolean
  empty: boolean
  unsorted: boolean
}
