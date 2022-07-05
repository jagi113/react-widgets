import React from 'react';

const Link = ({href, className, children}) => {
const onClick = (event) => {
    //To check whether it is cmd / ctr + click and if so loadup a new page completely
    if (event.metaKey || event.ctrlKey) {
        return;    
    }

    event.preventDefault();                         //this will prevent full page reload
    window.history.pushState({}, "", href);

    //This will communicate to Route components that url has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
}

    return <a onClick={onClick} className={className} href={href}>{children}</a>
};

export default Link;