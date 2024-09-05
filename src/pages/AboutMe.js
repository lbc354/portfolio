import '../css/styles.css';
import picture from '../img/eu.jpg';

export function AboutMe() {
    return (
        <div className='container'>
            <div className="myInfo">
                <div className='picture'>
                    <img src={picture} alt="my-picture" />
                </div>
                <div className='aboutMe'>
                    <h2>Sobre mim</h2>
                    <p className='justify'>Olá! Meu nome é Lucas, tenho 20 anos e sou desenvolvedor. Sou conhecido por ser uma pessoa prestativa e leal. Sou formado em Análise e Desenvolvimento de Sistemas pelo CEUB e estou cursando duas pós-graduações pela Anhanguera (Full Stack e DevOps). Hoje, sou desenvolvedor Full Stack da ARCX Soluções Inteligentes, empresa especializada no desenvolvimento de software.</p>
                </div>
            </div>
        </div>
    )
}