import React, { useRef, useState } from 'react'
import { UserData } from '../../App'
import './style.scss'
import { REGEX } from '../../consts/regex' 

type FormProps = {
    handleCreate:(newUser:UserData)=>void
}

const INITIAL_USER_VALUES = {
    name:'',
    email:'',
    url:'',
    comment: '',
    gender:null
}

export default function Form({handleCreate}:FormProps) {
    const [user,setUser] = useState<UserData>(INITIAL_USER_VALUES)
    const [errorInputs,setErrorInputs] = useState({
                                        name:false,
                                        email:false,
                                        url:false,
                                        gender:false
                                    })

    const nameInput = useRef<HTMLInputElement>(null)
    const emailInput = useRef<HTMLInputElement>(null)
    const urlInput = useRef<HTMLInputElement>(null)
    const commentInput = useRef<HTMLTextAreaElement>(null)

    const handleBlurChange = (value:any, property:string) => {
        validateByProperty(value, property)
        setUser({...user, [property]:value})
    }

    const validateByRegex = (value:string, regex:RegExp):Boolean =>{
        return regex.test(value)
    }

    const validateByProperty  = (value:any, property:string) => {
        switch(property){
            case 'name': 
                const hasError = (!value || value.replaceAll(' ','').length <= 0 || !validateByRegex(value,REGEX.name))
                setErrorInputs({...errorInputs, name:hasError})
                return 

            case 'email': 
                setErrorInputs({...errorInputs, email:!validateByRegex(value,REGEX.email)})
                return 

            case 'url': 
                setErrorInputs({...errorInputs, url:!validateByRegex(value,REGEX.url)})
                return 

            case 'gender':
                setErrorInputs({...errorInputs, gender:value === null})
                return 
            default:
                return 
        }
    }

    const clearForms = () => {
        nameInput.current!.value = ''
        emailInput.current!.value = ''
        urlInput.current!.value = ''
        commentInput.current!.value = ''
        setUser(INITIAL_USER_VALUES)
    }
    
    const handleSubmit = (event:any) =>{
        event.preventDefault();
        setErrorInputs({...errorInputs, gender:user.gender===null})
        if(errorInputs.email || errorInputs.name || errorInputs.url || user.gender === null) 
            return
        
        handleCreate(user)
        clearForms()
    }

    return (
        <form className='form-content' onSubmit={handleSubmit}>
            <h1 className='title'>Form</h1>
            <div className='col-form'>
                <label htmlFor='name-inpt'>Nome</label>
                <input id='name-inpt' required className={`${errorInputs.name && 'error'}`}
                onBlur={({target})=>handleBlurChange(target.value,'name')} ref={nameInput} />
            </div>

            <div className='col-form'>
                <label htmlFor='email-inpt'>E-mail</label>
                <input id='email-inpt' type='email' required className={`${errorInputs.email && 'error'}`}
                onBlur={({target})=>handleBlurChange(target.value,'email')} ref={emailInput}/>
            </div>

            <div className='col-form'>
                <label htmlFor='site-inpt'>Site</label>
                <input id='site-inpt' type='url' required className={`${errorInputs.url && 'error'}`}
                onBlur={({target})=>handleBlurChange(target.value,'url')} ref={urlInput}/>
            </div>

            <div className='col-form'>
                <label htmlFor='comment-inpt'>Comment</label>
                <textarea id='comment-inpt' onBlur={({target})=>handleBlurChange(target.value,'comment')} ref={commentInput}/>
            </div>

            <div className='col-form'>
                <label htmlFor='name-inpt'>Genero</label>
                <div className='row-form'>
                    <div className={`radio-container ${errorInputs.gender && 'error'}`}>
                        <input 
                            type="radio" 
                            name='gender' 
                            id='male' 
                            checked={user.gender==='MALE'} 
                            onClick={()=>handleBlurChange('MALE','gender')}
                        />
                        <label htmlFor='male'>Masculino</label>
                    </div>
                    <div className={`radio-container ${errorInputs.gender && 'error'}`}>
                        <input 
                            type="radio" 
                            name='gender' 
                            id='female' 
                            checked={user.gender==='FEMALE'} 
                            onClick={()=>handleBlurChange('FEMALE','gender')}
                        />
                        <label htmlFor='female'>Feminino</label>
                    </div>
                    <div className={`radio-container ${errorInputs.gender && 'error'}`}>
                        <input 
                            type="radio" 
                            name='gender' 
                            id='other' 
                            checked={user.gender==='OTHER'} 
                            onClick={()=>handleBlurChange('OTHER','gender')}
                        />
                        <label htmlFor='other'>Outro</label>
                    </div>
                </div>
            </div>

            <footer className='footer-form'>
                <button>Confirmar</button>
            </footer>
        </form>
    )
}
