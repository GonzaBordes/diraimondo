import milOchoImg from '../assets/img/clientes/1828.png'
import avatarImg from  '../assets/img/clientes/avatar.png'
import azcuyImg from  '../assets/img/clientes/azcuy.png'
import camilaGalanteImg from  '../assets/img/clientes/camila-galante.png'
import ccfitImg from  '../assets/img/clientes/ccfit.png'
import cocaColaImg from  '../assets/img/clientes/coca-cola.png'
import guidoImg from  '../assets/img/clientes/guido.png'
import laCostaImg from  '../assets/img/clientes/la-costa.png'
import lpImg from  '../assets/img/clientes/lp.png'
import martinFierroImg from  '../assets/img/clientes/martin-fierro.png'
import miVictoriaImg from  '../assets/img/clientes/mi-victoria.png'
import raisaImg from  '../assets/img/clientes/raisa.png'

export default function ClientsGrid() {
  return (
    <ul className="img-grid">
        <li><img src={martinFierroImg} alt="Imagen de el cliente Martin Fierro" /></li>
        <li><img src={avatarImg} alt="Imagen del cliente Avatar" /></li>
        <li><img src={raisaImg} alt="Imagen del cliente Raisa" /></li>
        <li><img src={camilaGalanteImg} alt="Imagen de la cliente Camila Galante" /></li>
        <li><img src={azcuyImg} alt="Imagen del cliente Azcuy" /></li>
        <li><img src={milOchoImg} alt="Imagen del cliente 1828" /></li>
        <li><img src={lpImg} alt="Imagen del cliente Lp" /></li>
        <li><img src={laCostaImg} alt="Imagen del cliente La Costa" /></li>
        <li><img src={cocaColaImg} alt="Imagen del cliente CocaCola" /></li>
        <li><img src={guidoImg} alt="Imagen del cliente Guido" /></li>
        <li><img src={miVictoriaImg} alt="Imagen del cliente Mi Victoria" /></li>
        <li><img src={ccfitImg} alt="Imagen del cliente CCFit" /></li>
    </ul>
  )
}
