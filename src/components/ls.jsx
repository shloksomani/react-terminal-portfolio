import React, { Component } from "react";

export class Ls extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};

	style = {
		listStyleType: "none"
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.type} </p>
				<ul style={this.style}>
					{this.props.subDir.map(l => (
						<li key={l.id} className="result">
							{l.type}
						</li>
					))}
				</ul>
			</React.Fragment>
		);
	}
}

export default Ls;
