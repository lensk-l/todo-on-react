import React from 'react'
import s from './header.module.css'

function Header() {
    return (
        <div className={s.titleBackground}><h2 className={s.title}>Todo List</h2></div>
    )
}

export default Header;