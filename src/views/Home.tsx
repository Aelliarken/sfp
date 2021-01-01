import { h } from "preact";
import Learn from "../components/Learn"
import Header from "../components/Header"

const style = require("../style/style.module.css");

export const Home = () => 
	<div>
		<Header />
		<Learn />
	</div>