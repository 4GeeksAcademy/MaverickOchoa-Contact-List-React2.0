import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useActionData } from "react-router-dom";


import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context)
	const { contact } = store


	useEffect(() => {
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

					<div className=" info col-7 mt-3 ">
						<h4 className="">{item.name}</h4>

						<i className="fa-solid fa-location-dot">{item.address}</i>
						<p className=""><i className="fa-solid fa-phone">	{item.phone}</i></p>
						<p className=""><i className="fa-solid fa-envelope">	{item.email}</i></p>
					</div>
					<div className="col-2 d-flex justify-content-evenly mt-3">
						<div>
							<button><i className="fa-solid fa-trash"></i></button>
						</div>
						<div>
							<button><i className="fa-solid fa-trash"></i></button>
						</div>
					</div>


				</div>
			))}
		</div>
	)

};
