var React = require('react'),
    mui   = require('material-ui');

var { RadioButtonGroup, RadioButton, RaisedButton } = mui;

class Practice extends React.Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    var correct = true;
    this.props.questions.map(function(question, i) {
      if (this.refs[i].getSelectedValue() != question.answer) {
        correct = false;
        alert("You got #" + (i + 1) + " incorrect");
      }
    }.bind(this));

    if(correct) {
      alert("You got all these practice problems correct!");
    }
  }

  render() {
    return (
      <div>
        {this.props.questions.map(function(result, i) {
          return (
            <div>
              <p><b>{"(" + (i + 1) + ")"}</b> {result.question}</p>
              <RadioButtonGroup ref={i} name={String(i)}>
                {result.answers.map(function(result) {
                  return <RadioButton value={result} label={result} />
                })}
              </RadioButtonGroup>
              <br/>
            </div>
          );
        })}
        <br/>
        <RaisedButton label="Check Answers" secondary={true} onClick={this._onClick} />
      </div>
    );
  }
}

Practice.propTypes = {
  questions: React.PropTypes.array.isRequired
};

module.exports = Practice;
