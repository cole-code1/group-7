import {one,two, three} from "./CodewarsLink"

const MyHeader = ()=>{

    return(
        <h1>My three favorite code warriors are {one}, {two} and {three}</h1>
    )
}


export default function Leaderboard({leaders}){
    return(
        <div>
            <MyHeader/>
            {leaders.map((leader, index)=>(
               <div key={index} >
                <a href={`http://www.codewars.com/users/${leader}`}>{leader}</a>
               </div>
            ))}
        </div>
    )
}