import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import style from '../css/DayList.module.css'

function DayList() {
    const days = useFetch('http://localhost:3001/days');

    return (
        <ul className={`${style.ul}`}>
            {days.map(day => (
                <Link to = {`/day/${day.day}`}>
                    <li className={`${style.li}`} key={day.id}>
                        <p className={`${style.p}`}>Day {day.day}</p>
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default DayList;