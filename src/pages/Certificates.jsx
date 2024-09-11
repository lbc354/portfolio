import '../css/styles.css';
import cna from '../assets/myCertificates/ingles-cna.pdf';
import cambridge from '../assets/myCertificates/ingles-cambridge.pdf';
import spring from '../assets/myCertificates/spring-boot.pdf';
import fullstack from '../assets/myCertificates/fullstack-spring-react.pdf';
import django from '../assets/myCertificates/django-web-framework.pdf';
import lfc111 from '../assets/myCertificates/lfc111.pdf';
import lfc112 from '../assets/myCertificates/lfc112.pdf';

export function Certificates() {
    return (
        <div className='certificates'>
            <h2>Certificados</h2>
            <ul>
                <li>
                    <a href={cna} target="_blank" rel="noopener noreferrer">Master in English - CNA</a>
                </li>
                <li>
                    <a href={cambridge} target="_blank" rel="noopener noreferrer">First Certificate in English - Cambridge Assessment</a>
                </li>
                <li>
                    <a href={spring} target="_blank" rel="noopener noreferrer">Spring Boot - Udemy</a>
                </li>
                <li>
                    <a href={fullstack} target="_blank" rel="noopener noreferrer">FullStack Spring Boot + ReactJS - Udemy</a>
                </li>
                <li>
                    <a href={django} target="_blank" rel="noopener noreferrer">Django Web Framework - Udemy</a>
                </li>
                <li>
                    <a href={lfc111} target="_blank" rel="noopener noreferrer">LFC111 - Linux Foundation</a>
                </li>
                <li>
                    <a href={lfc112} target="_blank" rel="noopener noreferrer">LFC112 - Linux Foundation</a>
                </li>
            </ul>
        </div>
    )
}