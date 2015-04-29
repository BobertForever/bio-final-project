var React                 = require('react');
    Router                = require('react-router'),
    mui                   = require('material-ui'),
    injectTapEventPlugin  = require('react-tap-event-plugin');

var { AppCanvas, AppBar, Paper, LeftNav } = mui;
var { Route, DefaultRoute, RouteHandler } = Router;

/* Components */
var Index             = require('./components/index')
    About             = require('./components/about'),
    ActivationEnergy  = require('./components/activation-energy'),
    SubstrateDiagram  = require('./components/substrate-diagram'),
    Ingredients       = require('./components/ingredients'),
    InsideEnzyme      = require('./components/inside-enzyme'),
    EnzymePolice      = require('./components/enzyme-police');

/* Necessary for certain tap components to work */
injectTapEventPlugin();

/* React gloabal variable for React DevTools */
window.React = React;

/* Menu items and handlers */
menuItems = [
  {
    route: 'what-are-enzymes',
    text: 'What are Enzymes?',
    handler: About
  },
  {
    route: 'enzymes-and-activation-energy',
    text: 'Enzymes and Activation Energy',
    handler: ActivationEnergy
  },
  {
    route: 'substrate-diagram',
    text: 'Substrate Diagram',
    handler: SubstrateDiagram
  },
  {
    route: 'enzyme-ingredients',
    text: 'Enzyme Ingredients',
    handler: Ingredients
  },
  {
    route: 'inside-the-enzyme',
    text: 'Inside the Enzyme',
    handler: InsideEnzyme
  },
  {
    route: 'enzyme-police',
    text: 'Regulation of Enzyme Activity',
    handler: EnzymePolice
  }
];

/* Master handler */
class Master extends React.Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, selectedIndex, menuItem) {
    this.context.router.transitionTo(menuItem['route']);
  }

  render() {
    return (
      <AppCanvas predefinedLayout={1}>
        <AppBar
          title="Bio 311C Final Project"
          onMenuIconButtonTouchTap={() => this.refs.leftnav.toggle()}
          zDepth={1} />

        <LeftNav
          docked={false}
          menuItems={menuItems}
          ref="leftnav"
          onChange={this.onChange} />

        <div className="container-fluid">
          <div className="col-md-8 col-md-offset-2 offset">
            <Paper zDepth={1} className="white">
              <RouteHandler />
            </Paper>
          </div>
        </div>
      </AppCanvas>
    );
  }
}

Master.contextTypes = {
  router: React.PropTypes.func
};

/* Setup the routes */
var appRoutes = (
  <Route name="root" path="/" handler={Master}>
    {menuItems.map(function(result) {
      return <Route key={result.route} name={result.route} handler={result.handler} />
    })}

    <DefaultRoute handler={Index} />
  </Route>
);

/* Render the React app */
Router.run(appRoutes, function(Handler) {
  React.render(<Handler />, document.getElementById('content'))
});
