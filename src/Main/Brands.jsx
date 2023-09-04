import { SiNike, SiAdidas, SiUnderarmour, SiPuma, SiJordan, SiFila, SiAnta } from 'react-icons/si'
import { MdCropOriginal } from 'react-icons/md'
import { PiMaskHappy } from 'react-icons/pi'
import { TbTruckDelivery } from 'react-icons/tb'

const Brands = () => {
    return (
        <section className="brands">
            <h1>Brands</h1>
            <div className="brand-logos">
                <div > <SiNike/>  </div>
                <div> <SiAdidas/> </div>
                <div> <SiUnderarmour/> </div>
                <div> <SiPuma/> </div>
                <div> <SiJordan/> </div>
                <div> <SiFila/> </div>
                <div> <SiAnta/> </div>
            </div>

            <div className="brand-banner-text">
                <div className="banner-title">
                    We provide best <span>
                         customer experience </span>
                </div>

                <div className="brand-banner">
                    <div className='banner' data-aos="flip-up" data-aos-duration="800"> 
                        <div className="b-logo">
                            <span>
                                <MdCropOriginal/>
                            </span>
                            
                        </div>

                        <h2>Original Products</h2>
                        <p> We provide money back guarantee if the product are not original</p>
                    </div>

                    <div className='banner' data-aos="flip-up" data-aos-duration="800"> 
                        <div className="b-logo">
                            <span>
                                <PiMaskHappy/>
                            </span>
                        </div>

                        <h2>Satisfaction</h2>
                        <p> Exchange the product you've purchased if it doesn't fit you</p>
                    </div>

                    <div className='banner' data-aos="flip-up" data-aos-duration="800"> 
                        <div className="b-logo">
                            <span>
                                <TbTruckDelivery/>
                            </span>
                        </div>

                        <h2>Fast & Free Shipping</h2>
                        <p> We offer fast and free shipping for our loyal customers</p>
                    </div>
                    
                </div>
            </div>
        </section>

    )
}

export default Brands;