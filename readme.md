Extracted from [this repl](https://repl.it/@NguyenDa18/NodePaginationExample), based on tutorial [Create Pagination with Node.js, MongoDB, Express and EJS Step by Step from Scratch](https://evdokimovm.github.io/javascript/nodejs/mongodb/pagination/expressjs/ejs/bootstrap/2017/08/20/create-pagination-with-nodejs-mongodb-express-and-ejs-step-by-step-from-scratch.html).

## Installation

- Clone the repository.
- Install all packages.
- Start the app.
- Visit: http://localhost:3000
- Click "Generate Fake Data"

## Overview
Front page:

![](https://i.imgur.com/M8HoUbU.png)

Pagination Example:

![](https://i.imgur.com/N3e54B7.png)

## Additional Changes
Furthermore the following changes have been done for personal choice, See [this commit](https://github.com/entrptaher/node-paginate/tree/7aa563954247be6019fe00f29fb30bc3b3014669) for a less destructive code.

- Add readme
- Updated all package versions
- Added nodemon as devDependency
- Added .gitignore
- Added .prettierrc
- Formatted using prettier on vscode
- Adjusted image min-height
- Added `prev` and `next` pagination
- Use local bootstrap
- Replace remote image with random qr code to avoid bandwidth wastage
- Add `/remove-products` which removes all products from database
- `generate-fake-data` redirects to `/products/1`
