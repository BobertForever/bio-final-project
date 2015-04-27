var React = require('React');

class ActivationEnergy extends React.Component {
  render() {
    return (
      <div>
        <h2>Enzymes and Activation Energy</h2>
        <p>Many important reactions in the cell would not occur without enzymes acting as
        catalysts. For each reaction, even favorable ones, a certain amount of energy input is
        needed to get the reaction started. This is known as the Activation Energy. You can think
        of the reactants as a boulder sitting on top of a hill. The ball has potential energy and
        favors rolling down the hill. It won't move, however, until it is given a push to get it
        rolling.</p>
        <p>Similarly, an enzyme lowers the activation energy of a reaction by binding to substrates
        and providing the proper environment for reactions to proceed. It is important to note that
        enzymes do not change the overall Free Energy of a reaction. The reactions take place
        without enzymes but with greatly decreased frequency because of the random motion of
        molecules.</p>
      </div>
    );
  }
}

module.exports = ActivationEnergy;
