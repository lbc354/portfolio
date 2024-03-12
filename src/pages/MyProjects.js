// vídeo: https://youtu.be/Dc4cMIHSOeI?si=gY1OrRWbzqalk9iN
// api github: https://api.github.com/users/lbc354
// github repos: https://api.github.com/users/lbc354/repos

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
                {repos.map(repository => {
                    return (
                        <li>
                            <a href={repository.html_url} target="_blank">
                                <h3>{repository.name}</h3>
                            </a>
                            {/* <p>{repository.description}</p> */}
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}