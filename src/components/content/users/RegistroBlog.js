import { React, useRef, useState } from 'react';
import { deletePostById, editPostporId, getAllLinksImagesStorage, getAllPostsFirebase, getLastImagesStorage, getPostporId, guardarBlog, leerDatos, uploadImage } from '../../../assets/firebase/firebase';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './registroblog.scss'
import toast, { Toaster } from 'react-hot-toast';
var moment = require('moment');



function UploadImage(props) {
    const { hijo_to_PadreSendFuntion_with_Props } = props

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        // setIsSelected(true);
    };

    const handleUploadLinkStore = (e) => {
        e.preventDefault()


        const promesa = uploadImage(selectedFile, selectedFile.name)
            .then(
                async () => {
                    hijo_to_PadreSendFuntion_with_Props(await getLastImagesStorage(selectedFile.name), moment().format("DD/MM/YYYY"))
                }
            )
            .catch(err => console.log(err))
        toast.promise(promesa, {
            loading: 'Loading',
            success: `Successfully saved`,
            error: 'Error when fetching',
        })


    }


    return (
        <div className='uploadImage'>
            <input className='form-control' type="file" name="file" onChange={changeHandler} accept="image/*" />
            <button className="btn btn-warning" onClick={handleUploadLinkStore}>Charge image</button>
            <div><Toaster /></div>
        </div>
    )

}


//componente principal
const RegistroBlog = () => {
    const [formBlog, setformBlog] = useState({
        title: '',
        tag: '',
        tags: [],
        date: '',
        urlimage: '',
        contenido:'',
        contenidos:[],
        codigo:'',
    })
    const handleChange = (event) => {
        setformBlog({ ...formBlog, [event.target.name]: event.target.value });

    }

    //tags
    const myImputTagref = useRef(null);
    const handleSpace = (event) => {
        if (event.code === 'Space') {
            formBlog.tags.push(formBlog.tag)
            // setformBlog({ ...formBlog, [formBlog.tag]: '' });
            myImputTagref.current.value = ''
        }
    }
    function clearTags() {
        setformBlog({ ...formBlog, ['tags']: [] });
    }
    //text
    const myInputTextref = useRef(null);
    const handleEnter = (event) => {
        if (event.code === 'Enter') {
            formBlog.contenidos.push(formBlog.contenido)
             myInputTextref.current.value = ''
        }
    }
    // code
    const myInputTextrefcode = useRef(null);
    const handleEnterCode = (event) => {
        if (event.code === 'Enter') {
            formBlog.codigos.push(formBlog.codigo)
            myInputTextrefcode.current.value = ''
        }
    }
    function clearText() {
        setformBlog({ ...formBlog, ['contenidos']: [] });
    }


    function url_to_props_in_Father(url, date) {
        setformBlog({ ...formBlog, ['urlimage']: url, ['date']: date });

    }

    function sendDataToSave() {

        if (formBlog.title !== '' && formBlog.date !== '' && formBlog.tags !== []  && formBlog.codigo !== '') {
            guardarBlog(formBlog.title, formBlog.tags, formBlog.date, formBlog.urlimage,formBlog.contenidos,formBlog.codigo)
            setformBlog({
                title: '',
                tag: '',
                tags: [],
                date: '',
                urlimage: '',
                contenido:'',
                contenidos:[],
                codigo:'',
            })
            alert('datos guardados con exito')
        } else {
            alert('to complete all fields')
        }
    }
    //comboCategoria
    return (
        <div id='registrar_post'>
            <form>
                <p className='titleform'>Add New Post</p>
                <label>Title</label>
                <input type="text" className='form-control' name='title' value={formBlog.title} onChange={handleChange} required />
                {/* blog */}
                <label>Content Blog</label>
                <textarea ref={myInputTextref} className="form-control"  rows={7} name='contenido' value={formBlog.contenido} onChange={handleChange} onKeyUp={handleEnter} placeholder="Write a paragraph" />
               {/* code */}
                <label>Content Code</label>
                <textarea ref={myInputTextrefcode} className="form-control"  rows={7} name='codigo' value={formBlog.codigo} onChange={handleChange}  placeholder="Write a code" />
               {/* tags */}
                <label>Tags:{formBlog.tags.map((u, i) => <h6 className='tags' key={i}>{u}</h6>)}</label>
                <div className='form_div_tags'>
                 <input ref={myImputTagref} className="form-control" rows={3} name='tag' value={formBlog.content} onChange={handleChange} onKeyPress={handleSpace} placeholder="Write tags || Space to save"/>
                 <button type="button" className="btn btn-warning" onClick={() => clearTags()} >Clear</button>
                </div>
               {/* image */}
                 <label>Upload image</label>
                 <UploadImage hijo_to_PadreSendFuntion_with_Props={url_to_props_in_Father} />
                 <button  type="button" className="btnguardarpost btn btn-success" onClick={() => sendDataToSave()} >Guardar Post</button>
            </form>
            <div className='parrafoPostSalida'>
                <h6>{formBlog.title}</h6>
                <p>{formBlog.contenidos.map((u, i) => <p key={i}>{u}</p>)}</p>
            </div>
            <div className='parrafoPostSalida'>
                {/* <h6>{formBlog.title}</h6> */}
                {/* <p>{formBlog.codigos.map((u, i) => <p key={i}>{u}</p>)}</p> */}
                <SyntaxHighlighter language="javascript" style={atomOneDark} className="codigo" >
                {formBlog.codigo}
                </SyntaxHighlighter>
            </div>
        </div>
        
    );
}

export default RegistroBlog;
