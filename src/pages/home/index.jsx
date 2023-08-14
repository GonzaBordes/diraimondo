import './style.css'
import { useEffect,useState } from 'react'
import DinamicMap from '../../components/DynamicMap'
import Header from '../../components/header'
import astericoImg from '../../assets/img/asterisco.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

import paredesImg from '../../assets/img/home-paredes.webp'
import florImg from '../../assets/img/home-flor.webp'
import iglesiasImg from '../../assets/img/home-iglesias.webp'
import pampitaImg from '../../assets/img/home-pampita.webp'
import ClientsGrid from '../../components/ClientsGrid'
import mediosNicoImg from '../../assets/img/medios-nico.png'
import mediosFideoImg from '../../assets/img/medios-di-maria.webp'
import mediosLasRosasImg from '../../assets/img/medios-las-rosas.png'
import mediosForbesImg from '../../assets/img/medios-forbes.png'
import circleLogoImg from '../../assets/img/logo-circular.svg'

import Footer from '../../components/footer/Footer'




export default function Home() {

  const mediosh2Ref = useRef()
  const mainRef = useRef()


  gsap.registerPlugin(ScrollTrigger)
 
  useEffect(() => {
    
    gsap.set(".servicios_heading span", {y: '-140%'});

    ScrollTrigger.create({
      trigger: ".servicios_heading span",
      start: "top 75%", 
      onEnter: () => {
        gsap.to(".servicios_heading span", { y: "-42%", duration: .8, ease: 'cubic-bezier(0.25, 1, 0.5, 1)' }); // Desplaza el texto hacia arriba (y = 0)
      },
      onLeaveBack: () => {
        gsap.to(".servicios_heading span", { y: "-140%", duration: .8, ease: 'cubic-bezier(0.25, 1, 0.5, 1)' }); // Desplaza el texto hacia abajo (y = 100%)
      }    
    });

    const serviciosLinks = mainRef.current.querySelectorAll("#servicios li a");

    serviciosLinks.forEach((link, index) => {
      gsap.set(link, { x: -30, opacity:0 }); 

      ScrollTrigger.create({
        trigger: link,
        start: "top 80%", // Comienza la animación cuando el 80% superior del encabezado entra en el viewport
        end: "top 30%", // Revierte la animación cuando el 30% superior del encabezado sale del viewport

        onEnter: () => {
          gsap.to(link, { x: 0,opacity:1, duration:.3, ease: 'cubic-bezier(0.25, 1, 0.5, 1)' ,stagger:.2}); // Muestra el encabezado cuando entra en el viewport
        },
        onLeaveBack: () => {
          gsap.to(link, { x: -30,opacity:0, duration: .3, ease: 'cubic-bezier(0.25, 1, 0.5, 1)',stagger:.2 }); // Oculta el encabezado cuando sale del viewport
        }
      });
    });

    // const serviciosList = document.querySelector('#servicios ul')
    // const serviciosLinks = document.querySelectorAll('#servicios li a')

    // console.log(serviciosList)

    // const serviciosTl = gsap.timeline({scrollTrigger:{
    //   trigger:serviciosList,
    //   scrub: .5,
    //   pin: true,
    //   start:  '-35%',
    //   end: '400%'
    // }})

    // serviciosTl.fromTo(serviciosLinks,{ opacity:0,x:-100},{opacity:1,x:0, duration: 10, stagger:10})

    // Selecciona todos los contenedores "padre"
    const padres = mainRef.current.querySelectorAll('.animation_heading');

    // Iterar sobre cada contenedor "padre"
    padres.forEach((padre, index) => {
      // Seleccionar los hijos del padre actual
      const hijos = padre.querySelectorAll('.heading_animated');

      // Configuración de animación para el padre actual
      const animacion = gsap.timeline({ defaults: { y: 0 } })
        .fromTo(hijos, { y: 400 }, { duration: .7, stagger: 0.1, ease:'cubic-bezier(0.25, 1, 0.5, 1)'});

      // Configuración de ScrollTrigger para el padre actual
      ScrollTrigger.create({
        trigger: padre,
        start: "top 80%", // Ajusta el punto de inicio según tus necesidades
        animation: animacion,
        once: true, // La animación se ejecuta solo una vez
        onEnter: () => {
          animacion.restart();
        }
      });
    });

    gsap.to(mediosh2Ref.current, {
      scrollTrigger: {
        trigger: mediosh2Ref.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,      },
      x: '6%',
    });

    gsap.to('.medios_heading_wrapper span', {
      scrollTrigger: {
        trigger: '.medios_heading_wrapper span',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,      },
      x: '-6%',
    });

    const mediosImg = mainRef.current.querySelectorAll('#medios picture')
    const mediosArticles = mainRef.current.querySelectorAll('#medios article')

    mediosImg.forEach((img, index) => {
        img.addEventListener('click',()=>{
            mediosArticles.forEach(article => {
                article.classList.remove('active')
            });
            mediosArticles[index].classList.add('active') 
        })
    });

    const personalidadesImgs = mainRef.current.querySelectorAll('#personalidades ul img')

    personalidadesImgs.forEach(element => {
      gsap.fromTo(element,{scale:1.2,clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'},{ scale:1, clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',duration: 2.5, // Animation duration in seconds
      ease: 'Expo.easeInOut',scrollTrigger:{
        trigger: element
      }})
    });
    
    // Split every heading letter and putting a span wrapping it
    const headings = mainRef.current.querySelectorAll('#clientes h2, #map h2, .double_heading h2');

    headings.forEach(heading => {
      let chars = heading.textContent.split("");
      heading.innerHTML = "";
      chars.forEach(char => {
        heading.innerHTML += `<span style="display:inline-block;" class="char">${char}</span>`;
      });
    });

    // Animate each heading letter using ScrollTrigger
    gsap.utils.toArray("#clientes h2, #map h2").forEach(function(heading) {
      var letters = heading.querySelectorAll("span");
    
      // Set initial position of each letter
      gsap.set(letters, { y: '100%' });
    
      ScrollTrigger.create({
        trigger: heading,
        start: "top 80%",
        onEnter: function() {
          gsap.to(letters, { y: 0, duration: .4, stagger: 0.04, ease: "circ.inout" });
        }
      });
    });
    
    return (() =>{
      const scrollTriggers = ScrollTrigger.getAll();

    // Stop all of the ScrollTriggers.
    scrollTriggers.forEach((scrollTrigger) => {
      scrollTrigger.kill();
    });
      })
    }, []);

  return (
    <>
      <Header/>
      <main ref={mainRef}>
        <section id='home_hero'>
          <div className="container">
            <h1>VIDEO</h1>
          </div>
        </section>
        <section id="servicios">
          <div className="container">
            <div className="servicios_heading">
              <h2>Servicios</h2>
              <span>Servicios</span>
            </div>
            <ul>
              <li>
                <Link lang='en' to={'/influencers-marketing'}>Influencers marketing</Link>
              </li>
              <li>
                <Link to={'/imagen-publicitaria'}>Imagen publicitaria</Link>
              </li>
              <li>
                <Link lang='en' to={'/content-lab'}>Content lab</Link>
              </li>
              <li>
                <Link lang='en' to={'/eventos'}>Eventos</Link>
              </li>
              <li>
                <Link lang='en' to={'/pr'}>Pr</Link>
              </li>
            </ul>
          </div>
        </section>
        <section id='personalidades'>
          <div className="container">
            <div className="heading_wrapper animation_heading">
              <div className="overflow-box">
                <h2 className='heading_animated'>Personalidades</h2>
              </div>
              <div className="overflow-box">
                <span className='heading_word heading_animated'>que nos</span>
              </div>
              <div className="overflow-box">
                <span className='heading_word heading_animated asterisc'>
                <figure>
                  <img src={astericoImg} alt="Imagen decorativa de diseño" /> 
                </figure>               
                Eligen
                </span>
              </div>
            </div>
            <ul className='img-grid'>
              <li>
                <picture>
                  <img src={paredesImg} alt="Foto de Leandro Paredes" />
                </picture>
              </li>
              <li>
                <picture>
                  <img src={florImg} alt="Foto de Florencia Poggio" />
                </picture>
              </li>
              <li>
                <picture>
                  <img src={iglesiasImg} alt="Foto de Enrique Iglesias" />
                </picture>
              </li>
              <li>
                <picture>
                  <img src={pampitaImg} alt="Foto de pampita" />
                </picture>
              </li>
            </ul>
            <picture className='circle-logo'>
              <img src={circleLogoImg}  alt="Logotipo de Nico Di Raimondo" /> 
            </picture>
          </div>                  
        </section>
        <section id="clientes">
          <div className="container">
              <h2 className='heading_animated'>Clientes</h2>          
            <ClientsGrid />
          </div>
        </section>
        <section id="map">
          <div className="container">
            <h2 lang='en' className='animation_heading'>
              Here we are
            </h2>
            <DinamicMap/>
          </div>
        </section>
        <section id="medios">
          <div className="medios_heading_wrapper">
            <h2 data-scroll-speed="2" data-scroll-direction="horizontal" ref={mediosh2Ref}>Di Raimondo en los medios</h2>
            <span>en los medios di raimondo</span>
          </div>
          <div className="container">
            <div className="medios_articles">
            <article className='las-rosas'>
              <div className="article_content">
                <p>“Un día sin esperarlo una persona me presentó a Evangelina Anderson, y casi como un juego empecé a acompañarla en su trabajo"</p>
                <img src={mediosFideoImg} alt="Foto de Nico Di Raimondo en una entrevista con la revista Forbes" />
                <a target="_blank" href="http://www.lasrosas.com.ar/portal/nicolas-di-raimondo/

">Leer nota</a>
              </div>
              <picture>
                <img src={mediosLasRosasImg} alt="Foto del logotipo del cliente Las Rosas" />
              </picture>
            </article>
            <article className='forbes active'>
              <div className="article_content">
                <p>De Castelar a trabajar en un Martín FIerro y shows internacionales como Shakira: La historia de Nicolás Di Raimondo</p>
                <img src={mediosNicoImg} alt="Foto de Nico Di Raimondo con Angel Di Maria" />
                <a target="_blank" href="https://www.forbesargentina.com/negocios/de-castelar-trabajar-martin-fierro-shows-internacionales-como-shakira-historia-nicolas-di-raimondo-n23743

">Leer nota</a>
              </div>
              <picture>
                <img src={mediosForbesImg} alt='Foto del logotipo de la revista Forbes' />
              </picture>
            </article>
          </div>
          </div>    
        </section>
      </main>
      <Footer/>
    </>
  )
}
