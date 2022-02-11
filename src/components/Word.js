import style from '../css/Word.module.css';

function Word() {
    return (
        <table>
        <tr className={`${style.wrap}`}>
          <td>
            <input type="checkbox"/>
          </td>
          <td>한자</td>
          <td>병음</td>
          <td>뜻</td>
          <td>
            <button className={`${style.meanBtn} ${style.btn}`}>뜻</button>
            <button className={`${style.delBtn} ${style.btn}`}>삭제</button>
          </td>
        </tr>
        </table>
      );
    }

export default Word;