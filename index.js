let apiKey = '43f78b9aa44d49dbbc509ca00dd0a124';

//Grab the news container
let newsAcc = document.getElementById('newsAcc');


//create a request

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

//what to do when response is ready

xhr.onload = function () {

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element,index)
         {
            let news = `<div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
         data-bs-target="#collapse${index}" aria-expanded="flase" aria-controls="collapse${index}">
        ${element["title"]}
         </button>
</h2>
<div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
data-bs-parent="#accordionExample">
<div class="accordion-body"> ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here...</a>
</div>
</div>
</div>`

            newsHtml += news;

        });


        newsAcc.innerHTML = newsHtml
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

