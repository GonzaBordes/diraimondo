import { SingleServiceLayout } from "../../components/SingleServiceLayout"
import astericoImg from '../../assets/img/asterisco.svg'
import imgOne from '../../assets/img/influencers/1.webp'
import imgTwo from '../../assets/img/influencers/2.webp'
import imgThree from '../../assets/img/influencers/3.webp'
import imgFour from '../../assets/img/influencers/4.webp'
import imgFive from '../../assets/img/influencers/5.webp'


export default function InfluencersMarketing() {
  return (
    <SingleServiceLayout>
        <section id="influencers">
            <div className="double_heading">
                <h2>Marketing</h2>
                <span>De influencers</span>
                <span>
                    <img src={astericoImg} alt="Imagen vectorial decorativa" />
                </span>
            </div>
            <div className="content_grid">
                <div className="left_col">
                    <p className="heading_text"><span className="strong">Masificar</span>La información de forma espontánea e<span className="strong">influir</span>en las desiciones de consumo</p>
                </div>
                <div className="right_col">
                    <picture><img src={imgOne} alt="" /></picture>               
                </div>          
            </div>
            <picture className="single-img">
                <img src={imgTwo} alt="" />
            </picture>
            <div className="text-img-grid">
                <div className="grid-content">
                    <p>El Marketing de influencers consiste en una estrategia donde se llega a <span className="strong">un acuerdo de colaboración</span> entre una marca y una persona influyente para que difunda o promocione su marca, normalmente con el objetivo de <span className="strong">aumentar la visibilidad de la marca</span>, el tráfico de la web, el número de seguidores en redes sociales, y sobre todo, <span className="strong">incrementar el número de ventas.</span></p>
                </div>
                <picture>
                    <img src={imgThree} alt="" />
                </picture>                
            </div>
            <picture className="single-img">
                <img src={imgFour} alt="" />
            </picture>
            <picture className="single-img">
                <img src={imgFive} alt="" />
            </picture> 
        </section>
    </SingleServiceLayout>
  )
}
