import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';

export default class Question extends Component {

    showQuestion = () => {
        const {answers, handleClick, stepBtnId, stepTypeChoice, stepRightId} = this.props;

        const choiceColor = cx({
            'quiz__answer--right': stepTypeChoice,
            'quiz__answer--wrong': !stepTypeChoice
        });

        return answers.map((answer) => {
            return <div key={answer.id}
                        data-id={answer.id}
                        className={'quiz__answer ' +

                        ((stepBtnId === answer.id) ? choiceColor : ((stepRightId === answer.id) ? 'quiz__answer--right' : ' '))

                        }
                        onClick={handleClick}
            >{answer.text}</div>
        })
    }

    render() {
        const answer = this.showQuestion();

        return <div>
            {answer}
        </div>;
    }
}

Question.propTypes = {
    stepBtnId: PropTypes.number,
    stepRightId: PropTypes.number,
    stepTypeChoice: PropTypes.bool,
    answers: PropTypes.array.isRequired
};