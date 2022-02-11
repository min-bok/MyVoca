import dummy from '../DB/data.json'

function DayList() {
    console.log(dummy);

    return (
        <ul>
            {dummy.days.map(days => (
                <li key={days.id}>
                    Day {days.day}
                </li>
            ))}
        </ul>
    )
}

export default DayList;