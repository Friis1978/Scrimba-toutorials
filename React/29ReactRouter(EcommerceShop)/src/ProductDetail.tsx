import {useParams} from "react-router-dom"
import ProductsData from "./ProductsData"

type ProductProps = {
    productId: string
}

function ProductDetail() {
    const {productId} = useParams<ProductProps>()

    const product = ProductsData.find((prod)=>prod.id === Number(productId))
    console.log(productId)

    return (
        <section className="page">
            <h1>{product?.name}</h1>
            <p>${product?.price}</p>
            <p>{product?.description}</p>
        </section>
        
    )
}

export default ProductDetail