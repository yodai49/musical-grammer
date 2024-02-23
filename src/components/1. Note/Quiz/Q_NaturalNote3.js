import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const Q_NaturalNote3 = (props) => {
    return (
    <div className="quiz">
        <div>ドイツ語で「アー」の音は、イタリア語の何でしょう？</div>
        <QuizOptions id={props.id} text1="ド" text2="レ" text3="ファ" text4="ラ" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="4" 
            result1="違います。「ド」の音は、ドイツ語で「ツェー」といいます。" 
            result2="違います。「レ」の音は、ドイツ語で「デー」といいます。" 
            result3="違います。「ファ」の音は、ドイツ語で「エフ」といいます。" 
            result4="正解です。"
        />
    </div>
    );
}

export default Q_NaturalNote3;