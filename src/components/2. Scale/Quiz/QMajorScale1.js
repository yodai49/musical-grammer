import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';


const QMajorScale1 = (props) => {
    return (
    <div className="quiz">
        <div>Fから始まる長音階に含まれる音をすべて答えてください</div>
        <QuizOptions id={props.id} text1="F, G, A, B, C, D, E, F" text2="F, G, A, B, Cis, Dis, E, F" text3="F, G, A, H, C, D, E, F" text4="この中に存在しない" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="1"
            result1="正解です。" 
            result2="違います。Bの次の音はBの全音1つ分上の音なので、CisではなくCです。" 
            result3="違います。Aの次の音はAの半音1つ分上の音なので、HではなくBです。" 
            result4="違います。もう一度考えてみてください。"
        />
    </div>
    );
}

export default QMajorScale1;