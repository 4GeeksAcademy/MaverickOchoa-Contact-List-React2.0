import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

const initailContact = {
	"name": "",
	"email": "",
	"phone": "",
	"address": "",
}

export const Single = () => {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState(initailContact)



	const handleChange = (event) => {
		setContact({
			...contact,
			[event.target.name]: event.target.value
		})
	}



	const handleUpdate = async (id) => {
		actions.upDateContact(id)
	}

	return (
		<div className="container">

			<form className="mt-5 " >
				<h1 className="text-center">Update contact</h1>
				<div className="mb-3">
					<label className="form-label">Full Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={contact.name}
						placeholder="Full Name"
						onChange={handleChange}

					/>

				</div>
				<div className="mb-3">
					<label className="form-label">Email</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						value={contact.email}
						placeholder="Enrer email"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Phone</label>
					<input
						type="number"
						className="form-control"
						id="phone"
						name="phone"
						value={contact.phone}
						placeholder="Enter phone"
						onChange={handleChange}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Address</label>
					<input
						type="text"
						className="form-control"
						id="address"
						name="address"
						value={contact.address}
						placeholder="Enter address"
						onChange={handleChange}
					/>
				</div>
				<button type="button" onClick={() => handleUpdate()} className="col-12 btn btn-primary" >Submit</button>
			</form>


			<div>


			</div>
			<Link to="/">
				<span className="">or get back to contact</span>
			</Link>

		</div>
	);
};
