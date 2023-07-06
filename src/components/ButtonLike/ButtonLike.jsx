import { useEffect, useState } from "react"
import api from "../../utils/Api"

//чтобы не рендерить весь App
export default function ButtonLike({likes, myId, cardId}) {

    const[isLike, setIsLike] = useState(false)
    const[likeCount, setLikeCount] = useState(likes.length)

    useEffect(() => {
        setIsLike(likes.some(item => myId === item._id))

    },[likes, myId])

    function handleLike(){
        if(isLike)
        {
            api.delLike(cardId)
                .then(res => {
                    setIsLike(false) 
                    setLikeCount(res.likes.length)
                })

                .catch((err) => console.error(`Ошибка снятия лайка ${err}`))
        } 
        else 
        {
            api.addLike(cardId)
            .then(res =>{
                setIsLike(true)
                setLikeCount(res.likes.length)
            })
            .catch((err) => console.error(`Ошибка установки лайка ${err}`))
        }
    }
   

    return(    
        <div className="element__info_like-container">
            <button className={`decoration element__like-button ${isLike ? 'element__like-button_active' : ''}`} type="button" onClick={handleLike}/>
            <span className="element__like-counter">{likeCount}</span>
        </div>
  
  )

    
}