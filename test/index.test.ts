import {getPaginationQueryDetails} from "../lib";
import Helper from "../src/helper";
const totalItemsCount = 400
const pageNumber = 4
const itemsPerPage = 80
test('getPaginationQueryDetails', () => {
  const result = getPaginationQueryDetails({pageNumber, itemsPerPage},totalItemsCount )
  console.log(result, 'aaa')
  expect(result).toHaveProperty('currentPage', pageNumber)
  expect(result).toHaveProperty('limit',Helper.getLimit(itemsPerPage))
  expect(result).toHaveProperty('totalItemsCount', totalItemsCount )
  expect(result).toHaveProperty('totalPages', Helper.getTotalPages(itemsPerPage, totalItemsCount) )

})
