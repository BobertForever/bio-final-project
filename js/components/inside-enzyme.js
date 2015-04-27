var React = require('React');

class InsideEnzyme extends React.Component {
  render() {
    return (
      <div>
        <h2>Inside the Enzyme”: How do enzymes work chemically?</h2>
        <p>All known enzymes are proteins: high molecular weight (10,000 to 2,000,000) compounds
        made up mostly of chains of amino acids linked together by peptide bonds. With salts,
        solvents and other reagents, enzymes can be denatured and precipitated.</p>
        <img src='img/img11.png' />
        <p>Enzymes recognize their substrates by their functional groups and molecular shape, and
        change their conformation to fit the substrate. The substrate and the active site of the
        enzyme can have an ionic interaction, H-bonding, van der Waals interaction, or covalent
        bonding to allow the enzyme to perform its catalytic function, making the reaction
        spontaneous and reducing the activation energy.</p>
        <img src='img/img12.png' />
        <p>Many enzymes require the presence of other compounds, cofactors, before their catalytic
        activity can be exerted. This entire active complex is referred to as the holoenzyme. The
        protein portion is called the apoenzyme and the cofactor, which is the coenzyme, prosthetic
        group, or metal-ion-activator, is called the holoenzyme.</p>
        The cofactor may be:
        <ol>
          <li>A coenzyme - a non-protein organic substance which is dialyzable, thermostable and
          loosely attached to the protein part.</li>
          <li>A prosthetic group - an organic substance which is dialyzable and thermostable which
          is firmly attached to the protein or apoenzyme portion.</li>
          <li>A metal-ion-activator - including K<sup>+</sup>, Fe<sup>++</sup>, Fe<sup>+++</sup>,
          Cu<sup>++</sup>, Co<sup>++</sup>, Zn<sup>++</sup>, Mn<sup>++</sup>, Mg<sup>++</sup>,
          <sup>Ca++</sup>, and Mo<sup>+++</sup>.</li>
        </ol>
        <img src='img/img13.png' />
      </div>
    );
  }
}

module.exports = InsideEnzyme;
