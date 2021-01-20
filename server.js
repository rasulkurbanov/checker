const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const cors = require('cors')
const fileUpload = require('express-fileupload')


app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


app.use('/public', express.static('public'))
app.use(cors())
app.use(fileUpload())

app.get('/', (req, res) => {
  res.render('index.html')
})


app.post('/upload', (req, res) => {

  if(!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No file uploaded')
  }

  let file = req.files.uploadedFile
  let filename = file.name

  file.mv('./public/'+ filename, (err) => {
    if(err) {
      console.log(err)
      return res.status(500).send(err)
    }
    res.send('File successfully uploaded!').end()
  })
})





app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))