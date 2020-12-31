import { h } from "preact";

const style = require("../style/learn.module.css");

export default ({ card: { vector, title, description, buttonText, link } }) => {
	const htmlDecode = (input) => {
		let doc = new DOMParser().parseFromString(input, "text/html");
		return doc.documentElement.textContent;
	}
	console.log(description);
	console.log(htmlDecode(description))

	return (
		<div className={style.card}>
			<i className={[vector, style.vector].join(" ")} /><div className={style.title}>{title}</div>
			<div className={style.description}>{htmlDecode(description)}</div>
			<a href={link} target="_blank"><div className={style.buttonText}>{buttonText}</div></a>
		</div>
	)
}