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
                        {word.cn}
                    </td>
                    <td>
                        {word.pinyin}
                    </td>
                    <td>
                        {word.kor}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Day;