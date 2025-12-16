 "use strict"
const theTable=document.querySelector(".details .row");
export default  class DetailsGames{
    constructor(data){
        this.data=data
    }
    display(){      
        let containerGames=`   <div class="col-lg-4">
            <picture>
                <img src="${this.data.thumbnail}" class="w-100 rounded-2 shadow-lg" alt="image of Game" />
            </picture>
        </div>
         <div class="col-lg-8">
              <div class="all-details mt-2">
                <h5 class="fw-bold fs-4">Title : ${this.data.title}</h5>
                <span>Category :<small> ${this.data.genre}</small></span>
                <span>Platform :<small> ${this.data.platform}</small></span>
                <span>Status :<small> ${this.data.status}</small></span>
                <p>${this.data.description}</p>
                <a type="button" target="_blank" href="${this.data.game_url}" class="btn btn-outline-warning my-3">show game</a>
            </div>
          </div>`;
        theTable.innerHTML=containerGames;
    }
}