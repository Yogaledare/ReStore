import {Product} from "../../app/models/Product.ts";
import {ProductList} from "./ProductList.tsx";
import {useEffect, useState} from "react";

export const Catalog = () => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])


    
    return (
        <>
            <ProductList products={products}></ProductList>
            {/*<Button variant={'contained'} onClick={addProduct}>Add Product</Button>*/}
        </>
    )
}



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
    


