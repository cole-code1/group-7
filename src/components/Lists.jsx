
function CreateElement({content, tag, props }){

    return(
        <div>
            Hello World
        </div>
    )
}

export default function createUnorderedList({list}){

    return(
        <div>
          <CreateElement/>
          <ul>
              {list.map((fruit, index)=> (
                  <li key={index}>{fruit}</li>
              ))}
          </ul>

        </div>
    )
}