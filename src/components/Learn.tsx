import { h } from "preact";
import LearnCard from './LearnCard';

const style = require("../style/learn.module.css");

this.state = {
	info: [
		{
			vector: "fab fa-galactic-republic",
			title: "Dex",
			description: "A comprehensive list of Pok&eacute;mon, items, abilities, and other data across every generation",
			buttonText: "View Dex",
			link: "https://www.smogon.com/dex/",
		},
		{
			vector: "fas fa-newspaper",
			title: "Flying Press",
			description: "Articles about competitive battling, tier lists, tournaments, and everything related to Pok&eacute;mon",
			buttonText: "Read Articles",
			link: "https://www.smogon.com/articles/",
		},
		{
			vector: "far fa-newspaper",
			title: "In-Game Guides",
			description: "Tutorials and tips for Pok&eacute;mon games to conquer the battle tower, battle your friends, or find general information",
			buttonText: "Read Guides",
			link: "https://www.smogon.com/ingame/",
		},
		{
			vector: "fab fa-jedi-order",
			title: "Battling 101",
			description: "Learn from the best players in the field and make a name for yourself",
			buttonText: "View Forum",
			link: "https://www.smogon.com/forums/forums/battling-101.42/",
		}
	]
}

export default () => {
	return (
		<section>
			<div> 
				<h1><i class="fas fa-book-reader" /> Learn</h1>
				<div>
					{this.state.info.map((card) => (
							<LearnCard key={card.title} card={card} />
					))}
				</div>
			</div>
		</section>
	)
}