import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const Quiz11 = (props) => {
    return (
    <div className="quiz">
        <div>イタリア語で「シ」の音は、日本語の何でしょう？</div>
        <QuizOptions id={props.id} text1="ロ" text2="ホ" text3="ハ" text4="ニ" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="1" 
            result1="正解です。" 
            result2="違います。「ホ」の音は、イタリア語で「ミ」といいます。" 
            result3="違います。「ハ」の音は、イタリア語で「ド」といいます。" 
            result4="違います。「ニ」の音は、イタリア語で「レ」といいます。"
        />
    </div>
    );
}

export default Quiz11;