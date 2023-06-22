import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import PopupWithForm from "./PopupWithForm/PopupWithForm.jsx";
import ImagePopup from "./ImagePopup/ImagePopup.jsx"
import { useState } from "react";


function App() { 

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isImagePopup, setImagePopup] = useState(false)
  const [isDeletePlacePopup, setDeletePlacePopup] = useState(false)
  
  function closeAllPropus(){
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setImagePopup(false)
    setDeletePlacePopup(false)
  }

  function handleEditAvatarClick(){
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick(){
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick(){
    setAddPlacePopupOpen(true)
  }

  function handleDeletePlaceClick(){
    setDeletePlacePopup(true)
  }

  function handleCardClick(card){
    setSelectedCard(card)
    setImagePopup(true)
    // setEvantListenerForDocument()
  }

  return (
    <div className="page">

      <Header/>

      <Main
        onEditProfile = {handleEditProfileClick}
        onEditAvatarProfile = {handleEditAvatarClick}
        onAddPlace = {handleAddPlaceClick}
        onCardClick = {handleCardClick}
        onBucketClick = {handleDeletePlaceClick}
      />

      <Footer/>



      <PopupWithForm 
      name = 'edit-profile'
      title ='Редактировать профиль'
      titleButton = 'Сохранить'
      isOpen = {isEditProfilePopupOpen}
      onClose ={closeAllPropus}
      >
        <div className="popup__input-form">
          <input
            type="text"
            name="name"
            className="form__text-input form__text-input_type_name popup__input"
            id="name"
            placeholder="Имя"
            maxLength={40}
            minLength={2}
            required=""
          />
          <span className="popup__invlid-name popup__error-span" />
        </div>
        <div className="popup__input-form">
          <input
            type="text"
            name="description"
            className="form__text-input form__text-input_type_discription popup__input"
            id="description"
            placeholder="О себе"
            maxLength={200}
            minLength={2}
            required=""
          />
          <span className="popup__error-span popup__invlid-description" />
        </div>
      </PopupWithForm>



         <PopupWithForm 
      name = 'add-card'
      title ='Новое место'
      titleButton = 'Добавить'
      isOpen={isAddPlacePopupOpen}
      onClose ={closeAllPropus}
      >
        <div className="popup__input-form">
      <input
        type="text"
        name="title"
        className="form__text-input form__text-input_type_place-name popup__input"
        id="place-name"
        placeholder="Название"
        maxLength={30}
        minLength={2}
        required=""
      />
      <span className="popup__error-span popup__invlid-title" />
    </div>
    <div className="popup__input-form">
      <input
        type="url"
        name="link"
        className="form__text-input form__text-input_type_link popup__input"
        id="place-link"
        placeholder="Ссылка на картинку"
        required=""
      />
      <span className="popup__error-span popup__invlid-link" />
    </div></PopupWithForm>

         <PopupWithForm 
      name = 'edit-avatar'
      title ='Обновить аватар'
      titleButton = 'Добавить'
      isOpen={isEditAvatarPopupOpen}
      onClose ={closeAllPropus}

      >
        
        <div className="popup__input-form">
          <input
            type="url"
            name="avatar"
            className="form__text-input form__text-input_type_edit-avatar popup__input"
            id="avatar"
            placeholder="Ссылка на аватар"
            required=""
          />
          <span className="popup__error-span popup__invlid-avatar" />
        </div>

      </PopupWithForm>

         <PopupWithForm 
      name =  'delete'
      title ='Вы уверены?'
      titleButton = 'Да'
      isOpen={isDeletePlacePopup}
      onClose={closeAllPropus}
      />
      <ImagePopup card={selectedCard} isOpen={isImagePopup} onClose ={closeAllPropus}/>

      {/* <div className="popup popup_edit-profile">
        <div className="popup__container">
          <button className="popup__close-button decoration" type="button" />
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            action="#"
            className="form popup__form form_edit-profile"
            name="edit-info"
            noValidate=""
          >
            <button
              type="submit"
              className="form__save-button decoration popup__save-button"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_add-card">
        <div className="popup__container">
          <button className="popup__close-button decoration" type="button" />
          <h2 className="popup__title">Новое место</h2>
          <form
          action="#" className="form form_add-card popup__form" name="place-add" noValidate=""
          >
            
            <button
              type="submit"
              className="form__save-button decoration popup__save-button "
            >
              Добавить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_edit-avatar">
        <div className="popup__container popup__container_avatar">
          <button className="popup__close-button decoration" type="button" />
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            action="#"
            className="form form_edti-avatar popup__form"
            name="edit-avatar"
            noValidate=""
          >

            <button
              type="submit"
              className="form__save-button decoration popup__save-button "
            >
              Добавить
            </button>
          </form>
        </div>
      </div> */}


      {/* <div className="popup popup_open-card">
        <figure className="popup__figure-card">
          <button className="popup__close-button decoration" type="button" />
          <img className="popup__figure-image" src="#" alt="#" />
          <figcaption className="popup__figure-caption" />
        </figure>
      </div> */}


      {/* <div className="popup popup_delete-card">
        <div className="popup__container popup__container_delete-card">
          <button className="popup__close-button decoration" type="button" />
          <h2 className="popup__title popup__title_delete-card">Вы уверены?</h2>
          <form
            action="#"
            className="form form_delete-card popup__form"
            name="delete-card"
            noValidate=""
          >
            <button
              type="submit"
              className="form__save-button decoration popup__save-button popup__delete-save "
            >
              Да
            </button>
          </form>
        </div> */}
    </div>

  );
}

export default App;
