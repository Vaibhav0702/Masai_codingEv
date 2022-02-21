async function apiCall(url) {


    //add api call logic here

    try {

        let res = fetch(url);
        let data =(await res).json();

        return data;

    }
    catch (err){
   
        console.log("err : ",err);

    }


}


function appendArticles(articles, main) {

    //add append logic here
  
    articles.map(el =>{

      let div = document.createElement("div");
   
      let image = document.createElement("img");
      image.src = el.urlToImage;
      image.id ="photo";


      let title = document.createElement("p");
      title.innerText = el.title;
      
      
      div.append(image,title);
      div.onclick = () =>{

        localStorage.setItem("click_artical",JSON.stringify(el));

        window.location.href = "news.html";

      }

      main.append(div);

    });

}




function appendArticles1(articles, main) {

    //add append logic here
  
    articles.map(el =>{

      let div = document.createElement("div");
   
      let image = document.createElement("img");
      image.src = el.urlToImage;
      image.id ="photo";


      let title = document.createElement("h2");
      title.innerText = el.title;

      let cont = document.createElement("h5");
      cont.innerText = el.content;


      let content = document.createElement("p");
      content.innerText = el.description;
      
      
      div.append(image,title,cont,content);


      main.append(div);

    });

}

export { apiCall, appendArticles,appendArticles1 }