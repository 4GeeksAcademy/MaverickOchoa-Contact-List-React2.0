import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context)
	const { contact } = store
	console.log(contact.name)

	return (
		<div className="text-center m-5">
			<div className="d-flex justify-content-end">
				<Link to="/demo">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
			<div className="cards mt-3">
				<div className="col-3">
					<img src="https://pics.craiyon.com/2023-07-31/bb9ac57c48ed4535ba0855f9dcc5097f.webp" class="card-img-top" alt="..." />
				</div>

				<div className=" info col-7 mt-3 ">
					<h5 className="">{contact.name}</h5>
					<p className=""><i class="fa-solid fa-phone">	{contact.address}</i></p>
					<p className=""><i class="fa-solid fa-phone">	{contact.phone}</i></p>
					<p className=""><i class="fa-solid fa-envelope">	{contact.email}</i></p>
				</div>
				<div className="col-2 d-flex justify-content-evenly mt-3">
					<div>
						<button><i class="fa-solid fa-trash"></i></button>
					</div>
					<div>
						<button><i class="fa-solid fa-trash"></i></button>
					</div>
				</div>


			</div>
		</div>
	)

};
