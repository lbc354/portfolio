import '../css/styles.css';
import english_icon from '../img/english-icon.png';
import java_icon from '../img/java-icon.png';
import django_icon from '../img/django-icon.webp'
import spring_icon from '../img/spring-icon.png';
import html_icon from '../img/html-icon.png';
import css_icon from '../img/css-icon.png';
import js_icon from '../img/js-icon.png';
import reactjs_icon from '../img/reactjs-icon.png';
import mongodb_icon from '../img/mongodb-icon.png';
import mysql_icon from '../img/mysql-icon.png';
import github_icon from '../img/github-icon.png'
import scrumban_icon from '../img/scrumban-icon.png';

export function Skills() {
    return (
        <div className='skills'>
            <h2>Competências</h2>
            <ul>
                <li><img src={english_icon} alt="english-icon" />Inglês</li>
                <li><img src={java_icon} alt="java-icon" />Java</li>
                <li><img src={spring_icon} alt="spring-icon" />Spring</li>
                <li><img src={django_icon} alt="django-icon" />Django</li>
                <li><img src={html_icon} alt="html-icon" />HTML</li>
                <li><img src={css_icon} alt="css-icon" />CSS</li>
                <li><img src={js_icon} alt="javascript-icon" />JavaScript</li>
                <li><img src={reactjs_icon} alt="reactjs-icon" />ReactJS</li>
                <li><img src={mongodb_icon} alt="mongodb-icon" />MongoDB</li>
                <li><img src={mysql_icon} alt="mysql-icon" />MySQL</li>
                <li><img src={github_icon} alt="github-icon" />GitHub</li>
                <li><img src={scrumban_icon} alt="scrumban-icon" />Scrumban</li>
            </ul>
        </div>
    )
}