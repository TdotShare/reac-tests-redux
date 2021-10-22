import React , {  useState , useEffect }from 'react'
import {useHistory , Route} from 'react-router-dom'
import { routerPathProtected } from './routerPath'


function ProtectedRoutes() {

    const history = useHistory()

    const [ authen  , setAuthen ] = useState<boolean>(false)
    const [ status  , setStatus ] = useState<boolean>(false)

    useEffect(() => {

        if(authen){
            setStatus(true)
        }else{
            setStatus(false)
        }

        if(status){
            
        }else{
            history.replace(`/login`)
        }
        
    }, [])
    return (
        <>
             <Route exact path={`${routerPathProtected.Dashboard}`} component={() => <p>Dashboard Pages</p>} />
        </>
    )
}

export default ProtectedRoutes
