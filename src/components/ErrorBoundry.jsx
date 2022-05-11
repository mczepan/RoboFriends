import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error, errorInfo) {
		this.setState({ hasError: true });
	}
	render() {
		return this.state.hasError ? (
			<div>
				<h1>There is some sort of error.</h1>
			</div>
		) : (
			this.props.children
		);
	}
}
