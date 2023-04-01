import fetch from "node-fetch";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/scrape", function (req, res) {
  let { url, term } = req.query;
  url = decodeURIComponent(url);
  term = decodeURIComponent(term).toLowerCase(); // Search term is not case sensitive
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      /* data is a string comprised of the website's source code.
      Split lower-cased source code into array by lower-cased search term.
      Number of occurrences of the search term is equal to length of the
      array minus 1, because the string in array[0] preceded the first
      instance of the search term. */
      const termNumber = data.toLowerCase().split(term).length - 1;
      return res.json({
        url,
        term,
        termNumber,
        timestamp: Date.now(),
      });
    })
    .catch((err) => {
      console.warn(err);
      return res.json({ error: err });
    });
});

app.listen(3080, (err) => {
  if (err) console.warn(err);
  console.log("Server listening on Port 3080");
});
