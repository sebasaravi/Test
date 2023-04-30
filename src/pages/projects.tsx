'use client'
import React,{useEffect, useState} from "react"

const Projects = () =>{
    const[user, setUser] = useState('')
    const[repositories, setRepot] = useState([])

    const fetchUser = async () =>{
        try {
            const response = await fetch(`https://api.github.com/users/sebasaravi`)
            const data = await response.json()
            setUser(data)
            
        } catch (error) {
            console.log("Error: ", error)    
        }
        try{
            const responseRepo = await fetch(`https://api.github.com/users/sebasaravi/repos`)
            const rep = await responseRepo.json()
            setRepot(rep)
        }catch (error) {
            console.log("Error: ", error)    
        }
        
    }
    useEffect(()=>{
        fetchUser()
    },[])
    
    return(
        <article>
            {user && (
                <div>
                    <img src={user.avatar_url} alt="User"/>
                    <h4>{user.login}</h4>
                    <p>{user.bio}</p>
                </div>
            )}
            {repositories && repositories.map(repo => (
                <li key={repo.id}>
                    <a href={repo.html_url}>{repo.name}</a>
                </li>
            ))}
        </article>
    )
}

export default Projects