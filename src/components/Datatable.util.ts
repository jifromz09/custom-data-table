export const DEFAULT_FIRST_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 3;

 
export const firstDataIndex = (currentPage: number): number => {
  return  (currentPage - 1) * DEFAULT_PAGE_SIZE;
}

export const lastDataIndex = (firstIndex: number): number => {
  return  firstIndex + DEFAULT_PAGE_SIZE;
}