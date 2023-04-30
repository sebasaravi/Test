import React,{useEffect, useState} from "react"
import { forEachLeadingCommentRange } from "typescript"

const Projects = () =>{
    const username ="sebasaravi"
    const[user, setUser] = useState('')
    const[repositories, setRepot] = useState([])

    const fetchUser = async () =>{
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json()
            setUser(data)
            
        } catch (error) {
            console.log("Error: ", error)    
        }
        try{
            const responseRepo = await fetch(`https://api.github.com/users/${username}/repos`)
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
            <ul>
                {repositories && repositories.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url}>{repo.name}</a>
                    </li>
                ))}
            </ul>
    </article>
    )
}

export default Projects