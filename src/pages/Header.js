import '../css/Header.css';
import github_icon from '../img/github-icon.png';
import linkedin_icon from '../img/linkedin-icon.png';

// acrescentar ícones de redes sociais

export function Header() {
    return (
        <div className="header">
            <h1>Lucas Barros</h1>
            <ul>
                <li>
                    <a href="https://github.com/lbc354" target='_blank'>
                        <img src={github_icon} alt="github-icon" />
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lucas-barros-carregozi/" target='_blank'>
                        <img src={linkedin_icon} alt="linkedin-icon" />
                        LinkedIn
                    </a>
                    </li>
            </ul>
        </div>
    )
}