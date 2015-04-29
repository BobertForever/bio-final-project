var React = require('react');

class SubstrateDiagram extends React.Component {
  render() {
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
      </div>
    );
  }
}

module.exports = SubstrateDiagram;
