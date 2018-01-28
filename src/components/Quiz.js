import React, { Component } from 'react';
import QuizTitle from './QuizTitle';
import Question from './Question';
import End from './End';

export default class Quiz extends Component {
    constructor(props) {
        super(props);

        const {data} = this.props;

        this.state = {
            step: 0,
            maxQuestion: data.length,
            endGame: false,
            result: 0,
            name: '',

            stepBtnId: null,
            stepRightId: null,
            stepTypeChoice: null,
        };
    }

    handleClick = (e) => {
        const {step, maxQuestion, endGame, result} = this.state;
        const {data} = this.props;

        const correctAnswer = +data[step].answers.find(item => {
            return item.correct === true
        }).id;

        const myAnswer = +(e.target.dataset.id);

        if (correctAnswer === myAnswer){
            this.setState({
                result: result + 1,
                stepTypeChoice: true,
            });
        } else {
            this.setState({
                stepTypeChoice: false,
            });
        }

        this.setState({
            stepBtnId: myAnswer,
            stepRightId: correctAnswer,
        });

        if (step >= maxQuestion-1){
            let who;

            switch(result) {
                case 0:
                    who ='loser';
                    break;
                case 1:
                    who ='eh...like loser';
                    break;
                case 2:
                    who ='better then loser';
                    break;
                case 3:
                    who ='common person';
                    break;
                case 4:
                    who ='almost krasaychik';
                    break;
                case 5:
                    who ='krasaychik';
                    break;
                default:
                    who ='stranger';
                    break;
            }

            setTimeout(()=>{
                this.setState({
                    name: who,
                    endGame: !endGame,
                });
                return;
            },1000);

        }

        // console.log(`Правильный ${correctAnswer}`);
        // console.log(`А ты ответил ${e.target.dataset.id}`);

        setTimeout(()=>{
            this.setState({
                stepBtnId: null,
                stepTypeChoice: null,
                stepRightId: null,
                step: step + 1,
            });
        },1000);

    };

    render() {
        const {step, endGame, result, name, stepBtnId, stepTypeChoice, stepRightId} = this.state;
        const {data} = this.props;

        if (endGame){
            return <End result={result} name={name}/>;
        }

        return (
            <div className="quiz">
                <QuizTitle title={data[step].title}/>
                <Question answers={data[step].answers}
                          handleClick={this.handleClick}
                          stepBtnId={stepBtnId}
                          stepTypeChoice={stepTypeChoice}
                          stepRightId={stepRightId}/>
            </div>
        );
    }

}

