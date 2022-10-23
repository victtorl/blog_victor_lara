import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./matematicas.scss";
import { getAllPostsFirebase, leerDatos } from "../../../assets/firebase/firebase";



let matematicas = [
  {
    titulo: "el hombre que calculaba",
    contenido:
      "Donde se narra la singular aventura de los treinta y cinco camellos que\n" +
      "tenían que ser repartidos entre tres hermanos árabes. Cómo Beremiz \n" +
      "Samir, el Hombre que Calculaba, efectuó un reparto que parecía \n" +
      "imposible, dejando plenamente satisfechos a los tres querellantes. El \n" +
      "lucro inesperado que obtuvimos con la transacción.",
  },
  {
    titulo: "el hombre que calculaba",
    contenido:
      "Donde se narra la singular aventura de los treinta y cinco camellos que\n" +
      "tenían que ser repartidos entre tres hermanos árabes. Cómo Beremiz \n" +
      "Samir, el Hombre que Calculaba, efectuó un reparto que parecía \n" +
      "imposible, dejando plenamente satisfechos a los tres querellantes. El \n" +
      "lucro inesperado que obtuvimos con la transacción.",
  },
  {
    titulo: "el hombre que calculaba",
    contenido: "<b>*Hola mundo*</b>",
  },
];


var contentString=(
  <div className="contenedor">
      {matematicas.map((u)=>(
          <div className="matematicas">
          <div className="titulo">
            <p>{u.titulo}</p>
          </div>
          <div className="contenido">{u.contenido}</div>
          <div className="imagen">
            <img></img>
          </div>
          <div className="footer"></div>
        </div>
        
        ))}
  </div>
)


const contenido= <div className="contenedor">
{matematicas.map((u)=>(
    <div className="matematicas">
    <div className="titulo">
      <p>{u.titulo}</p>
    </div>
    <div className="contenido">
      <p>{u.contenido}</p>
      <p>{u.contenido}</p>
    </div>
    <div className="imagen">
      <img></img>
    </div>
    <div className="footer"></div>

  </div>
  
))}
</div>

function Template({dataPosts}){


    return(
      <div className="contenedor">
      {dataPosts.map((u)=>(
          <div className="matematicas">
          <div className="titulo">
            <p>{u.title}</p>
          </div>
          <div className="contenido">
            <p>{u.content}</p>
          </div>
          <div className="imagen">
            <img></img>
          </div>
          <div className="footer"></div>
        </div>
      ))}
      </div>
  )
}

const Matematicas = () => {
  
useEffect(() => {
 getAllPostsFirebase()
}, []);

const dataPosts = useSelector((state) => state.posts)

  return (
            <Template dataPosts={dataPosts} />
  )
};

export default Matematicas;
