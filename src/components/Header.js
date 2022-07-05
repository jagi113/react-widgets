import React from 'react';
import Link from "./Link";

const Header = () =>{
    return (
        <div className='ui secondary pointing menu'>
            <Link href="/" className='item'>Accordion</Link>
            <Link href="/wikisearch" className='item'>Wikipedia search</Link>
            <Link href="/dropdown" className='item'>Color dropdown</Link>
            <Link href="/translate" className='item'>Translations</Link>
            <Link href="/listofusers" className='item'>User's list</Link>
        </div>
    )
};

export default Header;