import style from '../css/Day.module.css'
import '../css/style.css'
import { useState } from 'react';

function Word({ word }) {
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow)
    }

    function toggleDone() {
        setIsDone(!isDone)
    }

    return(
        <tr className={isDone ? 'off' : ''}>
        <td>
            <input type="checkbox" checked={isDone}
            onChange={toggleDone}/>
        </td>
        <td>
            {word.cn}
        </td>
        <td>
            {word.pinyin}
        </td>
        <td>
            {isShow && word.kor}
        </td>
        <td>
            <button onClick={toggleShow} className={`${style.meanBtn} ${style.btn}`}>뜻 {isShow ? '숨기기' : '보기'}</button>
            <button className={`${style.delBtn} ${style.btn}`}>삭제</button>
        </td>
    </tr>
    )
}

export default Word;

// 11강 2:35부터 ~

