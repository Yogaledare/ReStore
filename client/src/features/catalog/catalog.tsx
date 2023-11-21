import { Product } from "../../app/models/Product.ts";
import { ProductList } from "./ProductList.tsx";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent.ts";
import { LoadingComponent } from "../../app/layout/LoadingComponent.tsx";

export const Catalog = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.list()
            .then((products) => setProducts(products))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <LoadingComponent message="Loading products" />;

    return (
        <>
            <ProductList products={products}></ProductList>
            {/*<Button variant={'contained'} onClick={addProduct}>Add Product</Button>*/}
        </>
    );
};

// const addProduct = () => {
//     setProducts(prevState => [...prevState, {
//         id: prevState.length + 101,
//         name: 'product' + (prevState.length + 1),
//         price: (prevState.length * 100),
//         brand: "some brand",
//         description: "some description",
//         pictureUrl: "some",
//     }])
// }
