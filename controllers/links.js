const Link = require('../models/').Link

const addLink = async (db, name, ticker, url) => {
  await db.links.insert({name: name, ticker: ticker, url: url})
}
