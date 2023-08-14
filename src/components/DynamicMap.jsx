import { useEffect, useRef } from 'react'

import mapImg from '../assets/img/mapa.svg'
import UsaSvg from './UsaSvg'
import ArgentinaSvg from './ArgentinaSvg'
import MexicoSvg from './MexicoSvg'
import EspanaSvg from './EspanaSvg'

export default function DynamicMap() {

  const mapRef = useRef()


  useEffect(() => {   

    const paises = document.querySelectorAll('svg');

    console.log(paises)

    // Opciones del Intersection Observer
    const opciones = {
      root: null, // El observador está en el viewport
      rootMargin: '0px',
      threshold: 0.2 // Se activará cuando al menos el 50% del elemento esté visible
    };

    // Crear una instancia del Intersection Observer
    const observer = new IntersectionObserver((entradas, observer) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          // Agregar la clase 'active' al elemento que está entrando en el viewport
          entrada.target.classList.add('active');
          observer.unobserve(entrada.target);          
        } 

      });
    }, opciones);

    // Observar cada elemento SVG
    paises.forEach(elemento => {
      observer.observe(elemento);
    });

    const imagenes = document.querySelectorAll('.pais')
    const mainImg = document.querySelector('.mapa_amarillo')

    imagenes.forEach((imagen) => {
    imagen.addEventListener('mouseover', () => {
    imagenes.forEach((img) => {
        img.classList.add('opacidad')
        mainImg.classList.add('opacidad')
      });
      imagen.classList.remove('opacidad')
    });

    imagen.addEventListener('mouseout', () => {
      imagenes.forEach((img) => {
        img.classList.remove('opacidad')
        mainImg.classList.remove('opacidad');
        });
      });
    });
  }, []);

  return (
    <div className='map_wrapper' ref={mapRef}>
        <img className='mapa_amarillo' src={mapImg} alt="" />
        <div className="pais argentina">
          <ArgentinaSvg />
          <div className="tooltip">
            <span>Argentina</span>
          </div>
        </div>
        <div className="pais mexico">
          <MexicoSvg />
          <div className="tooltip">
            <span>Mexico</span>
          </div>
        </div>
        <div className="pais usa">
          <UsaSvg />
          <div className="tooltip">
            <span>Usa</span>
          </div>
        </div>
        <div className="pais españa">
          <EspanaSvg />
          <div className="tooltip">
            <span>España</span>
          </div>
        </div>        
    </div>
  )
}
