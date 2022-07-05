// we do not need to import React because we are not writing any JSX 
import {useEffect, useState} from 'react';
const Route = ({path, children}) => { // this children propperty are tags inside of Route tag
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () =>{
            setCurrentPath(window.location.pathname)
        };

        window.addEventListener("popstate", onLocationChange);

        return ()=>{
            window.removeEventListener("popstate", onLocationChange);
        }
    }, []);
    
    return currentPath === path
        ? children
        : null;
};

export default Route;