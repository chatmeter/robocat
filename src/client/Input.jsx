import React from "react";
import PropTypes from "prop-types";

export default class Input extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    loading: PropTypes.bool
  };

  state = {
    lastSubmittedWebsite: null,
    website: ""
  };

  submit = () => {
    this.setState({ lastSubmittedWebsite: this.state.website });
    const prefix = this.state.website.match(/^http/) ? "" : "http://"
    this.props.onSubmit(prefix + this.state.website);
  };

  canSubmit() {
    return (
      !!this.state.website &&
      this.state.website.includes(".") &&
      !this.props.loading
    );
  }

  onWebsiteChanged = e => {
    this.setState({ website: e.target.value });
  };

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="http://www.website.com"
          value={this.state.website}
          onChange={this.onWebsiteChanged}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            disabled={!this.canSubmit()}
            onClick={this.submit}
          >
            {this.props.loading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Submit
          </button>
        </div>
      </div>
    );
  }
}
