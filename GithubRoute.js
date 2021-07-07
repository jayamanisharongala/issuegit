import React  from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import User from './User'
function GithubRoute() {
   
        let issues=[{name:'issue1',id:1},{name:'issue2',id:2}]
        return (
            <div>
                <Router>
                <h1>GitHub Issues Page</h1>
                {
                    issues.map((item) =>
                    <div><Link to={"/issues/"+item.id + "/" +item.name}>{item.name}</Link></div> 
                    )
                }
                <Route path="/issues/:id/:name"><User /></Route>
                 
            
            </Router>
            </div>
        )
     }
     
     export default GithubRoute