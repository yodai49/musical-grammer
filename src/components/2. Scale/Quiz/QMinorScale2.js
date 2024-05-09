import QuizOptions from '../../QuizOptions';
import QuizMessage from '../../QuizMessage';
import QuizAnswerButton from '../../QuizAnswerButton';

import './../../../css/quiz.css';


const QMinorScale2 = (props) => {
    return (
    <div className="quiz">
        <div>Hから始まる自然的短音階に含まれる音をすべて答えてください</div>
        <QuizOptions id={props.id} text1="H, C, D, E, F, G, A, H" text2="H, Cis, D, E, Fis, Gis, A, H" text3="H, Cis, Dis, E, Fis, G, A, H" text4="正しいものはない" />
        <QuizAnswerButton id={props.id} />
        <QuizMessage id = {props.id} answer="4"
            result1="違います。Hの次の音はHの全音1つ分上の音なので、CではなくCisです。" 
            result2="違います。Fisの次の音はFisの半音1つ分上の音なので、GisではなくGです。" 
            result3="違います。Cisの次の音はCisの半音1つ分上の音なので、DisではなくDです。" 
            result4="正解です。Hから始まる自然的短音階は、H, Cis, D, E, Fis, G, A, Hです。"
        />
    </div>
    );
}

export default QMinorScale2;