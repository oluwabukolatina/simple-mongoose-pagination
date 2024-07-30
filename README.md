# Simple Mongoose Pagination - Pagination Helper for Mongoose
A lightweight utility for managing pagination in Mongoose-based applications. This helper provides functions to calculate pagination details such as `limit`, `skip`, `currentPage`, and `totalPages` and `totalItemsCount`.
## Installation
To install the package, use npm or yarn:
  ```shell
  $ npm install simple-mongoose-pagination
  ```
or
 ```shell
  $ yarn add simple-mongoose-pagination
  ```

## Usage
`import { getPaginationQueryDetails } from 'simple-mongoose-pagination';`
### Example Usage

```javascript
import { getPaginationQueryDetails } from 'simple-mongoose-pagination';
// Define your pagination query parameters
const paginationQuery = {
  pageNumber: 4,  // Page number (1-based index, 0 will default to 1)
  itemsPerPage: 2 // Number of items per page (0 will default to 1)
};
// Total number of items in your dataset
const totalItemsCount = 100;
// Get pagination details
const paginationDetails = getPaginationQueryDetails(paginationQuery, totalItemsCount);
console.log(paginationDetails);
 ```
## Functions
```javascript
getPaginationQueryDetails(paginationQuery: PaginationQueryInterface, totalItemsCount: number)
```
Calculates pagination details based on the provided query parameters and total items count.

#### Parameters
- `paginationQuery` (object): Contains pageNumber and itemsPerPage.
- `totalItemsCount` (number): Total number of items available.
#### Returns:
- `currentPage` (number): The current page number.
- `limit` (number): The number of items per page.
- `skip` (number): The number of items to skip for the current page.
- `totalPages` (number): The total number of pages.
```javascript
{
  currentPage: 1,
  limit: 1,
  skip: 0,
  totalPages: 1
}
```

## API Details
- `currentPage`: The current page number (1-based index). Defaults to `1` if `pageNumber` is less than or equal to `0`.
- `limit`: The number of items per page. Defaults to `1` if `itemsPerPage` is less than or equal to `0`. 
- `skip`: The number of items to skip. 
- `totalPages`: The total number of pages. Calculated based on the total number of items and items per page. Defaults to `1` if `itemsPerPage` is less than or equal to `0`.

## Technologies Used
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - The core language used for implementing the pagination logic.
- [TypeScript](https://www.typescriptlang.org/) Type annotations are used to ensure type safety and enhance the development experience by providing clear definitions for the parameters and return types.
- [Jest](https://jestjs.io/) Jest is a JavaScript testing framework maintained by Facebook, Inc. designed and built by Christoph Nakazawa with a focus on simplicity and support for large web applications.

## Tests
Run the command below
  ```shell
  $ npm run watch
  ```
or
```shell
  $ npm run test
  ```
## Author
- [Tina](https://github.com/oluwabukolatina)
