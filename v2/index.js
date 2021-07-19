const express = require('express');
const request = require('request-promise');
const axios = require('axios');
const mb = require('./src');

const options = { "User-Agent": "musicbrainz-api/1.0.0 ( zerovarius@gmail.com )" };

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to MusicBrainz API.');
})




// Lookup Artist
app.get('/artist/:query', async (req, res) => {
    const { query } = req.params;
    try {
        const response = await mb.lookupArtist(`${query}`, {}, function(err, artist){
            console.log(artist);
            res.json(artist);
        });
    } catch (error) {
        res.json(error);
    }
});




// Lookup DiscId
app.get('/discid/:query', async (req, res) => {
    const { query } = req.params;
    try {
        const response = await mb.lookupDiscId(`${query}`, {}, function(err, discid){
            console.log(discid);
            res.json(discid);
        });
    } catch (error) {
        res.json(error);
    }
});




// Lookup DiscId
app.get('/release/:query', async (req, res) => {
    const { query } = req.params;
    try {
        const response = await mb.lookupRelease(`${query}`, {}, function(err, release){
            console.log(release);
            res.json(release);
        });
    } catch (error) {
        res.json(error);
    }
});




// Lookup Release Group
app.get('/release-group/:query', async (req, res) => {
    const { query } = req.params;
    try {
        const response = await mb.lookupReleaseGroup(`${query}`, {}, function(err, releaseGroup){
            console.log(releaseGroup);
            res.json(releaseGroup);
        });
    } catch (error) {
        res.json(error);
    }
});




// Lookup Recording
app.get('/recording/:query', async (req, res) => {
    const { query } = req.params;
    try {
        const response = await mb.lookupRecording(`${query}`, {}, function(err, recording){
            console.log(recording);
            res.json(recording);
        });
    } catch (error) {
        res.json(error);
    }
});




// Lookup Label
app.get('/label/:query', async (req, res) => {
    const { query } = req.params;
    try {
        const response = await mb.lookupLabel(`${query}`, {}, function(err, label){
            console.log(label);
            res.json(label);
        });
    } catch (error) {
        res.json(error);
    }
});




// Lookup Work
app.get('/work/:query', async (req, res) => {
    const { query } = req.params;
    try {
        const response = await mb.lookupWork(`${query}`, {}, function(err, work){
            console.log(work);
            res.json(work);
        });
    } catch (error) {
        res.json(error);
    }
});




// Lookup Lookup
app.get('/lookup/:query', async (req, res) => {
    const { query } = req.params;
    try {
        const response = await mb.lookup(`${query}`, {}, function(err, lookup){
            console.log(lookup);
            res.json(lookup);
        });
    } catch (error) {
        res.json(error);
    }
});




// Search Artist
app.get('/search/artist/:query', async (req, res) => {
    const { query } = req.params;
    try {
        const response = await mb.searchArtists(`${query}`, {}, function(err, artists){
            console.log(artists);
            res.json(artists);
        });
    } catch (error) {
        res.json(error);
    }
});




// Search Recordings
app.get('/search/recordings/:query', async (req, res) => {
    const { query } = req.params;
    try {
        const response = await mb.searchRecordings(`${query}`, {}, function(err, recordings){
            console.log(recordings);
            res.json(recordings);
        });
    } catch (error) {
        res.json(error);
    }
});




// Search Releases
app.get('/search/releases/:query', async (req, res) => {
    const { query } = req.params;
    try {
        const response = await mb.searchReleases(`${query}`, {}, function(err, releases){
            console.log(releases);
            res.json(releases);
        });
    } catch (error) {
        res.json(error);
    }
});




// Search Releases Groups
app.get('/search/releases-groups/:query', async (req, res) => {
    const { query } = req.params;
    try {
        const response = await mb.searchReleaseGroups(`${query}`, {}, function(err, releaseGroups){
            console.log(releaseGroups);
            res.json(releaseGroups);
        });
    } catch (error) {
        res.json(error);
    }
});




// Search
app.get('/search/:query', async (req, res) => {
    const { query } = req.params;
    try {
        const response = await mb.search(`${query}`, {}, function(err, search){
            console.log(search);
            res.json(search);
        });
    } catch (error) {
        res.json(error);
    }
});





app.listen(PORT, () => console.log(`server running on port ${PORT}`))