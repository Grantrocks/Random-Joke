var settings=JSON.parse(localStorage.settings || '{"set":false}')

fetch("https://v2.jokeapi.dev/joke/Any", {
	"method": "GET",
})
.then(function (response) {
	return response.json();
}).then(function (data) {
  console.log(data)
  if(!data.error){
    if(data.type=="twopart"){
      document.getElementById("joke").innerHTML=`${data.setup}<br><br>${data.delivery}`
    }else if(data.type=="single"){
      document.getElementById("joke").innerHTML=data.joke
    }
  }else{
    document.getElementById("joke").innerHTML="Whoops an error occured. Re-open the extension for a new joke!"
  }
  })
.catch(function (error) {
	console.log(error.message);
});