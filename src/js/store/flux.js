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
					setStore({ ...store, contact: data.contacts })
					if (response.status == 404) {

					} else {
						getAllcontacts()
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
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					// Optionally, handle the response here if needed
					console.log('Contact deleted successfully');
					setStore({
						contact: getStore().contact.filter(contact => contact.id !== id)
					});
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
						body: JSON.stringify(id, updatedContact)
					});
					if (response.ok) {
						console.log("Successfully updated");
					} else {
						console.error("Failed to update contact");
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
