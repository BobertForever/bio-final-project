var React     = require('react'),
    Practice  = require('./practice');

class SubstrateDiagram extends React.Component {
  render() {
    var questions = [
      {
        question: "Given that the lines I, II and III are obtained after using various molecules in the enzyme reaction, which line represents a reaction with competitive inhibitor?",
        answers: ["I", "II", "III", "Both I and II", "Both II and III"],
        answer: "II"
      },
      {
        question: "Which line shows the response of adding an activator to the enzyme reaction?",
        answers: ["I", "II", "III", "Both I and II", "Both II and III"],
        answer: "I"
      },
      {
        question: "Which line shows the response of enzyme + substrate and non-competitive Inhibitor?",
        answers: ["I", "II", "III", "Both I and II", "Both II and III"],
        answer: "III"
      },
      {
        question: "An enzyme was tested with two different substrates A and B resulting in products X and Y.  The Km for substrate A was 10 mM and the Km for substrate B was 100 mM. From this information, we can say that.",
        answers: [
          "substrate A is less effective than substrate B to have same amount of products formed.",
          "substrate B is less effective than substrate A to have same amount of products formed.",
          "There is no difference between A and B in terms of products formed.",
          "X is produced less than Y with same amount of substrate used.",
          "Y is produced more than X with same amount of substrate used."
        ],
        answer: "substrate B is less effective than substrate A to have same amount of products formed."
      }
    ];

    return (
      <div>
        <h2>Substrate Diagram</h2>
        <p>It is often helpful to visually demonstrate how the activity of an enzyme is influenced.
        A substrate diagram plots the rate of a reaction, V (products/ unit of enzyme/ unit of
        time), as a function of the substrate concentration, [S] (M). Different lines show the
        varying responses of enzyme/ substrate complexes due to the presence of activators and
        inhibitors. It can be seen that with every complex, an increase in substrate concentration
        causes an increase in reaction rate up to the maximum rate of reaction, Vmax. At this point,
        the enzymes are completely saturated and the rate of reaction is unaffected by adding more
        substrate. Sometimes, two different complexes have the same Vmax but reach it in different
        ways. That is where the quantity Km is useful. Km corresponds to the substrate
        concentration when the rate of reaction is at half of its maximum (Vmax/2). Differing Km
        quantities allow for comparisons between the amount of substrate needed for different
        complexes to reach the same rate of reaction.</p>
        <img src='img/img4.png' />
        <ul>
          <li><b>Enzyme+S</b>: This is the baseline activity of an enzyme in the presence of its
          particular substrate. All other complexes are compared to this.</li>
          <li><b>Enzyme+S+Activator</b>: The enzyme is stimulated by an activator and has a greater
          affinity for its substrate. A lower amount of substrate is needed to achieve the same
          amount of reaction rate (lower Km) but the maximum rate of reaction remains the same
          (Vmax unchanged).</li>
          <li><b>Enzyme+S+Competitive Inhibitor</b>: An inhibitor similar to the substrate competes
          for the active site of the enzyme. This is overcome by increasing the amount of substrate
          to outnumber the inhibitor and achieve the same reaction rate (Km increases). Still, the
          maximum rate of reaction remains the same (Vmax unchanged).</li>
          <li><b>Enzyme+S+Non-Competitive Inhibitor</b>: An inhibitor binds to the enzyme at a
          place other than the active site and changes its conformation, making it less reactive or
          unreactive. This kind of inhibition cannot be overcome by increase in substrate
          concentration (Km unchanged) but the maximum rate of reaction is lowered (Vmax
          decreases).</li>
        </ul>
        <div style={{height: '32'}}></div>
        <hr />
        <h3>Practice</h3>
        <p>Use the follow image to answer questions 1-3</p>
        <img src='img/img5.png' />
        <Practice questions={questions} />
      </div>
    );
  }
}

module.exports = SubstrateDiagram;
