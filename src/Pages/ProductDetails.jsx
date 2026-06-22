import bannerImg from "/Images/banner.jpg"
import { Link } from "react-router-dom"
import { AllProductDataApi } from "../API/ProductApi"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../Context/CartContext"
const ProductDetails = () => {
  

  const { cartItem, setCartItem } = useContext(CartContext);
  const handleAddToCart = () => {
   setCartItem((prev) => [
    ...prev,
    {
      ...proDetails,
      quantity: 1,
    },
  ]);
};
  useEffect(() => {
    // console.log("Cart Changed:", cartItem);
  }, [cartItem]);


  const { id } = useParams();

  const [proDetails, setProDetails] = useState(null);
  const [relateProduct, setRelateProduct] = useState([]);

  useEffect(() => {
    AllProductDataApi().then((item) => {
      setRelateProduct(item);

      const singleProduct = item.find(
        (e) => e.id === Number(id)
      );
   
      setProDetails(singleProduct);
    });
  }, [id]);


  if (!proDetails) {
    return <h2>Loading...</h2>;
  }

  const relatedProductData = relateProduct
    .filter(
      (e) =>
        e.category === proDetails.category &&
        e.id !== proDetails.id
    )
    .slice(0, 8);


  return (
    <>
      <div>

        <img src={bannerImg} alt="" width={"100%"} height={"100%"} style={{ height: "100vh" }} />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mt-3">
              <img src={proDetails.image} alt="" />
            </div>
            <div className="col-xl-6">
              <div>
                <h1>{proDetails.title}</h1>
                <p>{proDetails.description}</p>
                <div className="d-flex justify-content-between ">
                  <p className="m-0 fw-bold">Price: </p>
                  <p className="m-0 fw-bold">₹ {proDetails.price}</p>
                </div>
                <div className="d-flex justify-content-between rating">
                  <p className="m-0 fw-bold">Rating: <i className="fa-solid fa-star"></i> {proDetails?.rating?.rate} </p>
                  <p className="m-0 fw-bold">Buyers: <i className="fa-solid fa-bookmark"></i> {proDetails?.rating?.count}</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <p className="m-0 fw-bold">Category: </p>
                  <p className="m-0 fw-bold">{proDetails.category}</p>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <Link to="" className="text-decoration-none bg-primary text-white fw-bold px-5 py-2 rounded">Buy Now</Link>
                  <button
                    onClick={handleAddToCart}
                    className="bg-white border-primary text-primary border fw-bold px-5 py-2 rounded"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2>Relatble Product</h2>
        <div className="row">
          {
            relatedProductData.map((data) => {
              return (
                <div className="col-xl-4 mt-3" key={data.id}>
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
                        <p className="m-0 fw-bold">Rating: <i className="fa-solid fa-star"></i> {data?.rating?.rate} </p>
                        <p className="m-0 fw-bold">Buyers: <i className="fa-solid fa-bookmark"></i> {data?.rating?.count}</p>
                      </div>

                      <div className="d-flex justify-content-between mt-3">
                        <Link to={`/product/${data.id}`} className="text-decoration-none bg-primary text-white fw-bold px-5 py-2 rounded">Buy Now</Link>
                        {/* <button
                          onClick={() => handleAddToCart(data)}
                          className="bg-white border-primary text-primary border fw-bold px-5 py-2 rounded"
                        >
                          Add To Cart
                        </button> */}
                      </div>
                    </div>

                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ProductDetails