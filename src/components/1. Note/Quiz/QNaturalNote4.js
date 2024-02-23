import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QNaturalNote4 = (props) => {
    return (
    <div className="quiz">
        <div>イタリア語で「レ」の音は、ドイツ語の何でしょう？</div>
        <QuizOptions id={props.id} text1="アー" text2="ツェー" text3="エフ" text4="デー" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="4" 
            result1="違います。「アー」の音は、イタリア語で「ラ」といいます。" 
            result2="違います。「ツェー」の音は、イタリア語で「ド」といいます。" 
            result3="違います。「エフ」の音は、イタリア語で「ファ」といいます。" 
            result4="正解です。"
        />
    </div>
    );
}

export default QNaturalNote4;