var React = require('react'),
    mui   = require('material-ui');

var { RadioButtonGroup, RadioButton, RaisedButton } = mui;

class Practice extends React.component {
  render() {
    return (
      <div>
        {this.props.questions.map(function(result, i) {
          return (
            <RadioButtonGroup ref={i} name={i}>
              {result.answers.map(function(result) {
                return <RadioButton value={result} label={result} />
              })}
            </RadioButtonGroup>
          );
        })}
      </div>
    );
  }
}

Practice.propTypes = {
  questions: React.PropTypes.array.isRequired
};
