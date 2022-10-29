import {React, useRef,useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './contact.scss'

const Contact = () => {

    let textInput = useRef('alohaaaaaaaaaa');

    const [correo,setCorreo]=useState('victorlara.cod@gmail.com')
    const [github,setGithub]=useState('https://github.com/victtorl')

    const xopiar = async copyMe => {
        try {
          await navigator.clipboard.writeText(copyMe);
          
          toast.success('Correo copiado al portapapeles!')
        } catch (err) {
          
        }
      };

      const xopiargh = async copyMe => {
        try {
          await navigator.clipboard.writeText(copyMe);
          toast.success('Hacia git!')
        } catch (err) {
          
        }
      };   


    return (
        <div id='contact'>
             <Toaster />
            <div className='caja'>
                    <div className='datos'>
                        <label>Correo:</label>
                        <p>{correo}</p>
                        <button onClick={() => xopiar(correo)}>copiar </button>
                    </div>
            </div>
            <div className='caja'>
                    <div className='datos'>
                        <label>Github:</label>
                        <p>{github}</p>
                        <a href="https://github.com/victtorl"><button onClick={() => xopiargh(github)}>copiar </button></a>
                    </div>
            </div>
            <div className='caja'>
                    <div className='datos'>
                        <img src="https://media.tenor.com/7x7A0eYFB-MAAAAj/capoo-bugcat.gif" alt="" />
                    </div>
            </div>

        </div>
    );
}

export default Contact;
