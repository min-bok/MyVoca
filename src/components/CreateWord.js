import { useRef } from "react";
import useFetch from "../hooks/useFetch";
import style from '../css/createWord.module.css'

function CreateWord() {
    const days = useFetch('http://localhost:3001/days');

    function onSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3001/words/`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                day : dayRef.current.value,
                cn : cnRef.current.value,
                pinyin : pinyinRef.current.value,
                kor : korRef.current.value,
                isDone : false
            }),
        })
        .then(res => {
            if(res.ok) {
                alert('생성이 완료되었습니다');
            }
        });
    }

    const cnRef = useRef(null);
    const pinyinRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return(
        <form className={`${style.form}`} onSubmit={onSubmit}>
            <div className={`${style.labelWrap}`}>
                <div className={`${style.wrap}`}>
                    <label className={`${style.label}`}>단어</label>
                    <input className={`${style.input}`} type="text" placeholder="단어" ref={cnRef}/>
                </div>
                <div className={`${style.wrap}`}>
                    <label className={`${style.label}`}>발음</label>
                    <input className={`${style.input}`} type="text" placeholder="발음" ref={pinyinRef}/>
                </div>
                <div className={`${style.wrap}`}>
                    <label className={`${style.label}`}>뜻</label>
                    <input className={`${style.input}`} type="text" placeholder="뜻" ref={korRef}/>
                </div>
                <div className={`${style.wrap}`}>
                    <label className={`${style.label}`}>Day</label>
                    <select className={`${style.select}`} ref={dayRef}>
                        {days.map(day => (
                            <option key={day.id} value={day.day}>
                                {day.day}
                            </option>
                        ))} 
                    </select>
                </div>
            </div>
            <button className={`${style.btn}`}>저장</button>
        </form>
    )
}

export default CreateWord;