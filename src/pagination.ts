export interface PaginationQueryInterface {
  pageNumber: number;
  itemsPerPage: number;
}
const Pagination = {
  calculateTotalPages(limit: number,totalItemCount: number, ){
  return Math.ceil(totalItemCount / limit);
  },
  calculateLimit(defaultLimit: number,itemsPerPage: number, ){
    return itemsPerPage ? +itemsPerPage : defaultLimit
  },
  calculateSkip(pageOptions: {page: number; limit: number}){
    return pageOptions.page * pageOptions.limit
  },
  getCurrentPage(pageNumber: number){
    return  pageNumber ? +pageNumber : 1;
  },
  getPageOptions(defaultLimit: number, itemsPerPage: number, pageNumber: number){
    const pageValue = this.getPageValue(pageNumber);
    return {
      limit: this.calculateLimit(defaultLimit, itemsPerPage),
      page: pageValue || 0,
    };
  },
  getPageValue(pageNumber: number){
   return pageNumber === 0 ? pageNumber : pageNumber - 1
  },
  getSkipAndLimit(
      defaultLimit: number,
      itemsPerPage: number,
      pageNumber: number,
  ) {
    const pageOptions = this.getPageOptions(defaultLimit, itemsPerPage, pageNumber)
    const skip = this.calculateSkip(pageOptions);
    const { limit } = pageOptions;
    return { limit, skip };
  },
  getPaginationQueryDetails(
      paginationQuery: PaginationQueryInterface,
      defaultLimit: number,
      totalItemsCount: number,
  ) {
    const { itemsPerPage, pageNumber } = paginationQuery;
    const { limit, skip } = this.getSkipAndLimit(
        10,
        itemsPerPage,
        pageNumber,
    );
    const currentPage = this.getCurrentPage(pageNumber);
    const totalPages = this.calculateTotalPages(limit, totalItemsCount);
    return { currentPage, limit, skip, totalItemsCount, totalPages };
  },
};
export default Pagination;
