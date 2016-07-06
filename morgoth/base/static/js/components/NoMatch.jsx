import React from 'react';
import { browserHistory } from 'react-router';

import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton'
import { amber500 } from 'material-ui/styles/colors';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionReportProblem from 'material-ui/svg-icons/action/report-problem';
import Paper from 'material-ui/Paper';


class NoMatch extends React.Component {
  handleClick() {
    browserHistory.push('/');
  }

  render() {
    return (
      <Paper zDepth={2} className="no-match">
        <Avatar
          icon={<ActionReportProblem />}
          backgroundColor={amber500}
          size={96}
        />
        <p>Are you lost?</p>
        <p>
          <RaisedButton
            onClick={this.handleClick}
            primary={true}
            label="Go back home"
            icon={<ActionHome />}
          />
        </p>
      </Paper>
    )
  }
}

export default NoMatch;
