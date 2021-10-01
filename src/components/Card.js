import React, {useEffect, useState} from 'react'
import emailIcon from "../assets/email.svg"
import locationIcon from "../assets/location.svg"
import phoneIcon from "../assets/phone.svg"
import "./Card.css"
import axios from 'axios'

const Card = () => {
    const [item, setItem] = useState("");
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        axios.get("https://randomuser.me/api/")
        .then(res => setItem(res.data.results[0]))
    }, [refresh])

    console.log(item)

    return (
        <div className="d-flex flex-column justify-content-center">
            <div className="card">
                <div className="box">
                    <img id="pp" src={item?.picture?.large} alt="pp" />
                    <h1>{item?.name?.title} {item?.name?.first} {item?.name?.last}</h1>
                </div>
                <div className="box">
                    <img className="icon" src={emailIcon} alt="email" />
                    <p>{item?.email}</p>
                </div>
                <div className="box">
                    <img className="icon" src={phoneIcon} alt="phone" />
                    <p>{item?.phone}</p>
                </div>
                <div className="box">
                    <img className="icon" src={locationIcon} alt="location" />
                    <p>{item?.location?.city} / {item?.location?.country}</p>
                </div>
                <div className="footer">
                    <p>Age: {item?.dob?.age}</p>
                    <p>Registration Date : {item?.registered?.date.slice(0,10)}</p>
                </div>
            </div>

            <button type="button" className="btn btn-primary mt-2" onClick={() => setRefresh(!refresh)}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
            </svg></button>
        </div>
    )
}

export default Card
