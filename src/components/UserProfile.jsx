import { useState , useEffect} from "react";

function UserProfile(){
    const [data , setData ] = useState([])
    const [isDeleted , setDeleted ] = useState(true)
    const deleteUser = ()=>{
        setData([])
        setDeleted((prev)=> !prev)
    }
    useEffect(()=>{
        const abortController = new AbortController();
        fetch(`https://randomuser.me/api/` , { signal : abortController.signal})
        .then(res => res.json())
        .then(data => setData(data.results))
        return()=>{
            setData([]);
            abortController.abort();
        }
    }, [])
    return(
        <div>{
            data.map(e => 
            <div>
                <p>username : {e.login.username}</p>
                <p>email : {e.email}</p>
                <p>city : {e.location.city}</p>
                <p>city : {e.location.city}</p>
                <p>gender : {e.gender}</p>
            </div>)
            }
            {isDeleted?<button onClick={deleteUser}>Delete</button>:''}
            </div>
    )
}
export default UserProfile;