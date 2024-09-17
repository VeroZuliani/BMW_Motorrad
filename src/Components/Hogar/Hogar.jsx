
import { Header } from '../Header/Header'
import './Hogar.css'

const Hogar = () => {
    return(
        <div className="container-fluid home">
            <Header/>
            <p className="text">LA NUEVA M1000RR</p>
            <a className="icon-link" href="#">
                <img src="/flecha_doble.png" alt="flecha_doble" width="30px" height="30px" className="img-flecha-doble"/>
            </a>
        </div>

    )
}

export {Hogar}


