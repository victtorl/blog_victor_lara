import {React,useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPostsFirebase } from "../../../assets/firebase/firebase";
import "./Home.scss";

function Cards(props){
  const {date,urlimage,title,contenidos,tags,idDoc}=props;

// let fraseconguiones=title.split(' ').join('_')
  function openPost(){
    //obtener data de un post en especifico
    // renderizar post en espacio 
    //  console.log(tags.map(u=>u.stringValue))
  }
  return(

          <div className="card border-info mb-3" style={{maxWidth: '20rem'}} onClick={openPost}>
            <div className="card-header">
              <div className="card-title"><strong>{title}</strong></div>
            </div>
            <div className="card-body">
              <p className="card-text resumen">{contenidos.at(0).stringValue.substring(0,80)}...</p>
              <p>{date}</p>
              <p className="card-text tags">{tags.map(u=>u.stringValue)}</p>
            </div>
            <button><Link to={`/${idDoc.split('777')[1].split(' ').join('-')+'$$'+idDoc.split('777')[0].split(' ').join('-')}`} className="link" >go to post</Link></button>
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
      const arrayPostsRes=posts.filter((u)=>u._document.data.value.mapValue.fields.title.stringValue.toLowerCase().includes(termino))
       setArrayPost(arrayPostsRes)
  }

  const handlechangeInputSearch=(e) => {
        filtrar(e.target.value)
        setFlag(1)
  }

  function rederAllpost(){
    return(
      posts.map((u,id) => (
        <Cards key={id} 
        tags={u._document.data.value.mapValue.fields.tags.arrayValue.values} 
        date={u._document.data.value.mapValue.fields.date.stringValue} 
        title={u._document.data.value.mapValue.fields.title.stringValue} 
        urlimage={u._document.data.value.mapValue.fields.urlimage.stringValue} 
        contenidos={u._document.data.value.mapValue.fields.contenidos.arrayValue.values} 
        idDoc={u._key.path.segments[6]+'777'+u._document.data.value.mapValue.fields.title.stringValue}
         />
      ))
      )
  }

  function renderFilterPost(){
   return(
    arrayPost.map((u,id) => (
      <Cards key={id} 
      tags={u._document.data.value.mapValue.fields.tags.arrayValue.values} 
      date={u._document.data.value.mapValue.fields.date.stringValue} 
      title={u._document.data.value.mapValue.fields.title.stringValue} 
      urlimage={u._document.data.value.mapValue.fields.urlimage.stringValue} 
      contenidos={u._document.data.value.mapValue.fields.contenidos.arrayValue.values} 
      idDoc={u._key.path.segments[6]+'777'+u._document.data.value.mapValue.fields.title.stringValue}
       />
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
