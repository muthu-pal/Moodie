This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Moodie`
Moodie was created using React.js and the Spotify API. We pull your top 50 tracks from your listening history and analyze the various audio features that Spotify provides each track. 

### `How it works:`
Songs have attributes like danceability, acousticness, energy, valence, and tempo assigned to them by the Spotify API. Our site filters the songs based on a mood that is correlated with certain attributes. 
For example, "Watermelon Sugar" by Harry Styles has a danceability of 0.548, an energy of 0.816, and valence of 0.557. All of these values are on the "higher" side, so high danceability, energy, and valence all work together to categorize the song as "Happy". 

Happy songs tend to be more danceable and have higher energy and valence. Chill songs on the other hand may have more acousticness and a slower tempo. 

Users can also view all 50 of their top tracks at once by setting the mood to "All Songs"






--- from create-react-app ---

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


