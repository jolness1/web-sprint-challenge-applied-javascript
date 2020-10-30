import axios from 'axios'

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then(res =>{
        const articleTopic = Object.values(res.data.articles);

    articleTopic.forEach(topic =>{
        const articleByTopic = Object.values(topic);
        articleByTopic.forEach(item =>{
            entryPointArticle.append(articleMaker(item));
        })
    })
})
    .catch(err =>{
        console.log(err);
    })

function articleMaker(obj){

    //creating elements and stuff
    const article = document.createElement('div');
    const headline = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');
    //classes
    article.classList.add('card');
    headline.classList.add('headline');
    authorContainer.classList.add('author');
    imgContainer.classList.add('img-container');
    //attributes
    headline.textContent = obj.headline;
    img.src = obj.authorPhoto
    authorName.textContent = `By ${obj.authorName}`
    //eventListener
    article.addEventListener('click', () =>{
        console.log(obj.headline);
    })
    article.append(headline, authorContainer);
    authorContainer.append(imgContainer, authorName);
    imgContainer.append(img);

    return article
}

const entryPointArticle = document.querySelector('.cards-container')