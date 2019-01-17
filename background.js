console.log('backgorund')
function postData(url, text) {
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