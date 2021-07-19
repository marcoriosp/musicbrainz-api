# musicbrainz-api
  A simple API that gets information from MusicBrainz API with Node.js. 


# Installation
```
git clone https://github.com/marcoriosp/musicbrainz-api-v1.git

cd musicbrainz-api-v1

npm install
```

# Search Example

```
http://localhost:3300/search/artist?query=olivia%20rodrigo
http://localhost:3300/search/area?query=chile
http://localhost:3300/search/event?query=metallica
http://localhost:3300/search/cdstub?query=metallica
http://localhost:3300/search/instrument?query=guitar
http://localhost:3300/search/label?query=sony
http://localhost:3300/search/place?query=santiago%20de%20chile
http://localhost:3300/search/recording?query=lenka
http://localhost:3300/search/release?query=lenka
http://localhost:3300/search/relGroup?query=Lenka
http://localhost:3300/search/work?query=Lenka
http://localhost:3300/search/urlLink?query=lenka
http://localhost:3300/search/annotation?query=lenka
http://localhost:3300/search/series/?query=%22Studio%20Brussel%22
```

# Artist Example request

```
http://localhost:3300/artist?mbid=65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab
```


# Area Example request
```
http://localhost:3300/area?mbid=45f07934-675a-46d6-a577-6f8637a411b1
```

# Event Example request
```
http://localhost:3300/event?mbid=fe39727a-3d21-4066-9345-3970cbd6cca4
```

# Genre Example request
```
http://localhost:3300/genre?mbid=f66d7266-eb3d-4ef3-b4d8-b7cd992f918b
```

# Instrument Top Example request
```
http://localhost:3300/instrument?mbid=dd430e7f-36ba-49a5-825b-80a525e69190
```

# Label Top Example request
```
http://localhost:3300/label?mbid=46f0f4cd-8aab-4b33-b698-f459faf64190
```

# Place Top Example request
```
http://localhost:3300/place?mbid=478558f9-a951-4067-ad91-e83f6ba63e74
```

# Recording Top Example request
```
http://localhost:3300/recording?mbid=b9ad642e-b012-41c7-b72a-42cf4911f9ff
```

# Release Top Example request
```
http://localhost:3300/release?mbid=59211ea4-ffd2-4ad9-9a4e-941d3148024a
```

# Release Group Top Example request
```
http://localhost:3300/relGroup?mbid=c9fdb94c-4975-4ed6-a96f-ef6d80bb7738
```

# URL Top Example request
```
http://localhost:3300/urlLink?mbid=46d8f693-52e4-4d03-936f-7ca8459019a7
```

# Work Top Example request
```
http://localhost:3300/urlLink?work=b1df2cf3-69a9-3bc0-be44-f71e79b27a22
```



More info [https://musicbrainz.org/doc/MusicBrainz_API/Examples](https://musicbrainz.org/doc/MusicBrainz_API/Examples)
