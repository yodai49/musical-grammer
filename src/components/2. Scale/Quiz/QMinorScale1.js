import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';


const QMinorScale1 = (props) => {
    return (
    <div className="quiz">
        <div>Eから始まる自然的短音階に含まれる音をすべて答えてください</div>
        <QuizOptions id={props.id} text1="E, F, G, A, H, C, D, E" text2="E, Fis, G, A, H, C, D, E" text3="E, Fis, G, A, H, Cis, Dis, E" text4="この中に存在しない" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="2"
            result1="違います。Eの次の音はEの全音1つ分上の音なので、FではなくFisです。" 
            result2="正解です。" 
            result3="違います。Hの次の音はHの半音1つ分上の音なので、CisではなくCです。" 
            result4="違います。もう一度考えてみてください。"
        />
    </div>
    );
}

export default QMinorScale1;