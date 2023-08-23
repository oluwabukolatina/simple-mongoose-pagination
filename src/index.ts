import Pagination, {PaginationQueryInterface} from "./pagination";

export function getPaginationQueryDetails (paginationQuery:PaginationQueryInterface, defaultLimit: number, totalItemsCount: number){
  return Pagination.getPaginationQueryDetails(paginationQuery ,defaultLimit, totalItemsCount)
}
