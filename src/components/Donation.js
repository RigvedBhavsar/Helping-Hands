import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import M from 'materialize-css';
import './Donation.css';

const Donation = () => {

    const history = useHistory();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState(null);
    const [service, setService] = useState('');

    const makeAppointment = () => {
        fetch("/addAppointment", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                name,
                address,
                date,
                service
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                else {
                    M.toast({ html: "Thank You For Donating !", classes: "#43a047 green darken-1" })
                    history.push('/');
                }
            }).catch(err => {
                console.log(err);
            })
    }

    const handleSelectOptions= (event)=>
    {
        let value = Array.from(
            event.target.selectedOptions,
            (option) => option.value
          );
          setService(value);
    }

    useEffect(() => {
        M.AutoInit();
    })

    return (
        <div className="my-card-appt">
        <div className="card auth-card-appt input-field">
            <h4 className="font">Make Donation</h4>
            <div className="input-field">
                <input type="text" value={name} placeholder="Donar Name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-field">
                <input type="text" value={address} placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
            </div>

            <div className="input-field col s12">
                {/* <select value={service}  onChange={(e) => setService(e.target.value)}> */}
                <select value={service} multiple={true}  onChange={handleSelectOptions}>
                    <option value="" disabled selected>Donating</option>
                    <option className="selectOption" value="Clothes ">Clothes</option>
                    <option value="  Books ">Books</option>
                    <option value="  Novels ">Novels</option>
                    <option value="  Toys ">Toys</option>
                    <option value="  Fruits ">Fruits</option>
                    <option value="  Colors ">Colors</option>
                    <option value="  Sketch Books ">Sketch Books</option>
                    <option value="  Craft Things ">Craft Things</option>
                    <option value="  Lamps ">Lamps</option>
                    <option value="  Decoration Things ">Decoration Things</option>
                    <option value="  Study Material ">Study Material</option>
                   
                </select>
            </div>
            <div>
                <DatePicker selected={date} dateformat='dd/MM/yy' minDate={new Date()} onChange={d => setDate(d)} placeholderText="Select Date" />
                <h6 className="font">Timmig : 10 AM To 6 PM</h6>
            </div>
            <div>
                <button style={{ marginTop: "20px" }} className="waves-light btn #f57f17 yellow darken-4" onClick={() => makeAppointment()}>Donate</button>
            </div>
        </div>
    </div>
    )
}

export default Donation
