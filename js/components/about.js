var React = require('react');

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>What are Enzymes?</h2>
        <p>Enzymes are macromolecular biological catalysts. Enzymes accelerate, or catalyze,
        chemical reactions. The molecules at the beginning of the process are called substrates
        and the enzyme converts these into different molecules, called products. Almost all
        metabolic processes in the cell need enzymes in order to occur at rates fast enough to
        sustain life. The set of enzymes made in a cell determines which metabolic pathways occur
        in that cell.</p>
        <img src="img/img14.jpg" />
        <p></p>
      </div>
    );
  }
}

module.exports = About;
