import './Header.css'

const Header = () => {
    return(
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    
                    <div className="container text-center">
                        <div className="container-logo row">
                            <div className="logo col">
                                <img src="/bmw.svg" alt="Logo" width="30" height="24" className="img-logo d-inline-block align-text-top"/>
                            </div>
                            <div className="container-tit-logo col">
                                <div className="tit-logo d-flex flex-column">
                                    <div className="p-0 text-uppercase text-start">bmw</div>
                                    <div className="p-0 text-uppercase">motorrad</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            
                <ul className="nav nav-underline">
                    <li className="nav-item">
                        <a className="nav-link" href="#">hogar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">modelos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">personalización</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">equipo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">servicio</a>
                    </li>
                </ul>

                <div className='container-btn'>

                    <button type="button" className="btn btn-login">
                        <img className="login" src="/login.svg"></img>
                    </button>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span> 
                    </button>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">HOGAR</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">MODELOS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">PERSONALIZACIÓN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">EQUIPO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">SERVICIO</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    

                </div>
                
            </div>
        </nav>

    )
}

export {Header}