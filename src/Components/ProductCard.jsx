import { useEffect, useState } from "react"
import { AllProductDataApi } from "../API/ProductApi"
import { Link } from "react-router-dom"


const ProductCard = () => {

  const [productData, setProductData] = useState([])
  useEffect(() => {
    AllProductDataApi().then((item) => setProductData(item))
  }, [])

  return (
    <>
      {
        productData.map((data) => {
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

                  <div className="d-flex justify-content-between mt-3">
                    <Link to={`/product/${data.id}`} className="text-decoration-none bg-primary text-white fw-bold px-5 py-2 rounded">Buy Now</Link>
                    <Link to="#" className="text-decoration-none bg-white border-primary text-primary border fw-bold px-5 py-2 rounded">Add To Cart</Link>
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