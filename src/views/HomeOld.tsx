import { h, Fragment } from "preact";
import Footer from "../components_old/footer";
import Filler from "../components_old/filler";
import News from "../components_old/news";
import Learn from "../components_old/learn";
import Top from "../components_old/top";
import Header from "../components_old/header";

// const style = require("../style_old/main.module.css");

export const HomeOld = () =>
	<Fragment>
		<Header />
		<Top />
		<Learn />
		<News />
		<Filler />
		<Footer />
	</Fragment>
