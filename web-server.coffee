express = require 'express'
app = express()

app.use express.static(__dirname + '/web')

app.get '/login', (req, res) -> res.redirect '/'
app.get '/dashboard', (req, res) -> res.redirect '/'

server = app.listen 3000, ->
  console.log "Listening on port #{server.address().port}"
