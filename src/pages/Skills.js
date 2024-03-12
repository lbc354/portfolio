import '../css/Skills.css';
import english_icon from '../img/english-icon.png';
import java_icon from '../img/java-icon.png';
import csharp_icon from '../img/c-sharp-icon.png';
import html_icon from '../img/html-icon.png';
import css_icon from '../img/css-icon.png';
import js_icon from '../img/js-icon.png';
import spring_icon from '../img/spring-icon.png';
import reactjs_icon from '../img/reactjs-icon.png';
import nodejs_icon from '../img/nodejs-icon.png';
import mongodb_icon from '../img/mongodb-icon.png';
import mysql_icon from '../img/mysql-icon.png';
import scrumban_icon from '../img/scrumban-icon.png';

export function Skills() {
    return (
        <div className='skills'>
            <h2>Competências</h2>
            <ul>
                <li><img src={english_icon} alt="english-icon" />Inglês</li>
                <li><img src={java_icon} alt="english-icon" />Java</li>
                <li><img src={csharp_icon} alt="english-icon" />C#</li>
                <li><img src={html_icon} alt="english-icon" />HTML</li>
                <li><img src={css_icon} alt="english-icon" />CSS</li>
                <li><img src={js_icon} alt="english-icon" />JavaScript</li>
                <li><img src={spring_icon} alt="english-icon" />Spring</li>
                <li><img src={reactjs_icon} alt="english-icon" />ReactJS</li>
                <li><img src={nodejs_icon} alt="english-icon" />NodeJS</li>
                <li><img src={mongodb_icon} alt="english-icon" />MongoDB</li>
                <li><img src={mysql_icon} alt="english-icon" />MySQL</li>
                <li><img src={scrumban_icon} alt="english-icon" />Scrumban</li>
            </ul>
        </div>
    )
}