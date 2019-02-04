import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.question}</h1>;
  }
}

class Choice extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let Buttons = this.props.choice.map(c => <button>{c}</button>);
    return (
      <div>
        <Buttons />
      </div>
    );
  }
}

class Answer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <section>this.props.answer</section>;
  }
}

export class ExamApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: [
        {
          question: "1 + 1",
          choice: [1, 2, 3, 4],
          answer: 2
        },
        {
          question: "1 * 1",
          choice: [1, 2, 3, 4],
          answer: 1
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Question question={this.state.tests[0].question} />
        <Choice choice={this.state.tests[0].choice} />
        <Answer />
      </div>
    );
  }
}
