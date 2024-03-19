import '../css/MyProjects.css'
import { useEffect, useState } from "react";

export function MyProjects() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/lbc354/repos')
            .then(response => response.json())
            .then(data => setRepos(data))
    }, [])

    return (
        <section className='projects'>
            <h2>Projetos</h2>
            <ul>
                {repos.map((repository, index) => {
                    return (
                        <li key={index}>
                            <a href={repository.html_url} target="_blank">
                                <p>{repository.name}</p>
                            </a>
                            {/* testing index */}
                            {/* <span>{index}</span> */}
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}