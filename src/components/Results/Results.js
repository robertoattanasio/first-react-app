import React from "react";

import "./Results.css";

function Results(props) {
	const sortListHandler = () => {
		props.sortList();
	};
	return (
		<div className="results">
			{props.users.length === 0 && (
				<div className="data-field">
					<p>No data found on server.</p>
				</div>
			)}
			{props.users.length !== 0 && (
				<div className="data-field">
					{props.users.map((item, index) => {
						return (
							<ul key={index}>
								<li>{item.name}</li>
								<li>{item.surname}</li>
								<li>{item.email}</li>
							</ul>
						);
					})}
				</div>
			)}

			<div className="buttons">
				<button type="button" onClick={sortListHandler}>
					Order List
				</button>
			</div>
		</div>
	);
}

export default Results;
