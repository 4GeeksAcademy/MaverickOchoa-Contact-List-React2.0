const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contact: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			getAllcontacts: async () => {
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/maverick/contacts`)
					let data = await response.json()
					console.log(data)
					let store = getStore()

					if (response.status == 404) {
						getActions().creatAgenda()
					} else {
						setStore({ ...store, contact: data.contacts })
					}

				} catch (error) {
					console.log(error)
				}
			},
			addContact: async (newContact) => {
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/maverick/contacts`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(newContact)
					})
					if (response.ok) {
						getActions().getAllcontacts()
						return true
					}
				} catch (error) {
					console.log(error)
				}
				console.log(newContact)

			},
			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/maverick/contacts/${id}`, {
						method: "DELETE",
					});
					if (response.ok) {
						getActions().getAllcontacts()
						return true
					}
					// Optionally, handle the response here if needed
					console.log('Contact deleted successfully');

					console.log(response);

				} catch (error) {
					console.error('Error deleting contact:', error);
				}
			},
			upDateContact: async (id, updatedContact) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/maverick/contacts/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(updatedContact)
					});
					if (response.ok) {
						getActions().getAllcontacts()
						return true
					}
				} catch (error) {
					console.error("Error updating contact:", error);
				}
			},
			creatAgenda: async (newAgenda) => {
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/maverick`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(newAgenda)
					})
				} catch (error) {
					console.log(error)

				}
			}
		}
	};
};

export default getState;
