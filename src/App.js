import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import InsertionSort from "./components/insertion-sort";
import DFS from "./components/dfs";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

function App() {
	const classes = useStyles();
	return (
		<Router>
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							<Link to="/" style={{ textDecoration: "none", color: "white" }}>
								Vis-Algo
							</Link>
						</Typography>

						<Link to="/insertion-sort" style={{ textDecoration: "none" }}>
							<Button style={{ color: "white" }}> Insertion Sort </Button>
						</Link>
						<Link to="/dfs" style={{ textDecoration: "none" }}>
							<Button style={{ color: "white" }}> Depth First Search </Button>
						</Link>
					</Toolbar>
				</AppBar>
			</div>
			<Switch>
				<Route path="/" exact></Route>
				<Route path="/insertion-sort" component={InsertionSort}></Route>
				<Route path="/dfs" component={DFS}></Route>
			</Switch>
		</Router>
	);
}

export default App;
