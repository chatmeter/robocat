import React from "react";
import ReactDOM from "react-dom";
import { getHealth } from "./apiClient";

/**
 * example of component that calls the express API
 */
export default class Health extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      healthLoading: true,
      health: null
    };
  }

  async componentDidMount() {
    try {
      const health = await getHealth();
      this.setState({
        healthLoading: false,
        health: health
      });
    } catch (err) {
      console.error("failed to fetch health", err);
    }
  }

  render() {
    const { health, healthLoading } = this.state;
    return (
      <div>
        Health:{" "}
        {healthLoading ? (
          <span>Loading...</span>
        ) : (
          <code>{JSON.stringify(health)}</code>
        )}
      </div>
    );
  }
}