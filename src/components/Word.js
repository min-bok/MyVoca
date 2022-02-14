import style from '../css/Day.module.css'
import '../css/style.css'
import { useState } from 'react';

function Word({word: w}) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow() {
        setIsShow(!isShow)
    }

    function toggleDone() {
        fetch(`http://localhost:3001/words/${word.id}`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone,
            }),
        })
        .then(res => {
            if(res.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function del() {
        if (window.confirm("삭제 하시겠습니까?")) {
          fetch(`http://localhost:3001/words/${word.id}`, {
            method: "DELETE",
          }).then(res => {
            if (res.ok) {
              setWord({
                ...word,
                id: 0,
              });
            }
          });
        }
      }
    
      if (word.id === 0) {
        return null;
      }

    return(
        <tr className={isDone ? 'off' : ''}>
        <td>
            <input type="checkbox" checked={isDone}
            onChange={toggleDone}/>
        </td>
        <td>
            {word.cn}
        </td>
        <td>
            {word.pinyin}
        </td>
        <td>
            {isShow && word.kor}
        </td>
        <td>
            <button onClick={toggleShow} className={`${style.meanBtn} ${style.btn}`}>뜻 {isShow ? '숨기기' : '보기'}</button>
            <button className={`${style.delBtn} ${style.btn}`} onClick={del}>삭제</button>
        </td>
    </tr>
    )
}

export default Word;

// 11강 2:35부터 ~

