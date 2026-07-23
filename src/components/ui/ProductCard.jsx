import products from "../../data/productdata"

function ProductCard() {
  return (
   <>
    <div>
      {products.map((productdetails)=>
      (<div key={productdetails.id}>
        <p>The name of product:{productdetails.name}</p>
        <img src={productdetails.image} alt={productdetails.name} />
        <span>${productdetails.price.toFixed(2)}</span>
        <p>{productdetails.description}</p>
        <p>Available Sizes: {productdetails.size.join(", ")}</p>
      </div>))}
     </div>
     </>
  )
}

export default ProductCard