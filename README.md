# musicbrainz-api
  A simple API that gets information from MusicBrainz API with Node.js. 


# Installation
```
git clone https://github.com/marcoriosp/lastfm-api.git

cd lastfm-api

npm install
```


# Artist Example request

```
http://localhost:3300/artistSearch?artist=lenka
http://localhost:3300/artistInfo?artist=lenka
http://localhost:3300/artistSimilar?artist=lenka
http://localhost:3300/artistTopTags?artist=lenka
http://localhost:3300/artistTopTracks?artist=lenka
http://localhost:3300/artistTopAlbums?artist=lenka
```


# Album Example request
```
http://localhost:3300/albumSearch?album=lenka
http://localhost:3300/albumInfo?artist=lenka&album=attune
http://localhost:3300/albumTopTags?artist=lenka&album=attune
```

# Track Example request
```
http://localhost:3300/trackSearch?track=the%20show
http://localhost:3300/trackInfo?artist=lenka&track=the%20show
http://localhost:3300/trackSimilar?artist=lenka&track=the%20show
http://localhost:3300/trackTopTags?artist=lenka&track=the%20show
```

# Charts Example request
```
http://localhost:3300/chartsTopArtists
http://localhost:3300/chartsTopTags
http://localhost:3300/chartsTopTracks
```

# Geo Top Example request
```
http://localhost:3300/geoTopArtists?country=chile
http://localhost:3300/geoTopTracks?country=chile
```


More info [https://www.last.fm/api](https://www.last.fm/api)
