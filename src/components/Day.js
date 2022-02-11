import dummy from '../DB/data.json'
import style from '../css/Day.module.css'

function Day() {
    const day = 2;
    const wordList = dummy.words.filter(word => word.day === day
    )

    return (
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
    )
}

export default Day;