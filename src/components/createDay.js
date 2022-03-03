import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import style from '../css/createDay.module.css'

function CreateDay() {
    const days = useFetch('http://localhost:3001/days');
    const navigate = useNavigate

    function addDay(e){
        e.preventDefault();

        fetch(`http://localhost:3001/days/`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                day : days.length + 1
            }),
        })
        .then(res => {
            if(res.ok) {
                alert('생성이 완료되었습니다!');
                navigate(`/`)
            }
        })
    }

    return(
        <div className={`${style.wrap}`}>
            <h3 className={`${style.h3}`}>현재 일수  : {days.length}일</h3>
            <button className={`${style.btn}`} onClick={addDay}>Day 추가</button>
        </div>
    )
}

export default CreateDay;