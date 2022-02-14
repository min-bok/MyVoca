import { Link } from 'react-router-dom';
import style from '../css/Header.module.css'

function Header() {
    return(
        <div className={`${style.header}`}>
            <h1 className={`${style.title}`}>
                <Link to = '/'>HSK 단어장</Link>
            </h1>
            <div className={`${style.menu}`}>
                <Link to='/create_word'>
                    <button className={`${style.btn}`}>단어 추가</button>
                </Link>
                <button className={`${style.btn}`}>Day 추가</button>
            </div>
        </div>
    )
}

export default Header;