import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const Quiz16 = (props) => {
    return (
    <div className="quiz">
        <div>日本語で「変ロ」の音は、イタリア語の何でしょう？</div>
        <QuizOptions id={props.id} text1="シ♭" text2="ミ♭" text3="ファ♯" text4="ド♯" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="1"
            result1="正解です。" 
            result2="違います。ミ♭の音は、日本語で「変ホ」といいます。" 
            result3="違います。ファ♯の音は、日本語で「嬰ヘ」といいます。" 
            result4="違います。ド♯の音は、日本語で「嬰ハ」といいます。"
        />
    </div>
    );
}

export default Quiz16;