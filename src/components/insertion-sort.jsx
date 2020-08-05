import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class InsertionSort extends Component {
	constructor(props) {
		super(props);
		this.genArray = this.genArray.bind(this);
		this.sortArr = this.sortArr.bind(this);
		this.sleep = this.sleep.bind(this);
		this.state = {
			array: [],
			color: [],
		};
	}

	genArray() {
		var arr = [];
		var color = [];
		for (var i = 0; i < 15; ++i) {
			arr.push(Math.floor(Math.random() * 100));
			color.push("blue");
		}
		this.setState({ array: arr, color: color });
	}

	sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async sortArr() {
		var arr = [...this.state.array];
		var arrSet = [...this.state.array];
		var color = [...this.state.color];
		var commands = [];
		for (let i = 1; i < arr.length; i++) {
			let key = arr[i];
			let j = i - 1;
			while (j >= 0 && arr[j] > key) {
				commands.push({ first: j + 1, second: j, op: "inspect" });
				commands.push({ first: j + 1, second: j, op: "swap" });
				arr[j + 1] = arr[j];
				j = j - 1;
			}
			arr[j + 1] = key;
		}
		commands.push({ op: "completed" });
		let lastAction = "";
		let swap1 = -1;
		let swap2 = -2;
		//console.log(commands);
		for (let i = 0; i < commands.length; i++) {
			if (lastAction === "swap") {
				color[swap1] = "blue";
				color[swap2] = "blue";
			}

			if (commands[i]["op"] === "inspect") {
				let i1 = commands[i]["first"];
				let i2 = commands[i]["second"];
				color[i1] = "red";
				color[i2] = "red";
				lastAction = "inspect";
				this.setState({ color: color });
			}
			if (commands[i]["op"] === "swap") {
				let i1 = commands[i]["first"];
				let i2 = commands[i]["second"];
				color[i1] = "yellow";
				color[i2] = "yellow";
				let temp = arrSet[i1];
				arrSet[i1] = arrSet[i2];
				arrSet[i2] = temp;
				lastAction = "swap";
				swap1 = i1;
				swap2 = i2;
				this.setState({ color: color, array: arrSet });
			}
			if (commands[i]["op"] === "completed") {
				for (let k = 0; k < color.length; ++k) {
					color[k] = "green";
				}
				lastAction = "completed";

				this.setState({ color: color });
			}
			await this.sleep(100);
		}
		console.log(this.state);
	}
	render() {
		return (
			<div style={{ margin: 10 }}>
				<Button onClick={this.genArray}>Generate New Array</Button>
				<Button onClick={this.sortArr}>Sort</Button>
				<br />
				<br />
				<div>
					{this.state.array.map((elem, idx) => {
						console.log(elem, idx);
						return (
							<div
								key={idx}
								style={{
									height: elem * 4,
									width: 40,
									float: "left",
									marginRight: 3,
									backgroundColor: this.state.color[idx],
									color: "red",
								}}
							>
								{elem}
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default InsertionSort;
