import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useActionData } from "react-router-dom";
import { Demo } from "./addContacts";
import { Single } from "./updateContact";


import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context)
	const { contact } = store
	console.log(contact)

	const handleDelete = async (id) => {
		actions.deleteContact(id)
	}


	useEffect(() => {
		actions.creatAgenda()
		actions.getAllcontacts()
	}, [])

	return (
		<div className="text-center m-5">
			<div className="d-flex justify-content-end">
				<Link to="/demo">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>

			{store.contact.map((item, index) => (
				<div className="cards mt-3" key={index}>
					<div className="col-3">
						<img src="https://pics.craiyon.com/2023-07-31/bb9ac57c48ed4535ba0855f9dcc5097f.webp" className="card-img-top" alt="..." />
					</div>

					<div className=" info col-7 my-3 ">
						<h4 className="title">{item.name}</h4>
						<div className="d-flex align-items-center my-1">
							<i className=" icons fa-solid fa-location-dot"> </i> <p>{item.address}</p>
						</div>
						<div className="d-flex align-items-center my-1">
							<i className=" icons fa-solid fa-phone">	</i><p >{item.phone}</p>
						</div>
						<div className="d-flex align-items-center my-1">
							<i className=" icons fa-solid fa-envelope">	</i><p className="">{item.email}</p>
						</div>
					</div>
					<div className="col-2 d-flex justify-content-evenly mt-4">

						<div>
							<Link to="/single" className="icon2"  ><i className="fa-solid fa-pencil"></i></Link>
						</div>
						<div>
							<button className="icon2" onClick={() => handleDelete(item.id)}><i className="fa-solid fa-trash  "></i></button>
						</div>
					</div>


				</div>
			))}
		</div>
	)

};
