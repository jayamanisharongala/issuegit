import {withRouter} from 'react-router-dom'
import React ,{useState ,useEffect} from 'react'
import axios from 'axios'
function User(props)
{
    const [repos,setRepos] = useState([])
    useEffect(() => {
        const fetchRepos = async () => {
            const res =await axios.get('https://api.github.com/repos/octocat/Hello-World/issues')
            setRepos(res.data)
        }
        fetchRepos()
    },[])
    console.warn(props)
    return(
    <div>
        <ul>
                {repos.map((repo) => (
                    <li key ={repo.id}>
                       <p>Title :{repo.title},{props.match.params.id},{props.match.params.name}</p> 
                        <p>State :{repo.state},{props.match.params.id},{props.match.params.name}</p>
                        <p>Created_at :{repo.created_at},{props.match.params.id},{props.match.params.name}</p>
                        <p>Updated_at :{repo.updated_at},{props.match.params.id},{props.match.params.name}</p>
                        </li>
                ))}
            </ul>

    </div>
    )
}
export default  withRouter(User)