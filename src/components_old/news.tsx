import { h } from "preact";
import NewsFetcher from "./news-fetcher"
const style = require("../style_old/news.module.css");

export default () => {
	return (
		<section className={style.news}>
			<div className={style.newsCont}>
				<h1><i class="fas fa-newspaper"></i> Latest News</h1>
				<div className={style.newsGrid}> 
					<div>
						<NewsFetcher />
					</div>
				
					<div className={[style.shadow, style.twitter].join(" ")}>
						<a class="twitter-timeline" data-height="900" data-chrome="nofooter noborders" href="https://twitter.com/SmogonU?ref_src=twsrc%5Etfw">Tweets by SmogonU</a>
					</div>
				</div>
			</div>
		</section>

	)
}