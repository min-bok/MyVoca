import { Link } from 'react-router-dom';
import dummy from '../DB/data.json'

function DayList() {
    console.log(dummy);

    return (
        <ul>
            {dummy.days.map(day => (
                <li key={day.id}>
                    <Link to = {`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    )
}

export default DayList;