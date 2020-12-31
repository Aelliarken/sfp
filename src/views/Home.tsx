import { h } from "preact";
import Learn from "../components/Learn"

const style = require("../style/style.module.css");

export const Home = () => 
	<div>
		<div className={style.test}>Hello</div>
		<Learn />
	</div>