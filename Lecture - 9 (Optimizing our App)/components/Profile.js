import { useState } from "react";

function Profile({name}){

    const [count,setCount] = useState(0);
    return(
        <div>
            <h2>Profile Component : {name}</h2>
            <p>{count}</p>
            <button type="" onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}
export default Profile;