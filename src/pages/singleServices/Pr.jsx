import { SingleServiceLayout } from "../../components/SingleServiceLayout"
import astericoImg from '../../assets/img/asterisco.svg'
import imgOne from '../../assets/img/pr/1.webp'
import imgTwo from '../../assets/img/pr/2.webp'
import imgThree from '../../assets/img/pr/3.webp'
import imgFour from '../../assets/img/pr/4.webp'
import imgFive from '../../assets/img/pr/5.webp'
import imgSix from '../../assets/img/eventos/6.webp'
import imgSeven from '../../assets/img/eventos/7.webp'
import imgEight from '../../assets/img/eventos/8.webp'



import './style.css'


const Pr = () => {
  return (
    <SingleServiceLayout>
        <section id="pr">
            <div className="double_heading">
                <h2>Pr</h2>
                <span>Pr</span>
                <span>
                    <img src={astericoImg} alt="Imagen vectorial decorativa" />
                </span>
            </div>
            <div className="content_grid">
                <div className="left_col">
                    <p className="heading_text"><span className="strong">Conseguir que un evento destaque</span>y sea único es, una labor en la que el responsable de PR tiene mucho que aportar. Es él y su equipo quienes deben <span className="strong">encontrar en el concepto del acontecimiento ese valor agregado.</span></p>
                </div>
                <div className="right_col">
                    <picture><img src={imgOne} alt="" /></picture>               
                </div>          
            </div>
            <picture className="single-img">
                <img src={imgTwo} alt="" />
            </picture>
            <div className="pr-grid">
                <div className="grid-content">
                    <p>La imagen publicitaria es el recurso usado en las campañas de publicidad para elaborar una pieza de divulgación capaz de <span className="strong">incentivar la decisión de compra en el consumidor</span> a partir de las percepciones visuales.</p>
                    <p>Para lograrlo se valen de diversas estrategias y elementos y <span className="strong">una de las más importantes es la imagen publicitaria</span></p>
                </div>
                <picture>
                    <img src={imgThree} alt="" />
                </picture> 
                <picture>
                    <img src={imgFour} alt="" />
                </picture> 
                <picture>
                    <img src={imgFive} alt="" />
                </picture>                 
            </div>
        </section>
    </SingleServiceLayout>
  )
}

export default Pr
