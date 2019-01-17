const KEY = 'AIzaSyDQBCTL03f1o-CE2c69VHe914Wuyuy_Mks';
const url = `https://language.googleapis.com/v1/documents:analyzeSentiment?key=${KEY}`

const articles = document.querySelectorAll('.MomentCapsuleSummary');

for (let i = 0; i < articles.length; i++) {
  const title = articles[i].querySelector('.MomentCapsuleSummary-title');

  postData(url, title.title).then(data => {
    console.log('score:', data.documentSentiment.score)
    if (data.documentSentiment.score < (-0.25)) {
      const img = document.createElement('img');
      img.src = "https://source.unsplash.com/user/erondu/500x500";
      console.log(title.title);
      const article = title.parentNode.parentNode;
      article.innerHTML = '';
      article.appendChild(img);
    }
  });
}


function postData(url,text) {
  const data = {
    document: {
      content: text,
      type: 'PLAIN_TEXT'
    },
    encodingType: 'UTF8'
  }

  const postObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }
  return fetch(url, postObj).then(res => res.json())

}
// postData(url).then(data => console.log(JSON.stringify(data)))

