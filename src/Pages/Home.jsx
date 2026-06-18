import bannerImg from "/Images/banner.jpg"
import bannerImg1 from "/Images/banner-1.webp"
import bannerImg2 from "/Images/banner-2.jpg"
import ProductCard from "../Components/ProductCard"
const Home = () => {
    return (
        <>
            <div className="banner-img">
                <img src={bannerImg} alt="" width={"100%"} height={"100%"} />
            </div>

            <div className="container-fluid w-100 py-5 px-0 overflow-hidden">
                <div className="row">
                    <div className="col-md-6">
                        <img src={bannerImg1} alt="" width={"100%"} height={"100%"} className="border shadow rounded" />
                    </div>
                    <div className="col-md-6">
                        <img src={bannerImg2} alt="" width={"100%"} height={"100%"} className="border shadow rounded" />
                    </div>
                </div>
            </div>

            <section>
                <div className="product-data pb-5" id="product">
                    <h1 className="text-center">Our Product</h1>
                    <div className="container">
                        <div className="row">
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home