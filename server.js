const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const fileUpload = require('express-fileupload')


app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


app.use('/public', express.static('public'))


app.get('/', (req, res) => {
  // res.json('Assalomu alaykum')
  res.render('index.html')
})


app.post('/', (req, res) => {
  console.log(req.files)
    if(!req.files) {
      res.send({
        status: false,
        message: "No file uploaded"
      })
    }
    else {
      console.log(req.files)
    }

})





app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))