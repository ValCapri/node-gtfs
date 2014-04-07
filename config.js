module.exports = {
    mongo_url: process.env.MONGOHQ_URL || 'mongodb://localhost:27017/gtfs'
  , agencies: [
      /* Put agency_key names from gtfs-data-exchange.com.  
      Optionally, specify a download URL to use a dataset not from gtfs-data-exchange.com */
      { agency_key: 'tec', url: 'http://gtfs.ovapi.nl/tec/gtfs-tec.zip'}

    ]
}
