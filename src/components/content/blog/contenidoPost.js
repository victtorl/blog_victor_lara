import {useEffect,React} from 'react';
import { useSelector } from 'react-redux';
import { getAllPostsFirebase } from '../../../assets/firebase/firebase';
import { useParams } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Link } from 'react-router-dom';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';



import "./contenidoPost.scss";

const ContenidoPost = () => {

    useEffect(() => {
        getAllPostsFirebase()
      }, []);
      const posts = useSelector((state) => state.posts)
    //   let fraseconguiones=title.split(' ').join('_')

    const {tituloBlog}=useParams()

    let titulo ='Como renderizar componentes bien chevere'

    let parrafoBlog='A veces nos enfrentamos al problema donde debemos usar un dato que se obtuvo en el componente hijo y necesitamos renderizarlo en el componente padre, por lo general el metodo comun es pasar los datos en el sentido de padre a hijo, para poder hacerlo en el sentido contrario (hijo a padre) usamos la estrategia de pasar una funcion como parametro la cual contendra como parametro el dato del hijo que queremos renderizar en el padre.'+ 
    'En el componente padre donde se renderiza el componente hijo declaramos una función la cual pasaremos como props, en el componente hijo ejecutamos la función que extrajimos de los props y le pasamos como parámetro el dato del hijo el cual será seteado en el estado del padre y este podrá renderizarlo.'+
    'A veces nos enfrentamos al problema donde debemos usar un dato que se obtuvo en el componente hijo y necesitamos renderizarlo en el componente padre, por lo general el metodo comun es pasar los datos en el sentido de padre a hijo, para poder hacerlo en el sentido contrario (hijo a padre) usamos la estrategia de pasar una funcion como parametro la cual contendra como parametro el dato del hijo que queremos renderizar en el padre.'+ 
    +'En el componente padre donde se renderiza el componente hijo declaramos una función la cual pasaremos como props, en el componente hijo ejecutamos la función que extrajimos de los props y le pasamos como parámetro el dato del hijo el cual será seteado en el estado del padre y este podrá renderizarlo.'


    const codeString = `import React from 'react';
import { useState } from 'react';


const SonComponent=(props)=>{
        let datohijo='Soy un dato del hijo'
    let {datof}=props
    function EjecutarFunciondeprops(){
        datof(datohijo)
    }
    return(
        <div>
        <p>Soy el componente hijo y este es el dato:</p>
        <button onClick={EjecutarFunciondeprops}>traer datos del hijo</button>
        </div>
    )
}

const FatherComponent = () => {
    const [frase,SetFrase] = useState('Aqui vendra el dato hijo');
    function datohijofunction(datohijo){
        SetFrase(datohijo)
    }
    return (
        <div>
                <h1>Hola soy el componente Padre</h1>
                <SonComponent datof={datohijofunction}/>
                <h1>{frase}</h1>
        </div>
    );
}

export default FatherComponent`;
    
    return (
        <div>

            <section id='contenido_post'>
                
                   <h2 className='contenido_post_title'>{titulo}</h2>

                    
                    <div className='contenido_post_codigo'>
                        <SyntaxHighlighter language="javascript" style={atomOneDark} className="codigo" >
                        {codeString}
                        </SyntaxHighlighter>
                        <p className='contenido_post_parrafo'>{parrafoBlog}</p>
                        
                        <img src="https://png.vector.me/files/images/8/3/832406/awesome_face_meme_preview.jpg" alt="" />
                    </div>

                    <div className='contenido_post_footer'>
                        

                        <p>Mas entradas</p> 
                        
                        <div className='container_more_post'>
                            
                        {
                            posts.map((u)=>(
                            <div className='more_post'>
                                <Link to={`/${u.title.split(' ').join('_')}`} className="linker" ><span>{u.title}</span></Link>
                            </div>
                            ))
                        }
                       
                        </div>
                    </div>
                
            </section>
                   
           
            
        </div>
    );
}

export default ContenidoPost;
