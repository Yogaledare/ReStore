import {Grid} from "@mui/material";
import {Product} from "../../app/models/Product.ts";
import {ProductCard} from "./ProductCard.tsx";

type Props = {
    products: Product[];
}

export const ProductList = ({products}: Props) => {
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={3} key={product.id}>
                    <ProductCard key={product.name} product={product}></ProductCard>
                    
                </Grid>
            ))}
        </Grid>
    )
}