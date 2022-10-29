import { useEffect, React,useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllPostsFirebase, getPostporId } from '../../../assets/firebase/firebase';
import { useParams } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Link } from 'react-router-dom';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';



import "./contenidoPost.scss";

const ContenidoPost = () => {

    const { idPost } = useParams()

    const [datospost, setdatospost] = useState({
        titulo:'',
        contenido:'',
        codigo:''
    });

    useEffect(() => {
        getAllPostsFirebase()
        let prom = new Promise(res => {
            res(getPostporId(idPost.split('$$')[1]))
        })
        prom.then(res => {
            setdatospost({
                titulo:res.title,
                contenido:res.contenidos,
                codigo:res.codigo
            })
        })
        prom.catch(rs => console.log(rs))
    }, []);
    const posts = useSelector((state) => state.posts)
    //   let fraseconguiones=title.split(' ').join('_')




    function cambiarcontenido(id){
        getAllPostsFirebase()
        let prom = new Promise(res => {
            res(getPostporId(id))
        })
        prom.then(res => {
            setdatospost({
                titulo:res.title,
                contenido:res.contenidos,
                codigo:res.codigo
            })
        })
        prom.catch(rs => console.log(rs))

    }

    return (
        <div>
            <section id='contenido_post'>
                <h2 className='contenido_post_title'>{datospost.titulo}</h2>
                <div className='contenido_post_codigo'>
                    <SyntaxHighlighter language="javascript" style={atomOneDark} className="codigo" >
                        {datospost.codigo}
                    </SyntaxHighlighter>
                    <p className='contenido_post_parrafo'>{datospost.contenido}</p>
                    <img src="https://png.vector.me/files/images/8/3/832406/awesome_face_meme_preview.jpg" alt="" />
                </div>
                <div className='contenido_post_footer'>
                    <p>Mas entradas</p>

                    <div className='container_more_post'>
                        {
                            posts.map((u) => (
                                <div className='more_post'>
                                    <Link to={`/${u._document.data.value.mapValue.fields.title.stringValue.split(' ').join('-')+'$$'+u._key.path.segments[6]}`} className="linker" onClick={()=>cambiarcontenido(u._key.path.segments[6])} ><span>{u._document.data.value.mapValue.fields.title.stringValue}</span></Link>
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
