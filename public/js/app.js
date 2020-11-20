const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  messageOne.textContent ='Fetching the weather...'
  messageTwo.textContent =''

  fetch(`http://localhost:3005/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if(data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = `The current condition is ${data.forecast.condition}. It is currently ${data.forecast.actualTemp} degrees out. It feels like ${data.forecast.feelsLike} degrees.`
      }
    })
  })
})
