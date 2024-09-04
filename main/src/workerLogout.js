import { useEffect } from "react";

export default function WorkerLogout(){
    useEffect(()=>{
        alert("logged out");
        localStorage.removeItem('username')
        localStorage.removeItem('pwd')
        window.location.href='/'
    },[])
}