import React, { useState, useEffect } from 'react'
import { useHistory, Route } from 'react-router-dom'
import { routerPathProtected } from './RouterPath'


function ProtectedRoutes() {

    const history = useHistory()

    const [authen] = useState<boolean>(true)

    useEffect(() => {

        if (authen) {
            console.log("true login !")
        } else {

            history.replace(`/login`)
        }
    
    }, [authen , history])

    return (
        <>
            <Route exact path={`${routerPathProtected.Dashboard}`} component={() => <p>Dashboard Pages</p>} />
        </>
    )
}

export default ProtectedRoutes
