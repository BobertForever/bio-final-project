var React = require('react');

class EnzymePolice extends React.Component {
  render() {
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
      </div>
    );
  }
}

module.exports = EnzymePolice;
