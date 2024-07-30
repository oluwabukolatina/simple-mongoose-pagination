import {PaginationQueryInterface} from "./interface";
import Helper from "./helper";
export function getPaginationQueryDetails(
  paginationQuery: PaginationQueryInterface,
  totalItemsCount: number
) {
  const { itemsPerPage, pageNumber } = paginationQuery;
  const pageValue =Helper.getPageValue(pageNumber)
  const currentPage = pageNumber > 0 ? pageNumber : 1
  return { currentPage, limit: Helper.getLimit(itemsPerPage),  totalItemsCount, skip: Helper.getSkip(itemsPerPage,pageValue ),
    totalPages: Helper.getTotalPages(itemsPerPage, totalItemsCount)
  }
      ;
}
