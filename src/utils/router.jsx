import App from "../App.jsx";

import { createBrowserRouter } from "react-router-dom";
import BookDetail from "../components/BookDetail.jsx";
import Books from "../components/Books.jsx";
import Quotes from "../components/Quotes.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Books />
            },
            {
                path: '/quotes',
                element: <Quotes />
            },
            {
                path: '/books/:id',
                element: <BookDetail />
            }
        ]
    }
]);

export default router;