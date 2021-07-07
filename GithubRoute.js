import React ,{useState ,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import User from './User'
function GithubRoute() {
    let issues=[{name:'Issues1',id:1},{name:'Issues2',id:2},{name:'Issues3',id:3},{name:'Issues4',id:4},{name:'Issues5',id:5}]
    const[issue,setIssue]=useState([])
    console.log(issue)
    useEffect(() => {
            axios.get('https://api.github.com/repos/octocat/Hello-World/issues')
            .then(response =>{
                setIssue(response.data)
                console.log(response)
            } )
           
    },[])
        return (
            <div>
                <Router>
                <h1>GitHub Issues Page</h1>
                {
                    issues.map((item) =>
                    <div><Link to={"/issues/"+item.id + "/" +item.name}>{item.name}</Link></div> 
                    )  
                }
                <Route path="/issues/:id/:name">< User /></Route>   
            </Router>
            </div>
        )
     }
     
     export default GithubRoute
