import {React,useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPostsFirebase } from "../../../assets/firebase/firebase";
import "./Home.scss";

function Cards(props){
  const {tags,date,title,urlimage,contenidos}=props;


let titletoarray=title.split(' ').join('_')
 

let frase='la vida es bella'

let fraseconguiones=title.split(' ').join('_')


  
  function openPost(){
    //obtener data de un post en especifico
    // renderizar post en espacio
  

    console.log(fraseconguiones)
  }
  return(
    
          <div className="card border-info mb-3" style={{maxWidth: '20rem'}} onClick={openPost}>
            <div className="card-header">
              <div className="card-title"><strong>{title}</strong></div>
              
            </div>
            
            <div className="card-body">
              <p className="card-text resumen">{contenidos[0].substring(0,60)}...</p>
              <p>{date}</p>
              <p className="card-text tags">{tags}</p>
            </div>
            <button><Link to={`/${fraseconguiones}`} className="link" >go to post</Link></button>
          </div>
        )
}


const Home = () => {

  const [flag,setFlag]=useState(0);
  
  useEffect(() => {
    getAllPostsFirebase()
  }, []);
  const posts = useSelector((state) => state.posts)
  const [arrayPost,setArrayPost]=useState(posts);

  const filtrar=(termino) => {
      const arrayPostsRes=posts.filter((u)=>u.title.toLowerCase().includes(termino))
       setArrayPost(arrayPostsRes)
  }
  
  const handlechangeInputSearch=(e) => {
        filtrar(e.target.value)
        setFlag(1)
  }
  
  function rederAllpost(){
    return(
      posts.map((u,id) => (
        <Cards key={id} tags={u.tags} date={u.date} title={u.title} urlimage={u.urlimage} contenidos={u.contenidos} />
      ))
      )
  }

  function renderFilterPost(){
   return(
    arrayPost.map((u,id) => (
      <Cards key={id} tags={u.tags} date={u.date} title={u.title} urlimage={u.urlimage} contenidos={u.contenidos} />
    ))
    )
  }
  return (
    <div>
      <section id="page">

        <div className="busqueda">
           <p>Bienvenidos a mi blog</p>
            <input className="form-control me-sm-2 " type="text" placeholder="Search in posts"  onChange={handlechangeInputSearch} />
        </div>
        <div className="contenido ">
          {
            flag===0?rederAllpost():renderFilterPost()
          }
        </div>
        <div className="imagen">
            <img></img>
        </div>
      </section>
    </div>
  );
};

export default Home;
