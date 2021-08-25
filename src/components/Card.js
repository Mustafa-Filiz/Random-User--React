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
        .then(res => setItem(res.data))
    }, [refresh])

    return (
        <div>
            <div className="card">
                <div className="box">
                    <img src="" alt="" />
                    <h1>Mustafa FİLİZ</h1>
                </div>
                <div className="box">
                    <img className="icon" src={emailIcon} alt="email" />
                    <p>email@email.com</p>
                </div>
                <div className="box">
                    <img className="icon" src={phoneIcon} alt="phone" />
                    <p>0543218554687</p>
                </div>
                <div className="box">
                    <img className="icon" src={locationIcon} alt="location" />
                    <p>Osmaniye</p>
                </div>
                <div className="footer">
                    <p>Age: 28</p>
                    <p>Registration Date : 07-07-2021</p>
                </div>
            </div>

            <button>Random User</button>
        </div>
    )
}

export default Card
