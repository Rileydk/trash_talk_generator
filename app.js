// 調整圖片高度

// Include packages
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const trashTalkGenerator = require('./trash_talk_generator')
const Handlebars = require('handlebars')

// Define variables
const port = 3000

// Set static files
app.use(express.static('public'))

// Set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Use static files
app.use(express.static('public'))

// Register handlebars
Handlebars.registerHelper('ifMatch', function (role, select, options) {
  if (role === select) {
    return options.fn(this)
  }
})

// Handle request and response
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/generating', (req, res) => {
  const role = req.query.roles
  const trashTalk = trashTalkGenerator(role)
  res.render('index', { role, trashTalk })
})

// Start and listen to the server
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}.`)
})

// 疑問1: 為什麼在app.get('/generating, ...)中註冊helpers會失敗？會顯示Missing Helpers ifMatch
// app.get('/generating', (req, res) => {
//   const role = req.query.roles
//   const trashTalk = trashTalkGenerator(role)
//   res.render('index', {
//     role,
//     trashTalk,
//     helpers: {
//       ifMatch: function (role, select, options) {
//         if (role === select) {
//           return options.fn(this)
//         }
//       }
//     }
//   })
// })

// 疑問2: 這個情境下用GET或POST哪個比較合適？
