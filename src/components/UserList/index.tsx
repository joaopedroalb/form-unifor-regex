import React, { useState } from 'react'
import { UserData } from '../../App'
import { REGEX } from '../../consts/regex'
import './style.scss'

type UserListProps = {
    list: UserData[]
}

export default function UserList({list}:UserListProps) {
    const [filter,setFilter] = useState('')

    const handleChange = (value:string) => {
        if(value==='' || REGEX.name.test(value))
            setFilter(value)
    }

    return (
        <div className='list-bg'>
            <div className='row-search'>
                <input type='text' onChange={({target})=>handleChange(target.value)} value={filter}/>
            </div>
            <div className='list-container'>
                {
                    list.filter(x=>x.name.toLowerCase().includes(filter.toLocaleLowerCase())).map(user=>{
                        return(
                            <div className='card'>
                                <div className='row'>
                                    <h1>{user.name}</h1>
                                    <h2>{user.gender}</h2>
                                </div>
                                <div className='col'>
                                    <p>{user.email}</p>
                                    <a href={user.url}>{user.url}</a>
                                </div>
                                <article className='custom-scrollbar'>{user.comment}</article>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
