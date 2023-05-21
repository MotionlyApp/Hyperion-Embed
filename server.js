const express = require('express');
const app = express();
const path = require('path');

app.get('/embed/:title/:description/:color/:redirect', (req, res) => {
  const { title, description, color, redirect } = req.params;

  const embed = {
    title: decodeURIComponent(title),
    description: decodeURIComponent(description),
    color: decodeURIComponent(color),
    redirect: decodeURIComponent(redirect)
  };

  // Send the index.html file as a response
  res.render(path.join(__dirname, 'views', 'index.ejs'), { embed });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
