import { useContext } from "react";
import { Outlet, Navigate} from "react-router-dom";
import { UserContext } from "../components/UserContext";

const PrivateRoutes=({children,...rest})=>{
    const {User}=useContext(UserContext);
    
    return(
        User?<Outlet></Outlet>:<Navigate to='login'></Navigate>
    )
}
export default PrivateRoutes;