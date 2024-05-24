import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function PrivateRouter(props){
    let token = useSelector(stateTong => stateTong.auth.token)
    if(token){
        return props.children
    }else{
        return <Navigate to="/login"></Navigate>
    }
}