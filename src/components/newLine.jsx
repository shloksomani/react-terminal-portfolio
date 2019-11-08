import React, { Component } from "react";

export class NewLine extends Component {
	state = {
		id: this.props.line.id,
		value: this.props.line.value,
		displayInput: this.props.line.displayInput
	};

	focusInput = component => {
		if (component) {
			component.focus();
		}
	};

	render() {
		return (
			<React.Fragment>
				<p className={this.badgeChange()}>
					{this.props.displayInput && (
						<input
							type="text"
							className="here"
							ref={this.focusInput}
							value={this.state.value}
							onChange={this.handleChange}
							onKeyDown={this.handelEnter}
							autoFocus
						/>
					)}
					{this.state.value}
				</p>
			</React.Fragment>
		);
	}

	handleChange = event => {
		this.setState({ value: event.target.value });

		// console.log(event.target.value);
	};

	handelEnter = event => {
		if (event.key === "Enter") {
			this.props.handelWhatever(event.target.value, this.state.id);
		}
	};

	badgeChange() {
		let badge = "prompt ";
		badge += this.props.displayInput ? "output new-output" : "";
		return badge;
	}
}

export default NewLine;
