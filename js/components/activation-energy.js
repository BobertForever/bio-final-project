var React     = require('react'),
    Practice  = require('./practice');

class ActivationEnergy extends React.Component {
  render() {
    var questions = [
      {
        question: "Enzymes cause an overall change in the free energy of a reaction.",
        answers: ["true", "false"],
        answer: "false"
      },
      {
        question: "Enzymes lower the activation energy of a reaction.",
        answers: ["true", "false"],
        answer: "true"
      },
      {
        question: "Enzymes bind to substrates at their active site.",
        answers: ["true", "false"],
        answer: "true"
      },
      {
        question: "One enzyme often can bind to many substrates.",
        answers: ["true", "false"],
        answer: "false"
      }
    ];

    return (
      <div>
        <h2>Enzymes and Activation Energy</h2>
        <p>Many important reactions in the cell would not occur without enzymes acting as
        catalysts. For each reaction, even favorable ones, a certain amount of energy input is
        needed to get the reaction started. This is known as the Activation Energy. You can think
        of the reactants as a boulder sitting on top of a hill. The ball has potential energy and
        favors rolling down the hill. It won't move, however, until it is given a push to get it
        rolling.</p>
        <img src='img/img1.gif' />
        <p>Similarly, an enzyme lowers the activation energy of a reaction by binding to substrates
        and providing the proper environment for reactions to proceed. It is important to note that
        enzymes do not change the overall Free Energy of a reaction. The reactions take place
        without enzymes but with greatly decreased frequency because of the random motion of
        molecules.</p>
        <img src='img/img2.jpg' />
        <p>Enzymes increase the rate of these reactions and are therefore, important in every
        complex metabolic pathway. Take, for example, cellular respiration. This process is,
        overall, an exergonic one. Imagine, however, trying to convert the food you eat into
        chemical energy your body can use without enzymes. The number of steps in this pathway
        would make this kind of spontaneous reaction virtually impossible because the rate of
        reaction would be infinitely small compared to the rate of consumption. Enzymes accomplish
        this important role by specifically binding to certain substrates (or close relatives) at
        the active site. The enzymes "hug" the substrates in a form called induced fit.</p>
        <img src="img/img3.jpg" />
        <p>Here, the side chains of the enzyme can interact with the substrate to facilitate the
        reaction.</p>
        <hr/>
        <h3>Some Helpful Videos</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/j00Ep0Byu0Y"></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YacsIU97OFc"></iframe>
        <div style={{height: '32'}}></div>
        <hr />
        <h3>Practice</h3>
        <Practice questions={questions} />
      </div>
    );
  }
}

module.exports = ActivationEnergy;
