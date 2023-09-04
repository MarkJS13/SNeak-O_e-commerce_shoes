import { AiFillCheckCircle } from 'react-icons/ai'
import '../Notif/notif.css'
import { useSelector } from 'react-redux'

const SuccessNotif = () => {
    const notification = useSelector((state) => state.notif)
    console.log(notification)
    return(
        <div className={`success-notif ${notification.show ?  'success-display' : ''}`} >
            <p> Added to cart successfully <AiFillCheckCircle/> </p>
        </div>
    )
}


export default SuccessNotif;