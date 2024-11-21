import { useEffect } from "react"
import { useForm } from "react-hook-form"


function AddEdit( {user, onSave}) {
    const {handleSubmit, register, reset}=useForm()

    useEffect(()=>{
      if (user){
        reset(user)
      }else{
        reset({first_name:"",last_name:"",email: '',password:'',birthday:''})
      }
    },[user])

    const onSubmit =(dataForm)=>{
      if(user){
        onSave(dataForm, user.id)
      }else{
        onSave(dataForm)
      }
    }

  return (
    <div>
      <h2>{user ? 'Actualizar':'Registro'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label >Nombre</label>
            <input type="text" {...register('first_name')}/>
        </div>
        <div>
            <label htmlFor="">Apellido</label>
            <input type="text" {...register('last_name')}/>
        </div>
        <div>
            <label htmlFor="">Email</label>
            <input type="email" {...register('email')}/>
        </div>
        <div>
            <label htmlFor="">Contrasena</label>
            <input type="Password" {...register('password')}/>
        </div>
        <div>
            <label htmlFor="">Cumpleanos</label>
            <input type="date" {...register('birthday')}/>
        </div>

        <button type="submit">{user ? 'Actulizar':'Registrar'}</button>
      </form>
    </div>
  )
}

export default AddEdit
