/*
const https = require('https')

let data = ''
let descripcion = '';

(
  async () => {
    const url = "https://api.rawg.io/api/games/32?key=0f8d95788d644ba9ac601311b87d302d";
    https.get(url, res => {
      res.on('data', chunk => {
        data += chunk
      })
      res.on('end', () => {
        data = JSON.parse(data)
        console.log(data)
        descripcion = data.description
      })
    }).on('error', err => {
      console.log(err.message)
    })
    console.log(`La descripción es: ${descripcion}`)
  }
)()
*/
