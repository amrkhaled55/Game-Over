 "use strict"
export class GetApi{
    constructor(category){
this.category=category
    }
   async getGames(){
        const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '40b0485badmsh2920740e23d4503p1d9247jsnb34f9ccc5c2e',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
        const url =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`,options);
        const data= await url.json()

return data

    }
   async getDetails(id){ 
        const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '40b0485badmsh2920740e23d4503p1d9247jsnb34f9ccc5c2e',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
        const url =await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
	const result = await url.json()

return result

    }
}