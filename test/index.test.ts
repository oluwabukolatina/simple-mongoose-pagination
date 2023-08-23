import {getPaginationQueryDetails} from "../src";
import Pagination from "../src/pagination";

const totalItemsCount = 200
const pageNumber = 3
const itemsPerPage = 10
const defaultLimit =5

test('getPaginationQueryDetails', () => {
  const result = getPaginationQueryDetails({pageNumber, itemsPerPage}, defaultLimit,totalItemsCount )
  const pageOptions = Pagination.getPageOptions(defaultLimit, itemsPerPage, pageNumber)
  expect(result).toHaveProperty('currentPage', pageNumber)
  expect(result).toHaveProperty('limit',pageOptions.limit )
  expect(result).toHaveProperty('skip', Pagination.calculateSkip(pageOptions) )
  expect(result).toHaveProperty('totalItemsCount', totalItemsCount )
  expect(result).toHaveProperty('totalPages', Pagination.calculateTotalPages(pageOptions.limit, totalItemsCount) )

})
