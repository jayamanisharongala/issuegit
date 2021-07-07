import {withRouter} from 'react-router-dom'
import React ,{useState ,useEffect} from 'react'
import axios from 'axios'
function User(props)
{
    const [repos,setRepos] = useState([])
    const ID =props.match.params.id
    const Name=props.match.params.name
    console.log(Name)
    useEffect(() => {
        const fetchRepos = async () => {
            const res =await axios.get(`https://api.github.com/repos/octocat/Hello-World/issues/ ${ID}`)
            setRepos(res.data)
            console.log(res)
        }
        fetchRepos()
    },[ID])
    console.warn(props)
    return(
    <div>
                <p>Title :{repos.title}</p> 
                <p>State :{repos.state}</p>
                <p>Created_at :{repos.created_at}</p>
                <p>Updated_at :{repos.updated_at}</p>
               
                
    </div>
    )
}
export default  withRouter(User)
