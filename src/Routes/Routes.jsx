import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import SearchResult from "../pages/SearchResult/SearchResult";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/search-result",
                element: <SearchResult/>
            },
        ]
    }
])

export default router