import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { splitText } from "../libs/splitText"
import Footer from "./footer/Footer"
import ServiceHeader from './header/ServiceHeader'

export const SingleServiceLayout = ({children}) => {

    gsap.registerPlugin(ScrollTrigger)

    const mainRef = useRef(null)

    useEffect(() => {
        const serviceImgs = document.querySelectorAll('picture img')

        serviceImgs.forEach(element => {
        gsap.fromTo(element,{scale:1.2,clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'},{ scale:1, clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',duration: 2, // Animation duration in seconds
            ease: 'Expo.easeInOut',scrollTrigger:{
                trigger: element,
            }})
        });

        const headings = mainRef.current.querySelectorAll('.heading_text');

        splitText(headings)

        const chars = mainRef.current.querySelectorAll(".word .char")
        gsap.fromTo(chars,{y: '120%'},{y: 0, duration:2, ease: 'Expo.easeInOut'})

        const opciones = {
          root: null, // El observador está en el viewport
          rootMargin: '0px',
          threshold: 0.2 // Se activará cuando al menos el 50% del elemento esté visible
        };
    
        
        const gridContent = mainRef.current.querySelector('.grid-content')
        const svg = document.querySelector('svg')

        const singleServiceObserver = new IntersectionObserver((entradas, observer) => {
          entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
              // Agregar la clase 'active' al elemento que está entrando en el viewport
              entrada.target.classList.add('active');
              observer.unobserve(entrada.target);          
            } 
    
          });
        }, opciones);

        gridContent ?  singleServiceObserver.observe(gridContent) : null
        singleServiceObserver.observe(svg)
    }, []);

  return (
    <>
      <ServiceHeader />
      <main ref={mainRef} id="single-service" className="container">
        {children}
      </main>
      <Footer />
    </>
    
  )
}
