import React from 'react'

function UserCard({user,openEdit, deleteUser}) {
  return (
    <div className='card'>
        <h3 className='card__name'>{user?.name}{user?.last_name}</h3>
        <div className='card__info'>
            <span>
                <span>Correo</span>
                {user?.email}
            </span>
            <span>
                <span>Cumpleanhos 🎁</span>
                {user?.birthday}
            </span>
        </div>
        <div className='card__btns'>
            <button onClick={()=>deleteUser(user?.id)}>🗑️</button>
            <button onClick={()=> openEdit(user)}>📝</button>
        </div>
    </div>
  )
}

export default UserCard
