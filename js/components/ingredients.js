var React = require('react');

class Ingredients extends React.Component {
  render() {
    return (
      <div>
        <h2>Enzyme Ingredients: Factors Affecting Enzyme Activity</h2>
        <p><b>Enzyme Concentration</b>: In order to study the effect of increasing enzyme
        concentration on the reaction rate, the reaction must be independent of the substrate
        concentration. The level of the enzyme present will dictate how much product is formed, as
        illustrated by the graph.</p>
        <img src='img/img6.png' />
        <p><b>Substrate Concentration</b>: Each enzyme needs the right kind of substrate(s) to
        perform the reaction. If the amount of enzyme is kept constant and the substrate
        concentration is increased, the reaction velocity will increase until it reaches a maximum,
        as shown with in the graph.</p>
        <img src='img/img7.png' />
        <p><b>Temperature</b>: Each enzyme has an optimum temperature for maximum activity. In the
        human body, the optimum temperature for enzymes is 37°C. In bacteria, the optimum
        temperature for enzymes is 72°C.  The reaction rate increases with temperature to a maximum
        level, then quickly declines with further increase of temperature. Over a period of time,
        enzymes will be deactivated at even moderate temperatures.</p>
        <img src='img/img8.png' />
        <p><b>pH</b>: Enzymes require an optimum pH to operate. Extremely high or low pH values
        generally result in complete loss of activity for most enzymes.</p>
        <img src='img/img9.png' />
        <p><b>Salt</b>: Enzymes require the presence of certain ions or salts at certain
        concentrations to catalyze reactions.</p>
        <img src='img/img10.png' />
      </div>
    );
  }
}

module.exports = Ingredients;
