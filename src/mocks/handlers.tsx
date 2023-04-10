// src/mocks/handlers.js
import { rest } from 'msw'
export const handlers = [
    // Handles a GET /user request
    rest.get('http://localhost:3000/user', (req, res, ctx) => {
        return res(ctx.json([
            {
                "id": 1,
                "name": "John Smith",
                "adj": "-",
                "status": "clear",
                "location": "America",
                "Date": "2/22/2022"
            }
        ]))
    }),
]