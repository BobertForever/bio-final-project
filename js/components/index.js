var React   = require('react'),
    Feature = require('./feature'),
    mui     = require('material-ui');

var { Paper } = mui;

class Index extends React.Component {
  render() {
    return (
      <div style={{textAlign: "center"}}>
        <h2>Biology 311C Final Project</h2>
        <p>Robert Lynch, Haley Goertz, Isabelle Erickson, Dom Gillan</p>
        <div className="row">
          <Feature
            title="What are enzymes?"
            onClick={() => this.context.router.transitionTo('what-are-enzymes')} />
          <Feature
            title="Enzymes and Activation Energy"
            onClick={() => this.context.router.transitionTo('enzymes-and-activation-energy')} />
          <Feature
            title="Substrate Diagram"
            onClick={() => this.context.router.transitionTo('substrate-diagram')} />
          <Feature
            title="Enzyme Ingredients"
            onClick={() => this.context.router.transitionTo('enzyme-ingredients')} />
          <Feature
            title="Inside the Enzyme"
            onClick={() => this.context.router.transitionTo('inside-the-enzyme')} />
          <Feature
            title="Regulation of Enzyme Activity"
            onClick={() => this.context.router.transitionTo('enzyme-police')} />
        </div>
      </div>
    );
  }
}

Index.contextTypes = {
  router: React.PropTypes.func
};

module.exports = Index;
