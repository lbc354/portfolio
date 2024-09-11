import '../css/styles.css';

export function Academic() {
    return (
        <div className='academicRecord'>
            <h2>Histórico Acadêmico</h2>
            <ul>
                <li>
                    <p className='year'>2021</p>
                    <p>Início da graduação em Análise e Desenvolvimento de Sistemas e finalização do curso de inglês</p>
                </li>
                <li>
                    <p className='year'>2022</p>
                    <p>Certificado de nível B2 do Quadro Europeu Comum de Referência para Línguas nas quatro habilidades linguísticas: leitura, escrita, compreensão auditiva e produção oral (<a href="https://www.cambridgeenglish.org/br/">Cambridge English</a>)</p>
                </li>
                <li>
                    <p className='year'>2023</p>
                    <p>Início e fim na Projetos Consultoria Integrada e finalização da graduação</p>
                </li>
                <li>
                    <p className='year'>2024</p>
                    <p>Início das pós-graduações de Full-Stack e DevOps e início na ARCX</p>
                </li>
            </ul>
        </div>
    )
}