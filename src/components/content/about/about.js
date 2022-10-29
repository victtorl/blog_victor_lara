import React from 'react';
import './about.scss'

const About = () => {
    return (
        <div id="about">
            <div>
                <p>Soy Bachiller de la carrera de Ingenieria de software de UNMSM, he trabajado con PHP Javascript,
                    he decantado mas por el lenguaje de la web Javascript, actualmente estoy usando React para el desarrollo de mis proyectos
                    pero tambien es mi deseo deasrrollar con lenguajes de escritorio como Java o C#, he hecho pequeños modulos en Spring Boot, asimismo las bases de datos con las que he trabajado
                    son SQL ,MySQL, Firebase, MongoDB, adicional a esto trato de mejorar mi maquetacion y diseños usando preprocesadores como Sass.
                    <br/>
                    He decidido crear este blog para aportar a la comunidad con los concimientos que voy adquiriendo a medida que mejoro como desarrollador.
                </p>

                <div className='caja'>
                        <div className='image'>

                        </div>
                </div>
            </div>
        </div>
    );
}

export default About;
