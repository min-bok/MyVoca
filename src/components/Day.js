import dummy from '../DB/data.json'
import style from '../css/Day.module.css'
import { useParams } from 'react-router-dom'

function Day() {
    const day = useParams().day;
    const wordList = dummy.words.filter(word => word.day === Number(day)
    )

    return (
        <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordList.map(word => (
                <tr key={word.id}>
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
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Day;