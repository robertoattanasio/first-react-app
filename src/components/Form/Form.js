import React, { useState } from "react";
import "./Form.css";

function Form(props) {
	// const [userInput, setUserInput] = useState({
	// 	name: "",
	// 	surname: "",
	// 	email: "",
	// });

	// console.log(props);

	// USE STATE HOOKS
	const [enteredName, setEnteredName] = useState("");
	const [enteredSurname, setEnteredSurname] = useState("");
	const [enteredEmail, setEnteredEmail] = useState("");

	// HANDLER FORM
	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
		// 	setUserInput({
		// 		...userInput,
		// 		name: event.target.value,
		// 	});
	};
	const surnameChangeHandler = (event) => {
		setEnteredSurname(event.target.value);
		// 	setUserInput({
		// 		...userInput,
		// 		surname: event.target.value,
		// 	});
	};

	const emailChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
		// 	setUserInput({
		// 		...userInput,
		// 		email: event.target.value,
		// 	});
	};

	// NEW USER FUNCTION
	const newUser = (event) => {
		event.preventDefault();

		let newUser = {
			name: enteredName,
			surname: enteredSurname,
			email: enteredEmail,
		};

		props.getEnteredUser(newUser);
		setEnteredName("");
		setEnteredSurname("");
		setEnteredEmail("");
	};

	// DELETE USER FUNCTION
	const deleteUser = () => {
		let deletedUser = {
			name: enteredName,
			surname: enteredSurname,
			email: enteredEmail,
		};
		props.getDeletedUser(deletedUser);
	};

	return (
		<form onSubmit={newUser}>
			<div className="input-field">
				<label>Name</label>
				<input type="text" value={enteredName} onChange={nameChangeHandler} />
				<label>Surname</label>
				<input
					type="text"
					value={enteredSurname}
					onChange={surnameChangeHandler}
				/>
				<label>Email</label>
				<input
					type="email"
					value={enteredEmail}
					onChange={emailChangeHandler}
				/>
			</div>
			<div className="buttons">
				<button>Subscribe</button>
				<button type="button" onClick={deleteUser}>
					Unsubscribe
				</button>
			</div>
		</form>
	);
}

export default Form;
