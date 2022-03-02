import { Link } from 'react-router-dom';
import style from '../css/Header.module.css'

function Header() {
    return(
        <div className={`${style.header}`}>
            <h1 className={`${style.title}`}>
                <Link to = '/'>마이보카</Link>
            </h1>
            <div className={`${style.menu}`}>
                <Link to='/create_word'>
                    <div className={`${style.addWord}`}>
                        <button className={`${style.btn}`}></button>
                        <p className={`${style.text}`}>단어추가</p>
                    </div>
                </Link>
                <Link to='/create_day'>
                    <div className={`${style.addDay}`}>
                        <button className={`${style.btn}`}></button>
                        <p className={`${style.text}`}>Day 추가</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;