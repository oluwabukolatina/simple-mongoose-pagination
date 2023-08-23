import Helper from "./helper";
import {PaginationQueryInterface} from "./interface";
export function getPaginationQueryDetails (paginationQuery:PaginationQueryInterface, totalItemsCount: number){
  const { itemsPerPage, pageNumber } = paginationQuery;
  const { limit, skip } = Helper.getSkipAndLimit(
      itemsPerPage,
      pageNumber,
  );
  const currentPage = Helper.getCurrentPage(pageNumber);
  const totalPages = Helper.calculateTotalPages(limit, totalItemsCount);
  return { currentPage, limit, skip, totalItemsCount, totalPages };
}
