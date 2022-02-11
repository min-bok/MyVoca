import style from '../css/Day.module.css'

function Word({ word }) {
    return(
        <tr>
        <td>
            <input type="checkbox"/>
        </td>
        <td>
            {word.cn}
        </td>
        <td>
            {word.pinyin}
        </td>
        <td>
            {word.kor}
        </td>
        <td>
            <button className={`${style.meanBtn} ${style.btn}`}>뜻</button>
            <button className={`${style.delBtn} ${style.btn}`}>삭제</button>
        </td>
    </tr>
    )
}

export default Word;

// 11강 2:35부터 ~

