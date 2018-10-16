var axios = require('axios')

module.exports = (robot) => {
  robot.hear(/^!cat$/i, (res) => {
    axios.get('https://catfact.ninja/fact')
      .then((result) => {
        res.send(result.data.fact)
      })
  })
}
