import { AiOutlineArrowRight, AiOutlineMail  } from 'react-icons/ai'


const Newsletter = () => {
    return(
        <section className="newsletter">
            <div className="limited-offer">
                <div className="offer-img">

                </div>

                <div className="offer-text">
                    <p>LIMITED OFFER</p>
                    <h1> 35% off only this friday and get special gift.</h1>
                    <div className="btn">
                        <button>  Grab it now <span> <AiOutlineArrowRight/> </span> </button>
                    </div>

                </div>
            </div>

            <div className="subscribe">
                <div className="text1">
                    <h1>Subscribe to our newsletter to get updates <span>
                    to our latest collections
                        </span> </h1>
                    <p> Get 20% off on your first order just by subscribing to our newsletter. </p>
                </div>

                <div className="text2">
                    <div className="text2-form">
                        <div className="input-holder">
                            <input type="text" placeholder="Enter your email" />
                            <span className='mailIcon'> <AiOutlineMail/> </span> 
                        </div>
                        
                        <button> Subscribe </button>
                    </div>

                    <div className="text2-text">
                        <p>You will be able to unsubscribe at any time. </p>
                        <p>Read our Privacy Policy <span>here</span> </p>
                    </div>
                </div>
            </div>

        </section>

        
    )
}

export default Newsletter;