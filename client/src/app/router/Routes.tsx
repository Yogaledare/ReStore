import {createBrowserRouter} from "react-router-dom";
import App from "../layout/App.tsx";
import {HomePage} from "../../features/home/HomePage.tsx";
import { ProductDetails } from "../../features/catalog/ProductDetails.tsx";
import {AboutPage} from "../../features/about/AboutPage.tsx";
import {ContactPage} from "../../features/contact/ContactPage.tsx";
import {Catalog} from "../../features/catalog/catalog.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {path: '', element: <HomePage></HomePage>},
            {path: 'catalog', element: <Catalog></Catalog>},
            {path: 'catalog/:id', element: <ProductDetails></ProductDetails>},
            {path: 'about', element: <AboutPage></AboutPage>},
            {path: 'contact', element: <ContactPage></ContactPage>}
        ]
    }
])
