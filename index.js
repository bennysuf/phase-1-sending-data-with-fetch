// Add your code here
function submitData(userName, emailAd){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
               },
        body: JSON.stringify(
            {
          name: userName,
          email: emailAd,
    }),
  })
 .then((resp) => resp.json())
 .then((data) => document.body.innerHTML = data.id ) //needs to return ID
 .catch((error) => {
   document.body.innerHTML = 'Unauthorized Access'
 })
 }
submitData('benny', 'benny@gmail')