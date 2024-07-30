const Helper = {
    getTotalPages(itemsPerPage: number, totalItemsCount: number){
      return  itemsPerPage> 0 ?Math.ceil(totalItemsCount / itemsPerPage): 1
    },
    getSkip(itemsPerPage: number,pageValue: number){
     return  (pageValue - 1) * itemsPerPage
    },
     getPageValue(pageNumber: number){
         return pageNumber > 0 ? pageNumber : 1
     },
    getLimit(itemsPerPage: number){
        return itemsPerPage
    },
    getCurrentPage(pageNumber: number){
      return  pageNumber > 0 ? pageNumber : 1
    }
}
export default Helper
