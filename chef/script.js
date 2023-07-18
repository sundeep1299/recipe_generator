function generateRecipe() {
    var ingredients = document.getElementById("ingredients").value;
  
    var apiKey = "5a979ec2ddfb4711ae7e0298b579d725";
    var apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          var recipeId = data[0].id;
          var recipeUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;
  
          // Fetch the recipe  and cooking instructions
          fetch(recipeUrl)
            .then(response => response.json())
            .then(recipeData => {
              var recipeTitle = recipeData.title;
              var recipeInstructions = recipeData.instructions;
  
              var recipeDiv = document.getElementById("recipe");
              recipeDiv.innerHTML = `<h3>${recipeTitle}</h3>
                                      <p>${recipeInstructions}</p>`;
            })
            .catch(error => console.log(error));
        } else {
          var recipeDiv = document.getElementById("recipe");
          recipeDiv.innerHTML = "No recipes found.";
        }
      })
      .catch(error => console.log(error));
  }
  