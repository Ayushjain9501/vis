import React, { Component } from "react";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import "./grid.css";
class DFS extends Component {
	constructor(props) {
		super(props);
		this.divClick = this.divClick.bind(this);
		this.grid = this.grid.bind(this);
		this.state = {};
	}

	divClick(key) {
		console.log(key, " is clicked");
	}

	grid(colwidth) {
		let ret = [];
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 50; j++) {
				let keyName = i.toString() + "-" + j.toString();
				console.log(keyName);
				ret.push(
					<GridListTile
						key={keyName}
						cols={1}
						style={{ margin: 0, padding: 0 }}
					>
						<div
							key={keyName}
							style={{
								margin: 0,
								padding: 0,
								backgroundColor: "white",
								height: colwidth,
								width: colwidth,
								cursor: "pointer",
							}}
							className="grid"
							onClick={() => {
								this.divClick(keyName);
							}}
						></div>
					</GridListTile>
				);
			}
		}

		return ret;
	}

	render() {
		const colwidth = Math.floor(window.screen.width / 50);

		return (
			<div>
				<br />
				<br />

				<GridList
					cellHeight={colwidth}
					cols={50}
					spacing={0}
					style={{ border: "1px solid black" }}
				>
					{this.grid(colwidth)}
				</GridList>
			</div>
		);
	}
}

export default DFS;
