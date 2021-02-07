// Question 2

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
      "An error occured when getting the game info."
    );
  }
}

getGames();
