'use client';

import React, {useState, useEffect} from 'react'
import { navs } from '../data/data'
import './nav.css'

export default function Nav() {
    const [navList, setNavList] = useState(navs)

    const handleClick = (id: number, e: React.MouseEvent) => {
        e.preventDefault();

        // toggle expansion items only 
        setNavList(navList.map(nav =>
            nav.id === id ? { ...nav, active: !nav.active} : { ...nav, active: false}
        ));
    };


    return (
        <nav id='navbar' className='navbar nav-menu'>
            <ul>
                {
                    navList.map(nav=>(
                        <li>
                            <a 
                                href={nav.target === 'linkedin' ? 'www.linkedin.com/in/sakshi-konnur752' : nav.target === 'github' ? 'https://github.com/sak-kon-ucsc' : '#'}
                                className = {`nav-link ${nav.active ? 'active' : ''} ${nav.target === 'linkedin' || nav.target === 'github' ? 'no-expand' : 'expandable'}`}
                                onClick={(e) => handleClick(nav.id, e)}
                                target={nav.target === 'linkedin' || nav.target === 'github' ? '_blank' : undefined}
                                rel={nav.target === 'linkedin' || nav.target === 'github' ? 'noopener noreferrer' : undefined}
                            // className={`nav-link scrollto ${
                            //     nav.active ? 'active' : undefined
                            //     }`}
                            >
                                <i className={nav.icon}></i>
                                {nav.name && <span>{nav.name}</span>}
                            </a>
                        </li>
                    ))
                }

            </ul>


        </nav>
    )
}
