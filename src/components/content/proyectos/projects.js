import {React,useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { getAllPostsFirebase } from "../../../assets/firebase/firebase";
import proys from './projects.json'
import "./Projects.scss";

function Card(props){
    const {tags,date,title,description,urlproject}=props;
    
    function openPost(){
      console.log('presionó card');
    }
    return(
            <div className="card content border-info mb-3" style={{maxWidth: '20rem'}} onClick={openPost}>
              
              <div className="card-header">
              <div className="card-title"><strong>{title}</strong></div>
              
            </div>
            
            <div className="card-body">
              <p className="card-text resumen">{description.substring(0,60)}...</p>
              <p>{date}</p>
              <p className="card-text tags">{tags}</p>
            </div>
            
             <a class="btn btn-secondary  " href={urlproject} target="_blank">Go project</a>
            </div>
          )
  }
  


const Projects = () => {

         

  const [flag,setFlag]=useState(0)

  const [arrayproys,setArrayproys]=useState(proys)

  const filtrar=(termino) => {
    const arrayProysRes=proys.filter((u)=>u.title.toLowerCase().includes(termino))
     setArrayproys(arrayProysRes)
  }

const handlechangeInputSearch=(e) => {
      filtrar(e.target.value)
      setFlag(1)
}


  function renderAll(){
      return(
          proys.map((u,id) => (
            <Card key={id} tags={u.tags} date={u.date} title={u.title} urlproject={u.urlproject} description={u.description} />
          ))
        )
  }
  function renderFilter(){
    return(
      arrayproys.map((u,id) => (
        <Card key={id} tags={u.tags} date={u.date} title={u.title} urlproject={u.urlproject} description={u.description} />
      ))
    )
  }

    return (
        <div>
        <section id="pageproy">
  
          <div className="busqueda">
             <p>Projects</p>
              <input className="form-control me-sm-2 " type="text" placeholder="Search in projects" onChange={handlechangeInputSearch} />
          </div>
          <div className="contenido ">
            {
              flag==0?renderAll():renderFilter()
            }
          </div>
        </section>
      </div>
    );
}

export default Projects;
