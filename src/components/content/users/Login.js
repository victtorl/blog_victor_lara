
import { async } from '@firebase/util';
import React, { useState } from 'react';
import { iniciaSesion } from '../../../assets/firebase/auth';
import './Login.scss'
import RegistroBlog from './RegistroBlog';

const Login = () => {

const [flaglog, setFlaglog] = useState(false);    
const [formdata,setFormdata]=useState(
        {
            nombre:'',
            contra:''
        }
    )

function handleChangename(e){
    setFormdata({ ...formdata, [e.target.name]: e.target.value });

}
function handleChangepass(e){
    setFormdata({ ...formdata, [e.target.name]: e.target.value });

}     

const  submit=(evt)=>{

      ///excelelnte un codigo mas limpio para declarar una promesa y esta de como retorno una respuesta y esta respuesta pueda ser usada en el then
    const nuevo = new Promise(res => {
        res(iniciaSesion(formdata.nombre, formdata.contra))
    })
    nuevo.then(
        resu => setFlaglog(resu)
    )
        .catch((err => console.log(err))) 
    
    evt.preventDefatult()
}

function LoginComponent(){
    return(
        <div id='login'>
             <div className='register'>
                <h2>Login</h2>
                <form >
                    <input name='nombre' value={formdata.nombre}  type='text' placeholder='User' autoComplete="new-text" className='user' onChange={handleChangename} />
                    <input  name='contra' value={formdata.contra} type='password' placeholder='Password' autoComplete="new-text" className='pass' onChange={handleChangepass}/>
                    {/* <input type='submit' placeholder='Password' value='REGISTRARSE' className='enviar' onClick={submit}/> */}
                </form>
                    <button onClick={submit} >send</button>
             </div>
        </div>
        )
}



  

    return (
        !flaglog?LoginComponent():<RegistroBlog/>
    );
}

export default Login;
