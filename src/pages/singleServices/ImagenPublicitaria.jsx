import { SingleServiceLayout } from "../../components/SingleServiceLayout"
import astericoImg from '../../assets/img/asterisco.svg'
import imgOne from '../../assets/img/publicidad/1.png'
import imgTwo from '../../assets/img/publicidad/2.png'
import imgThree from '../../assets/img/publicidad/3.png'
import imgFour from '../../assets/img/publicidad/4.png'
import imgFive from '../../assets/img/publicidad/5.png'
import imgSix from '../../assets/img/publicidad/6.png'
import imgSeven from '../../assets/img/publicidad/7.png'
import imgEight from '../../assets/img/publicidad/8.png'
import imgNine from '../../assets/img/publicidad/9.png'
import imgTen from '../../assets/img/publicidad/10.png'

import './style.css'

const ImagenPublicitaria = () => {
  return (
    <SingleServiceLayout>
            <section id="imagen-publicitaria">
                <div className="double_heading">
                    <h2>Imagen</h2>
                    <span>Publicitaria</span>
                    <span>
                        <img src={astericoImg} alt="Imagen vectorial decorativa" />
                    </span>
                </div>
                <div className="content_grid">
                    <div className="left_col">
                        <p className="heading_text">Captar la <span className="strong">atención</span>de potenciales compradores y clientes</p>
                        <picture><img src={imgThree} alt="" /></picture>  
                    </div>
                    <div className="right_col">
                        <picture><img src={imgOne} alt="" /></picture>
                        <picture><img src={imgFive} alt="" /></picture>                 
                    </div>          
                </div>
                <div className="text-img-grid">
                    <div className="grid-content">
                        <p>La imagen publicitaria es el recurso usado en las campañas de publicidad para elaborar una pieza de divulgación capaz de <span className="strong">incentivar la decisión de compra en el consumidor</span> a partir de las percepciones visuales.</p>
                        <p>Para lograrlo se valen de diversas estrategias y elementos y <span className="strong">una de las más importantes es la imagen publicitaria</span></p>
                    </div>
                    <picture>
                        <img src={imgEight} alt="" />
                    </picture>                
                </div>
                <picture>
                    <img src={imgFour} alt="" />
                </picture>
                <div className="two-img-grid">
                    <picture>
                        <img src={imgSeven} alt="" />
                    </picture>
                    <picture>
                        <img src={imgSix} alt="" />
                    </picture>
                </div>  
                <picture>
                    <img src={imgTen} alt="" />
                </picture>
                <div className="two-img-grid">
                    <picture>
                        <img src={imgTwo} alt="" />
                        </picture>
                    <picture>
                        <img src={imgNine} alt="" />
                    </picture>
                </div> 
            </section>
    </SingleServiceLayout>
  )
}

export default ImagenPublicitaria
