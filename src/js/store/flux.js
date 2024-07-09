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
			contact: {
				name: "Huttman Ochoa",
				email: "huttma@hotmail.com.jajaj",
				phone: "214-123-4567",
				address: "alem st 1410"
			}
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
					let response = await fetch(`https://playground.4geeks.com/contact/docs/agendas?offset=0&limit=100`)
					let data = await response.json()

					if (response.status == 404) {
						creatAgenda()
						updateAgenda()
					} else {
						getAllcontacts()
					}
				} catch (error) {
					console.log(getAllcontacts)
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
