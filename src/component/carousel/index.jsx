import { useState, useEffect } from "react"
import img1 from "../../assets/imagem/img1.jpg"
import img2 from "../../assets/imagem/img2.jpg"
import img3 from "../../assets/imagem/img3.jpg"
import '../carousel/carousel.css'

function Carousel() {
    const imagens = [img1, img2, img3]
    const [index, setIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(0)
    const [touchStart, setTouchStart] = useState(0)

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].clientX

        if (touchStart - touchEnd > 50) {
            setIndex((prev) => {
                setPrevIndex(prev)
                return (prev + 1) % imagens.length
            })
        }

        if (touchStart - touchEnd < -50) {
            setIndex((prev) => {
                setPrevIndex(prev)
                return prev === 0 ? imagens.length - 1 : prev - 1
            })
        }
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndex((prev) => {
                setPrevIndex(prev)
                return (prev + 1) % imagens.length
            })
        }, 6700)

        return () => clearInterval(intervalo)
    }, [])

    return (
        <div className="carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <img
                src={imagens[prevIndex]}
                alt="banner anterior"
                className="carousel-image previous"
            />
            <img
                key={index}
                src={imagens[index]}
                alt="banner"
                className="carousel-image current"
            />
        </div>
    )
}

export default Carousel