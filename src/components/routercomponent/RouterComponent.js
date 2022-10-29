import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import About from '../content/about/about';
import ContenidoPost from '../content/blog/contenidoPost';
import Contact from '../content/contact/contact';
import Inicio from '../content/inicio/Home';
import Matematicas from '../content/matematicas/matematicas';
import Projects from '../content/proyectos/projects';
import Login from '../content/users/Login';
import RegistroBlog from '../content/users/RegistroBlog';


function Blog(){
 return <h1>Blog</h1>
}
function Java(){
    return <div><button type="button" className="btn btn-danger">Java</button></div>
}
function Javascript(){
 return <h1>Javascript</h1>
}
function Diseno(){
 return <h1>Diseño</h1>
}
function Notas(){
 return <h1>Notas</h1>
}
function Github(){
 return <h1>Git-Hub</h1>
}
// function Matematicas(){
//  return <h1>Matemáticas</h1>
// }
function Mas(){
    return <h1>Mas</h1>
}
function Contador() {
    return <h1>Contador</h1>
}
function Contacto() {
    return <h1>Contacto</h1>
}
function Certificados() {
    return <h1>Certificados</h1>
}
function Herramientas() {
    return <h1>Herramientas</h1>
}


function User(){
    return (
        <div>
            <RegistroBlog/>
        </div>
    )
}



const RouterComponent = () => {

    return (
        <div >
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/user" element={<Login/>} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/:idPost" element={<ContenidoPost/>}  />
            </Routes>
        </div>
    );
}

export default RouterComponent;
