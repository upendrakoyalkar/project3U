export const RestaurentCards = (props) =>{
  return(
    <div>
      <div className="w-[200] p-2 m-2 bg-gray-200 rounded-sm hover:bg-gray-400">
           
          <img className="cardsImage" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.resData.info.cloudinaryImageId} />
          <h4 className = "font-bold py-2">{props.resData.info.name}</h4>
          <h6>{props.resData.info.cuisines.join(" , ")}</h6>
          <h6>{props.resData.info.costForTwo}</h6>
          <h6>{props.resData.info.avgRating}</h6>

        </div>
      </div>
   
  )
}

