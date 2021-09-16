import "./App.css";
import React, { useState } from "react";
import MainWrapper from "./components/MainWrapper/MainWrapper";
import Form from "./components/Form/Form";
import Results from "./components/Results/Results";

function App() {
	const USERS_INITIAL_STATE = [
		{
			name: "Paolo",
			surname: "Ingrassia",
			email: "paolo@gmail.com",
		},
		{
			name: "Giovanni",
			surname: "Rossi",
			email: "giovanni@gmail.com",
		},
		{
			name: "Paola",
			surname: "Assani",
			email: "paola@gmail.com",
		},
		{
			name: "Marco",
			surname: "Volecchio",
			email: "marco@gmail.com",
		},
	];

	const [users, setNewUser] = useState(USERS_INITIAL_STATE);

	const getEnteredUser = (newUser) => {
		setNewUser((prevUser) => {
			return [newUser, ...prevUser];
		});
	};

	const getDeletedUser = (deletedUser) => {
		let deletedUserList = users.filter((user) => {
			return (
				deletedUser.name !== user.name &&
				deletedUser.surname !== user.surname &&
				deletedUser.email !== user.email
			);
		});
		if (deletedUserList.length !== users.length) {
			alert("User deleted.");
			setNewUser(deletedUserList);
		} else {
			alert("User doesn't exist in the list.");
		}
	};
	const sortList = () => {
		let copyUsers = JSON.parse(JSON.stringify(users));
		let sortedList = copyUsers.sort((a, b) => {
			let nameA = a.name.toUpperCase();
			let nameB = b.name.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});

		setNewUser(sortedList);
	};
	return (
		<MainWrapper>
			<Form getEnteredUser={getEnteredUser} getDeletedUser={getDeletedUser} />
			<Results users={users} sortList={sortList} />
		</MainWrapper>
	);
}

export default App;
