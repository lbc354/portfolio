import '../css/Academic.css';

export function Academic() {
    return (
        <div className='academicRecord'>
            <h2>Histórico Acadêmico</h2>
            <ul>
                <li>
                    <p className='year'>2021</p>
                    <p>Início da graduação em Análise e Desenvolvimento de Sistemas</p>
                </li>
                <li>
                    <p className='year'>2023</p>
                    <p>Início e fim na Projetos Consultoria Integrada e último ano da graduação</p>
                </li>
                <li>
                    <p className='year'>2024</p>
                    <p>Início da pós-graduação em Full-Stack</p>
                </li>
            </ul>
        </div>
    )
}