import { useContext, } from "react"
import bannerImg from "/Images/banner.jpg"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
const Cart = () => {

  const { cartItem, setCartItem } = useContext(CartContext)

  // total cartt
  const totalPrice = cartItem.reduce((total, item) => total + item.price * item.quantity, 0)
  // total cart

  // remove cart
  const handleRemoveCart = (id) => {
    const removeCart = cartItem.filter((item) => {
      return item.id !== id;
    })
    setCartItem(removeCart)
  }
  // remove cart

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItem.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCartItem(updatedCart);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartItem.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity > 1
            ? item.quantity - 1
            : 1,
        };
      }

      return item;
    });

    setCartItem(updatedCart);
  };

  // quantity

  if (cartItem.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Your Cart Is Empty 🛒</h2>
        <Link to="/">Add some products to continue shopping.</Link>
      </div>
    )
  }

  return (
    <>
      <img src={bannerImg} alt="" width={"100%"} height={"100%"} style={{ height: "100vh" }} className="prodcut-banner" />

      <div className="container py-5">
        <h1 className="text-center">Your Cart Item Here</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-striped" style={{width:"1220px"}}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quanity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            {

              cartItem.map((item) => (

                <tbody key={item.id}>

                  <tr >
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <img src={item.image} alt="" width="50px" />
                        <p className="m-0">{item.title}</p>
                      </div>
                    </td>

                    <td>₹ {(item.price * item.quantity).toFixed(2)}</td>

                    <td className="d-flex">
                      <button style={{ width: "30px", height: "30px" }} onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                      <button style={{ width: "30px", height: "30px" }}>{item.quantity}</button>
                      <button style={{ width: "30px", height: "30px" }} onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                    </td>

                    <td>₹ {(item.price * item.quantity).toFixed(2)}</td>
                    <td onClick={() => handleRemoveCart(item.id)}>X</td>
                  </tr>

                </tbody>

              ))
            }
            </table>
          
        </div>
        <div>
            <h3>Total Price Is: ₹ {totalPrice.toFixed(2)}</h3>
          </div>
      </div>
    </>
  )
}

export default Cart