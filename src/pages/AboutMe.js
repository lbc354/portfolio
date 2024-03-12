import '../css/AboutMe.css';
import picture from '../img/_eu_.jpg';

export function AboutMe() {
    return (
        <div className='container'>
            <div className='picture'>
                <img src={picture} alt="my-picture" />
            </div>
            <div className='aboutMe'>
                <h2>Sobre mim</h2>
                <p>Olá! Meu nome é Lucas, tenho 19 anos e sou desenvolvedor. Gosto de ouvir música e assistir filmes. Desde mais jovem eu tinha interesse por tecnologia. Entrei na área da TI ainda sem uma visão clara do que queria fazer e se era isso que eu ia gostar. Aquelas dúvidas que muitos têm. E felizmente hoje não me sinto nem um pouco arrependido da escolha que tomei. Sou feliz na área e mais feliz ainda por conseguir fazer pessoas sorrirem com o que faço.</p>
            </div>
        </div>
    )
}