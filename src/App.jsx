import Container from "./Container"
import { Provider } from "react-redux"
import { store } from "./store/store"
import BeatLoader from "react-spinners/BeatLoader"
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2800);
  }, [])

  useEffect(() => {
    AOS.init();
  }, [])
 
  return (
    <>
    {
      isLoading ?
      <div className="loadingIcon">
          <BeatLoader color="hsla(22, 16%, 27%, 0.685)" />
      </div> 
      :
      <Provider store={store}>
        <Container/>
      </Provider>
    }

    </>
  )
}

export default App
