import './style.css'
import closeButton from '../../assets/img/nav-close-button.svg'
import logoImg from '../../assets/img/logo-white.png'
import { useEffect, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'


export default function index() {

    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

  return (
    <header>
        <div className="container">
            <Link to='/'>
                <div className="logo">
                    <img src={logoImg} alt="Logotipo de la marca de Nico" />
                </div>
            </Link>    
            <button onClick={toggleNav}>Menu</button>
            <div className={nav ? 'menu opened' : 'menu'}>
                <nav className={nav ? 'opened' : 'closed'}>
                    <span className='word__menu'>
                        Menú
                    </span>
                    <ul>
                        <li>
                            <Link onClick={toggleNav} to="/#servicios">Servicios</Link>
                        </li>
                        <li>
                            <Link onClick={toggleNav}  to='/#clientes'>Clientes</Link>
                        </li>
                        <li>
                            <Link onClick={toggleNav} to='/#medios'>Prensa</Link>
                        </li>
                        <li>
                            <Link onClick={toggleNav} to='/#contacto'>Contacto</Link>
                        </li>
                    </ul>
                    <span onClick={toggleNav} className='close__button'>
                        <img src={closeButton} alt="" />
                    </span>
                </nav>
            </div>
        </div>
    </header>
  )
}