# base node backend

## available routes
-----------------------------------------------------------------
| model       | method   | url                    | requst body | params |
|-------------|----------|------------------------|-------------|--------|
| users       | `GET`    | `/api/users`           |             |        |
| users       | `PUT`    | `/api/users/:id`       | `{ name?: string; email?: string }` | |
| users       | `POST`   | `/api/users`           | `{ name: string; email: string }` | |
| users       | `DELETE` | `/api/users/:id`       |             |        |


## contributing
### dependencies
- node 14.x
- `pnpm` or `npm`
### running locally
1. install the dependencies `npm install`
2. start the watch the server `npm run watch-server`
3. the server will run at `http://localhost:8000`
### compiling
1. run the typescript compiler `npm run build`
2. output will go to the `public` directory
