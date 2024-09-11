import '../css/styles.css';

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
                            <i class="fa-brands fa-github"></i>
                            <span>GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/lucas-barros-carregozi/" target='_blank'>
                            <i class="fa-brands fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                        </li>
                </ul>
            </div>
        </div>
    )
}