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
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getAllcontacts: async () => {
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/maverick/contacts`)
					let data = await response.json()
					console.log(data)
					let store = getStore()
					setStore({ ...store, contact: data.contacts })
					// if (response.status == 404) {

					// } else {
					// 	getAllcontacts()
					// }

				} catch (error) {
					console.log(error)
				}
			},

			addContact: async (newContact) => {
				
				{/*const store = getStore();
				setStore({ contacts: [...store.contacts, newContact] })*/}
				console.log(newContact)
			}
		}
	};
};

export default getState;
