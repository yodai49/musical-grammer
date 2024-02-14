import './../css/quiz.css';

const QuizOptions = (props) =>{
    return (
        <div className="options-wrapper">
            <div className="form-check">
                <input type="radio" className="form-check-input" name={props.id} id={props.id + "Option1"}></input>
                <label htmlFor={props.id + "Option1"} className="form-check-label">{props.text1}</label>
            </div>
            <div className="form-check">
                <input type="radio" className="form-check-input" name={props.id} id={props.id + "Option2"}></input>
                <label htmlFor={props.id + "Option2"} className="form-check-label">{props.text2}</label>
            </div>
                <div className="form-check">
                <input type="radio" className="form-check-input" name={props.id} id={props.id + "Option3"}></input>
                <label htmlFor={props.id + "Option3"} className="form-check-label">{props.text3}</label>
            </div>
                <div className="form-check">
                <input type="radio" className="form-check-input" name={props.id} id={props.id + "Option4"}></input>
                <label htmlFor={props.id + "Option4"} className="form-check-label">{props.text4}</label>
            </div>
        </div>
    );
}

export default QuizOptions;