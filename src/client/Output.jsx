import React from "react";
import PropTypes from "prop-types";

export default class Output extends React.Component {
  static propTypes = {
    err: PropTypes.any,
    results: PropTypes.any
  };
  render() {
    if (this.props.err) {
      return (
        <div className="alert alert-danger">
          <h4>😿 Could not find friends</h4>
          <pre>
            <code>
              {this.props.err.message}: {this.props.err.stack}
              {this.props.err.response
                ? JSON.stringify(this.props.err.response.data, undefined, 2)
                : undefined}
            </code>
          </pre>
        </div>
      );
    } else if (this.props.results) {
      return (
        <pre>
          <code>{JSON.stringify(this.props.results, undefined, 2)}</code>
        </pre>
      );
    } else {
      return <div className="alert alert-info">😾 Find me some friends!</div>;
    }
  }
}
