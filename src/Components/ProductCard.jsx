import { useEffect, useState } from "react"
import { AllProductDataApi } from "../API/ProductApi"
import { Link } from "react-router-dom"


const ProductCard = () => {

  const [searchData, setSearchData] = useState("")
  const [sortType, setSortType] = useState("")
  const [productData, setProductData] = useState([])

  const filterProduct = productData.filter((item) =>
    item.title.toLowerCase().includes(searchData.toLowerCase())
  );
 
  const sortedProduct=[...filterProduct]

  if(sortType === "lowToHigh"){
    sortedProduct.sort((a,b)=>b.price - a.price)
  }

  if(sortType === "highToLow"){
    sortedProduct.sort((a,b)=>a.price - b.price)
  }

  useEffect(() => {
    AllProductDataApi().then((item) => setProductData(item))
  }, [])

  return (
    <>

      <input type="text" name="search" id="search" value={searchData} onChange={(e) => setSearchData(e.target.value)} className="w-100 py-2 px-3" placeholder="Search Your Category" />
      <div>
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)} style={{ width: "300px", marginTop: "20px" }}>
          <option value="">Default</option>
          <option value="lowToHigh">Price Low to High</option>
          <option value="highToLow">Price High to Low</option>
        </select>
      </div>
      {
        sortedProduct.map((data) => {
          return (
            <div className="col-xl-4 mt-3">
              <div className="product-card card h-100" key={data.id}>
                <img src={data.image} alt="" className="p-3 product-img" />
                <hr className="my-1" />
                <div className="product-details bg-light p-3 h-100">
                  <h5>{data.title.length > 20 ? `${data.title.slice(0, 20)}...` : data.title}</h5>
                  <p className="discipion-product">{data.description.slice(0, 80)}....</p>
                  <div className="d-flex justify-content-between mb-3">
                    <p className="m-0 fw-bold">Category: </p>
                    <p className="m-0 fw-bold">{data.category}</p>
                  </div>
                  <div className="d-flex justify-content-between ">
                    <p className="m-0 fw-bold">Price: </p>
                    <p className="m-0 fw-bold">₹ {data.price}</p>
                  </div>
                  <div className="d-flex justify-content-between rating">
                    <p className="m-0 fw-bold">Rating: <i className="fa-solid fa-star"></i> {data.rating.rate} </p>
                    <p className="m-0 fw-bold">Buyers: <i className="fa-solid fa-bookmark"></i> {data.rating.count}</p>
                  </div>

                  <div className="d-flex justify-content-center  mt-3 text-center">
                    <Link to={`/product/${data.id}`} className="text-decoration-none bg-primary text-white fw-bold px-5 py-2 rounded w-100">Buy Now</Link>
                    {/* <Link to="#" className="text-decoration-none bg-white border-primary text-primary border fw-bold px-5 py-2 rounded">Add To Cart</Link> */}
                  </div>
                </div>

              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default ProductCard