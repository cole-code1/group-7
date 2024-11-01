import {dnolan,jhoffer, over} from "./CodewarsLink"

const MyHeader = ()=>{

    return(
        <h1>My three favorite code warriors are {dnolan}, {jhoffer} and {over}</h1>
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