// Question 2
// Make a call to the following API endpoint:
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

// Loop through the results and display the following properties in HTML,
// but only for the first eight results:
// name
// rating
// number of tags (not the tag details, just the amount of tags)
// The styling for this assignment is not important but loading indicator
// should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to
// make the call.

// Be sure to arrange all file types appropriately, consult the
// repos from the lessons for examples.

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(url);
    const gamesResults = await response.json();

    const gamesInfo = gamesResults.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < gamesInfo.length; i++) {
      console.log(gamesInfo[i].name);

      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="result">
    <p>Name: ${gamesInfo[i].name} </p>
    <p>Rating: ${gamesInfo[i].rating}</p>
    <p>Tags: ${gamesInfo[i].tags.length}</p>
  </div>`;
    }
  } catch (error) {
    console.log("An error occured");
    resultsContainer.innerHTML = errorMessage(
      "An error occured when getting the game info"
    );
  }
}

getGames();
