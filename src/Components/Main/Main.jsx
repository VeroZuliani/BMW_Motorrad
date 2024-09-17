import './Main.css'
import { Hogar } from "../Hogar/Hogar"
import { Footer } from '../Footer/Footer'

const Main= () => {
    return(
        <main>
            <section className="main">
                <Hogar/>
                <Footer/>
            </section>
            
        </main>
    )
}

export {Main}