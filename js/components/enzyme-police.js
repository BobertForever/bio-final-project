var React     = require('react'),
    Practice  = require('./practice');

class EnzymePolice extends React.Component {
  render() {
    var questions = [
      {
        question: "What is the effect of a competitive inhibitor on an enzyme?",
        answers: [
          "Different Vmax, same Km",
          "Same Vmax, same Km",
          "Different Vmax, different Km",
          "Same Vmax, different Km",
          "No effect"
        ],
        answer: "Same Vmax, different Km"
      },
      {
        question: "What is the effect of a non-competitive inhibitor on an enzyme?",
        answers: [
          "Same Vmax, different Km",
          "Same Vmax, same Km",
          "Different Vmax, same Km",
          "Different Vmax, different Km",
          "No effect"
        ],
        answer: "Different Vmax, same Km"
      },
      {
        question: "Which would have a highest Vmax?",
        answers: [
          "A) Normal enzyme",
          "B) Competitive inhibitor",
          "C) Non-competitive inhibitor",
          "D) A and B",
          "E) A and C"
        ],
        answer: "D) A and B"
      },
      {
        question: "When a substrate binds to an active site of an allosteric enzyme, all of the following happen except",
        answers: [
          "The other active sites bind more substrate",
          "The conformation of all the active sites change",
          "The binding of an allosteric activator becomes more likely",
          "None of the above, all are true."
        ],
        answer: "The binding of an allosteric activator becomes more likely"
      },
      {
        question: "Allosteric regulation of enzyme activity involves",
        answers: [
          "Competitive binding at the enzyme active site",
          "Conformational change in the enzyme due to the binding at the allosteric site",
          "Turning off genes that code for enzyme production",
          "Binding of an allosteric inhibitor to the substrate"
        ],
        answer: "Conformational change in the enzyme due to the binding at the allosteric site"
      },
      {
        question: "In feedback regulation what would the product of one pathway be for the next step of the pathway?",
        answers: [
          "An inhibitor",
          "An activator",
          "The substrate",
          "A protein",
          "None of the above"
        ],
        answer: "The substrate"
      },
      {
        question: "In feedback regulation the biochemical pathway never stops and continues to produce the end products no matter the concentration or build-up.",
        answers: ["true", "false"],
        answer: "false"
      }
    ];

    return (
      <div>
        <h2>Enzyme Police: Regulation of Enzyme Activity</h2>
        <p><b>Activators Vs. Inhibitors</b></p>
        <p>Competitive, non-competitive and irreversible inhibitors all have different functions
        and effects on the enzyme activity in the body. Competitive inhibitors compete with the
        substrate at the active site on the enzyme. If the substrate is already bound to the enzyme,
        then the inhibitor cannot bind to that enzyme. The inhibitor can be deemed less effective
        if the substrate concentration is increased, or the concentration of the inhibitor is
        decreased. Compared to a normal functioning enzyme, the Km increases in a competitive
        inhibitor while he Vmax remains unchanged. Unlike competitive inhibitors, Non-competitive
        inhibitors bind to a site on an enzyme other than the active site. The inhibitor can still
        bind to an enzyme even if the substrate is currently bound or not. This inhibitor decreases
        the activity of an enzyme and makes it function less effectively. If the concentration of
        this inhibitor drops the reaction rate does not increase respectively. The rate will only
        increase if a new enzyme is synthesized. Compared to a normal functioning enzyme, in a
        non-competitive inhibitor the Km stays the same whilst the Vmax decreases.</p>
        <p><ul>
          <li>Activator vs Inhibitor
            <ul>
              <li>Activators bind to an enzyme and assist them by lowering the activation energy
              needed for the reaction to proceed.</li>
              <li>Inhibitors bind to an enzyme and change its structure with the goal of reducing
              the enzyme's activity.</li>
            </ul>
          </li>
          <li>Reversible vs. Irreversible inhibitors
            <ul>
              <li>Reversible inhibitors have the ability to leave the enzyme after they have done
              their job so essentially the inhibition is "reversed". They are non-covalently
              bound.</li>
              <li>Irreversible inhibitors when bound change an enzyme chemically and bind
              covalently to the protein. After they have bound to an enzyme or protein they hinder
              them permanently inactive.</li>
            </ul>
          </li>
          <li>Competitive vs Non-Competitive inhibition
            <ul>
              <li>Competitive inhibition: Competes with the substrate at the active site on an
              enzyme. A competitive inhibitor can be deemed less effective if the substrate
              concentration is increased or the concentration of the inhibitor is decreased. In the
              case of competitive inhibition the Km increases whilst the Vmax stays the same
              compared to a normal function enzyme.</li>
              <li>Non-Competitive inhibition: Binds to the enzyme on an allosteric site. Can still
              bind no matter if the substrate is already bound or not. The inhibitor decreases the
              activity of an enzyme and makes it function less effectively. In the case of
              non-competitive inhibition, the Km stays the same whilst the Vmax decreases compared
              to a normal function enzyme.</li>
            </ul>
          </li>
        </ul></p>
        <p><b>Allosteric Regulation</b></p>
        <p>Allosteric regulation involves the activation or the inhibition of an enzyme to either
        it's active or inactive form. It performs this through the binding of an effector to an
        allosteric site of an enzyme. Allosteric activators change the shape of the active site of
        an enzyme to leave it in its active state, whilst allosteric inhibitors change the shape of
        the active site to leave the enzyme in its inactive state.</p>
        <p><b>Feedback Regulation</b></p>
        <p>Feedback regulation is a form of allosteric regulation used to regulate enzyme activity
        in the body through a biochemical pathway of enzymes that work together to create an end
        product. This end product can be used for inhibition or activation of enzymes along that
        pathway. The cell utilizes the products of its own reactions to create a feedback loop. As
        such, the product of one pathway becomes the substrate for the next reaction.</p>
        <p><b>Chemical Modification</b></p>
        <p>Enzymes or proteins can be chemically modified by substrates, proteins or even other
        enzymes to change their function in this body. Examples of this include all types of
        allosteric regulation and feedback regulation. The goal of chemically modifying these
        enzymes or proteins is to make them active or inactive in the body.</p>
        <div style={{height: '32'}}></div>
        <hr />
        <h3>Practice</h3>
        <Practice questions={questions} />
      </div>
    );
  }
}

module.exports = EnzymePolice;
