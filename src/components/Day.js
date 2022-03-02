import Word from '../components/Word'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import style from '../css/Day.module.css'

function Day() {
    const day = useParams().day;
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return (
        <>
        <h2 className={`${style.day}`}>Day {day}</h2>
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Day;