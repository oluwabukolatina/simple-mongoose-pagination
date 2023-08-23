
const Helper = {
  calculateTotalPages(limit: number,totalItemCount: number, ){
  return Math.ceil(totalItemCount / limit);
  },
  calculateLimit(itemsPerPage: number, ){
    return itemsPerPage
  },
  calculateSkip(pageOptions: {page: number; limit: number}){
    return pageOptions.page * pageOptions.limit
  },
  getCurrentPage(pageNumber: number){
    return  pageNumber ? +pageNumber : 1;
  },
  getPageOptions(itemsPerPage: number, pageNumber: number){
    const pageValue = this.getPageValue(pageNumber);
    return {
      limit:itemsPerPage,
      page: pageValue || 0,
    };
  },
  getPageValue(pageNumber: number){
   return pageNumber === 0 ? pageNumber : pageNumber - 1
  },
  getSkipAndLimit(
      itemsPerPage: number,
      pageNumber: number,
  ) {
    const pageOptions = this.getPageOptions(itemsPerPage, pageNumber)
    const skip = this.calculateSkip(pageOptions);
    const { limit } = pageOptions;
    return { limit, skip };
  },
};
export default Helper;
