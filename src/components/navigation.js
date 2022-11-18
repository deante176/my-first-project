import React from 'react'
import {Link} from 'react-router-dom';
const navLinks= [
    {
        title:'Home',
        path: '/'
    },
    {
        title:'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact us'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

export default Function Navigation () {
    return (
    <><nav classname="site-navigation" />
      <span>My React Blog</span>
        <ul>
            { navLinks.map((link,index) => {
                <li key= {index}>
                    <link to={link.path}>{link.title}</link>
                <li>
            ))}
        </ul>
    </nav>)
}