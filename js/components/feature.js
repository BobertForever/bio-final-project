var React = require('react'),
    mui   = require('material-ui');

var { Paper } = mui;

class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zDepth: 1
    };

    this._onMouseOver = this._onMouseOver.bind(this);
    this._onMouseOut = this._onMouseOut.bind(this);
  }

  _onMouseOver() {
    this.setState({
      zDepth: 4
    });
  }

  _onMouseOut() {
    this.setState({
      zDepth: 1
    });
  }

  render() {
    return (
      <Paper
        className="feature"
        onClick={this.props.onClick}
        zDepth={this.state.zDepth}
        onMouseOver={this._onMouseOver}
        onMouseOut={this._onMouseOut}>
        <h3>{this.props.title}</h3>
      </Paper>
    );
  }
}

Feature.propTypes = {
  title: React.PropTypes.string,
  onClick: React.PropTypes.func
};

module.exports = Feature;
