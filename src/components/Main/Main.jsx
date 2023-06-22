import { useEffect, useState } from "react";
import api from "../../utils/Api.js";
import Card from "../Card/Card.jsx";


export default function Main({onEditProfile, onEditAvatarProfile, onAddPlace, onCardClick, onBucketClick}) {

    const [userName, setUserName] = useState("")
    const [userDescription, setuserDescription] = useState("")
    const [userAvatar, setuserAvatar] = useState("")
    const [cards, setCards] = useState([])

    useEffect(() =>{

        Promise.all([api.getInfo(), api.getCards()])
        .then(([dataUser, dataCard])  =>{
            setUserName(dataUser.name)
            setuserDescription(dataUser.about)
            setuserAvatar(dataUser.avatar)
            dataCard.forEach(
                data => data.myid = dataUser._id
           
            );
            setCards(dataCard)
        })

    },[])

    return (
        <main>
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar-content">
                        <button className="profile__button-avatar" type="button"  onClick={onEditAvatarProfile}/>
                        <img className="profile__avatar" alt="Фотография профиля" src={userAvatar} />
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__name" > {userName} </h1>
                        <button className="profile__button-edit decoration" type="button" onClick = {onEditProfile} />
                        <p className="profile__description" >{userDescription}</p>
                    </div>
                </div>
                <button className="profile__button-add decoration" type="button" onClick={onAddPlace}/>
            </section>
            <section className="elements">{cards.map(data => 
                {
                    return (
                        <div className="element" key={data._id}> <Card card={data} onCardClick={onCardClick} onBucketClick={onBucketClick}/> </div>
                    )
                }
                )}</section>
        </main>
    );
}