import logo from '/Images/dummy-logo.png'

const Navbar = () => {
  return (
    <>
      <div className="mini-nav">
        <div className="container d-flex justify-content-between">
          <div className="d-flex gap-4">
            <a href="#"><i className="fa-solid fa-phone"></i> +91 9599593094</a>
            <a href="#"><i className="fa-solid fa-envelope"></i> nitesh@gmail.com</a>
          </div>
          <div className="d-flex gap-4">
            <a href="#"><i className="fa-regular fa-user"></i> Login</a>
            <a href="#"><i className="fa-solid fa-right-from-bracket"></i> Sign-Up</a>
            <a href="cart"><i className="fa-solid fa-cart-flatbed"></i> Cart <sup>1</sup></a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/"><img src={logo} alt="" width={"130px"} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#product">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
            <div className='phone-btn'>
              <a href="#"><i className="fa-solid fa-phone"></i> +91 9599593094</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar