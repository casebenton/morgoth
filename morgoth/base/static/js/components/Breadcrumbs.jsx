import React, { PropTypes as pt } from 'react';
import { Link } from 'react-router';

class Crumb extends React.Component {
  render() {
    const { path, title } = this.props.route;

    return (
      <li>
        <Link to={path}>{title || path}</Link>
      </li>
    );
  }
}

Crumb.propTypes = {
  route: pt.object.isRequired
};

class Breadcrumbs extends React.Component {
  render() {
    const { routes } = this.props;

    return (
      <ul className="breadcrumbs">
        {routes.map((route, index) => {
          if (route.path && route.path != '*') {
            return <Crumb route={route} key={index}/>
          }
        })}
      </ul>
    );
  }
}

Breadcrumbs.propTypes = {
  routes: pt.array.isRequired
};

export default Breadcrumbs;
