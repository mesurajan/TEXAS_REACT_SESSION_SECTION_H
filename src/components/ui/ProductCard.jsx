import productdata from "../../data/productmock"

function ProductCard() {
  return (
   <>
      <div>
        {productdata.map((item)=>{
          return (
            <div key={item.id}>
              <h2 >{item.name}</h2>
              <p>{item.price}</p>
              <p>{item.instock}</p>
              <p>{item.description}</p>
              <p>{item.size}</p>
              <p>{item.color}</p>
              <p>{item.fabric}</p>
              <p>{item.fit}</p>
              <p>{item.care}</p>
      
            </div>
          );
        })}
      </div>
   
   </>
  )
}

export default ProductCard