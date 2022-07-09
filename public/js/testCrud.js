function gettodo(){
    let url = "/gettask?status='todo'"

    fetch(url)
		.then(function(responseJSON) {
        	responseJSON.json()
        	.then(function(res) {
        	
        		afficheReponseGET(res,"#todoTask");
        	});
    	})
    	.catch(function (err) {
        	console.log(err);
    });


}

// Affichage d'une réponse JSON
function afficheReponseGET(reponse,divName) {
    let div = document.querySelector(divName);
    div.innerHTML = reponse.msg;

    // Dans reponse.data j'ai les restaurants
    afficheRestaurantsEnTable(reponse.data);
}




function inprogressdoneTask(){
   

    let url = "/gettask?status='inprogress'"

    fetch(url)
		.then(function(responseJSON) {
        	responseJSON.json()
        	.then(function(res) {
        	
        		afficheReponseGET(res,"#inprogressdoneTask");
        	});
    	})
    	.catch(function (err) {
        	console.log(err);
    });
}
function doneTask(){
    let url = "/gettask?status='done'"

    fetch(url)
		.then(function(responseJSON) {
        	responseJSON.json()
        	.then(function(res) {
        	
        		afficheReponseGET(res,"#doneTask");
        	});
    	})
    	.catch(function (err) {
        	console.log(err);
    });


}
function getQuestion(){
    let url = "/addtask"


}
function getQuestion(){
    let url = "/addupdate"


}