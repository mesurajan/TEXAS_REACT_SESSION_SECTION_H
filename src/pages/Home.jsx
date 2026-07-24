import img01 from "../assets/productimages/img01.png"
import ProductCard from "../components/ui/ProductCard"



function Home() {
  return (
  <>
  <div className="Homepage">
    <button className="primary-btn">Explore Collection</button>
    <img src={img01} alt="Product" />

    <button className="primary-btn">Explore Collection</button>
    
    <div>
      <div className="flex items-center justify-between text-4xl">
        <h1>Best Sellers </h1>

      </div>
      <div>
        <ProductCard/>

      </div>
   
    </div>
  </div>
  </>
  )
}

export default Home