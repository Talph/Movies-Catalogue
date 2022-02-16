import React from "react";
import Logo from "../../imdb.png";
import noImage from "../../assets/images.jpg";
import "./card.styles.css";
import "./grid-card.styles.css";
import "./list-card.styles.css";

export const Card = (props) => (
	// Movie card content
	<div className="column-list col-sm-6 col-md-3 col-lg-2 p-2">
		<hr className="displayOnList"/>
		<div className="card-container ">
			<div className="image-container cursor-pointer">
				<img
					src={`${props.movie.posterurl ? props.movie.posterurl : noImage}`}
					onError={(e) => (e.target.style.display = "none")}
					className="image"
					width="100%"
					height="auto"
					alt="movie"
				/>
			</div>
			<div className="card-content">
				<div className="title position-relative">
					<div title="Content Rating" className={`float-end ${props.movie.contentRating ? 'badge bg-danger' : ''}`}> {props.movie.contentRating}</div>
					<h6 className="fw-bold text-white"> {props.movie.title}</h6>
					<small className="text-muted">{props.movie.year}</small>
				</div>
				<div className="hover-content">
					<p className="ratings">
						{" "}
						<img
							src={props.movie.imdbRating ? Logo : ""}
							onError={(e) => (e.target.style.display = "none")}
							width="25"
							height="25"
							alt="imdb"
						/>{" "}
						<span className="imdb fw-bold text-white">
							{props.movie.imdbRating ? props.movie.imdbRating : ""}
						</span>
					</p>
					<h4 className="text-white genres">
						{props.movie.genres.map((list) => (
							<span key={list}>{list} </span>
						))}
					</h4>
				</div>
				<div className="content">
					<p><em>{props.movie.storyline}</em></p>
					<p> <span className="fw-bold">Actors: </span>
						{props.movie.actors.map((list, i) => (<span key={list}>{i > 0 && ", "}{list} </span>
						))}

					</p>
				</div>
			</div>
		</div>
	</div>
);
