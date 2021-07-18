const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = "3718c3ff9952d011fb867102e8a061c6"; // ScraperAPI Key Code
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`; // ScraperAPI Base URL

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to MusicBrainz API.');
})

// Get Artist Details
app.get('/artist/:artistId', async (req, res) => {
    const { artistId } = req.params;

    try {

        const response = await request(`${baseUrl}&url=https://musicbrainz.org/ws/2/artist/${artistId}?inc=url-rels+tags+genres+annotation&fmt=json`);

        res.json(JSON.parse(response));

    } catch (error) {

        res.json(error);
        
    }
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`))