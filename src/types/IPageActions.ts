export interface IPageActions {
  paginate: (pageNumber: number) => void;
  nextPage: () => void;
  prevPage: () => void;
}
