import { useEffect, useState } from "react"
import bannerImg from "/Images/banner.jpg"
import { AllProductDataApi } from "../API/ProductApi"
const Cart = () => {
  const [cartItem, setCartItem] = useState([])

  useEffect(() => {
    AllProductDataApi().then((item) => setCartItem(item))
    console.log(cartItem)
  }, [cartItem])
  return (
    <>
      <img src={bannerImg} alt="" width={"100%"} height={"100%"} style={{ height: "100vh" }} />

      <div className="container py-5">
        <h1 className="text-center">Your Cart Item</h1>

       <div className="table-responsive">
         <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quanity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((data) => (
              <tr key={data.id}>
                <td className="d-flex gap-3 align-items-center">
                  <img
                    src={data.image}
                    alt=""
                    width="50"
                  />
                  {data.title.length > 20 ? `${data.title.slice(0, 20)}...` : data.title}
                </td>

                <td>₹ {data.price}</td>

                <td>
                  <button style={{ width: "20px", height: "20px", lineHeight: "10px" }}>-</button>
                  <input type="text" name="quantity" id="quantity" value={data.quantity} style={{ width: "50px", textAlign: "center" }} />
                  <button style={{ width: "20px", height: "20px", lineHeight: "10px" }}>+</button>
                </td>

                <td>₹ {data.price * data.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
       </div>
      </div>
    </>
  )
}

export default Cart