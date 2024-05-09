import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';

const QMajorScale2 = (props) => {
    return (
        <div className="quiz">
            <div>Bから始まる長音階に含まれる音をすべて答えてください</div>
            <QuizOptions id={props.id} text1="B, C, Des, Es, F, G, As, B" text2="B, C, D, Es, F, G, A, B" text3="B, Cis, Dis, E, Fis, Gis, Ais, B" text4="正しいものはない" />
            <QuizAnswerButton id={props.id} />
            <QuizMessage id = {props.id} answer="2"
                result1="違います。Cの次の音はCの全音1つ分上の音なので、DesではなくDです。" 
                result2="正解です。" 
                result3="違います。Bの次の音はBの全音1つ分上の音なので、CisではなくCです。" 
                result4="違います。もう一度考えてみてください。"
            />
        </div>
    );
}

export default QMajorScale2;