import { SingleServiceLayout } from "../../components/SingleServiceLayout"
import astericoImg from '../../assets/img/asterisco.svg'
import imgOne from '../../assets/img/lab/1.webp'
import imgTwo from '../../assets/img/lab/2.webp'
import imgThree from '../../assets/img/lab/3.webp'
import imgFour from '../../assets/img/lab/4.webp'




export default function ContentLab() {
  return (
    <SingleServiceLayout>
        <section id="influencers">
            <div className="double_heading">
                <h2>Content</h2>
                <span>Lab</span>
                <span>
                    <img src={astericoImg} alt="Imagen vectorial decorativa" />
                </span>
            </div>
            <div className="content_grid">
                <div className="left_col">
                    <p className="heading_text">Crear<span className="strong">contenido de valor</span>y relevante para una determinada audiencia</p>
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
                    <p>¿Cómo <span className="strong">vínculo a largo plazo entre la marca y sus consumidores</span>? ¿cómo crear el posicionamiento efectivo de una marca? ¿Es posible alcanzar el tan mencionado engagement con nuestra audiencia?</p>
                    <p>El Content Marketing es una herramienta que a través de diferentes <span className="strong">recursos editoriales, creativos y de marketing</span> genera contenido de calidad que luego es utilizado en múltiples canales de comunicación</p>
                </div>
                <picture>
                    <img src={imgThree} alt="" />
                </picture>                
            </div>
            <picture className="single-img">
                <img src={imgFour} alt="" />
            </picture>
        </section>
    </SingleServiceLayout>
  )
}
