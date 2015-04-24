var React                 = require('react');
    Router                = require('react-router'),
    mui                   = require('material-ui'),
    injectTapEventPlugin  = require("react-tap-event-plugin");

var { AppCanvas, AppBar, Paper, LaftNav } = mui;
var { Route, DefaultRoute, RouteHandler } = Router;

/* Necessary for certain tap components to work */
injectTapEventPlugin();

/* React gloabal variable for React DevTools */
window.React = React;

menuItems = [
  { route: 'what-are-enzymes', text: 'What are Enzymes?', handler: About },
  { route: 'enzymes-and-activation-energy', text: 'Enzymes and Activation Energy', handler: ActivationEnergy },
  { route: 'substrate-diagram', text: 'Substrate Diagram', handler: SubstrateDiagram },
  { route: 'enzyme-ingredients', text: 'Enzyme Ingredients', handler: Ingredients }
];

class Master extends React.Component {

  render() {
    return (
      <AppCanvas predefinedLayout={1}>
        <AppBar
          title="Bio 311C Final Project"
          onMenuIconButtonTouchTap={() => this.refs.left-nav.toggle()}
          zDepth={1} />

        <LeftNav docked={false} menuItems={menuItems} ref="left-nav" />

        <Paper zDepth={0}>
          <RouteHandler />
        </Paper>
      </AppCanvas>
    );
  }
}

var appRoutes = (
  <Route name="root" path="/" handler={Master}>
    {menuItems.map(function(result) {
      return <Route name={result.route} handler={result.handler} />
    })}

    <DefaultRoute handler={Index} />
  </Route>
);

Router.run(appRoutes, function(Handler) {
  React.render(<Handler />, document.getElementById('content'))
});
