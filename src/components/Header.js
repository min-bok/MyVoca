import React from 'react'
import style from '../css/Header.module.css'

function Header() {
    return(
        <div className={`${style.header}`}>
            <h1 className={`${style.title}`}>HSK 단어장</h1>
            <div className={`${style.menu}`}>
                <button className={`${style.btn}`}>단어 추가</button>
                <button className={`${style.btn}`}>Day 추가</button>
            </div>
        </div>
    )
}

export default Header;