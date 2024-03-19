import '../css/Header.css';
import github_icon from '../img/github-icon.png';
import linkedin_icon from '../img/linkedin-icon.png';

export function Header() {
    return (
        <div className="header">
            <div className="name">
                <h1>Lucas Barros</h1>
            </div>
            <div className="socialMedia">
                <ul>
                    <li>
                        <a href="https://github.com/lbc354" target='_blank'>
                            <img src={github_icon} alt="github-icon" />
                            <span>GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/lucas-barros-carregozi/" target='_blank'>
                            <img src={linkedin_icon} alt="linkedin-icon" />
                            <span>LinkedIn</span>
                        </a>
                        </li>
                </ul>
            </div>
        </div>
    )
}