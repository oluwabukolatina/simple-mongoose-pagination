import Helper from "../src/helper";
import {getPaginationQueryDetails} from "../lib";

const totalItemsCount = 200
const pageNumber = 3
const itemsPerPage = 10
test('getPaginationQueryDetails', () => {
  const result = getPaginationQueryDetails({pageNumber, itemsPerPage},totalItemsCount )
  const pageOptions = Helper.getPageOptions(itemsPerPage, pageNumber)
  expect(result).toHaveProperty('currentPage', pageNumber)
  expect(result).toHaveProperty('limit',pageOptions.limit )
  expect(result).toHaveProperty('skip', Helper.calculateSkip(pageOptions) )
  expect(result).toHaveProperty('totalItemsCount', totalItemsCount )
  expect(result).toHaveProperty('totalPages', Helper.calculateTotalPages(pageOptions.limit, totalItemsCount) )

})
