import { SingleServiceLayout } from "../../components/SingleServiceLayout"
import astericoImg from '../../assets/img/asterisco.svg'
import imgOne from '../../assets/img/eventos/1.webp'
import imgTwo from '../../assets/img/eventos/2.webp'
import imgThree from '../../assets/img/eventos/3.webp'
import imgFour from '../../assets/img/eventos/4.webp'
import imgFive from '../../assets/img/eventos/5.webp'
import imgSix from '../../assets/img/eventos/6.webp'
import imgSeven from '../../assets/img/eventos/7.webp'
import imgEight from '../../assets/img/eventos/8.webp'



import './style.css'


const Events = () => {
  return (
    <SingleServiceLayout>
        <section id="Eventos">
            <div className="double_heading">
                <h2>Eventos</h2>
                <span>Eventos</span>
                <span>
                    <img src={astericoImg} alt="Imagen vectorial decorativa" />
                </span>
            </div>
            <div className="content_grid">
                <div className="left_col">
                    <p className="heading_text">Creamos<span className="strong">Experiencias</span>somos<span className="strong">Distintos</span></p>
                </div>
                <div className="right_col">
                    <picture><img src={imgOne} alt="" /></picture>               
                </div>          
            </div>
            <picture className="single-img">
                <img src={imgTwo} alt="" />
            </picture>
            <div className="eventos-img-grid">
                <picture>
                    <img src={imgThree} alt="" />
                </picture>
                <picture>
                    <img src={imgFour} alt="" />
                </picture> 
                <picture>
                    <img src={imgFive} alt="" />
                </picture> 
                <picture>
                    <img src={imgSix} alt="" />
                </picture>                 
            </div>
            <picture className="single-img">
                <img src={imgSeven} alt="" />
            </picture>
            <picture className="single-img">
                <img src={imgEight} alt="" />
            </picture> 
        </section>
    </SingleServiceLayout>
  )
}

export default Events
