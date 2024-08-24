// Sample JavaScript for Recipe Book

// Array to store recipes

// Function to add a new recipe
function addRecipe() {
    // Get input values
    const name = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const category = document.getElementById('category').value;
    const method = document.getElementById('method').value;

    // Create a new recipe object
    const newRecipe = {
        name: name,
        ingredients: ingredients,
        category: category,
        method: method
    };

    // Add the new recipe to the recipes array
    recipes.push(newRecipe);

    // Clear the form
    document.getElementById('recipeForm').reset();

    // Display the updated list of recipes
    displayRecipes();
}
// Load recipes from localStorage
function loadRecipes() {
    const storedRecipes = localStorage.getItem('recipes');
    return storedRecipes ? JSON.parse(storedRecipes) : [];
}

// Save recipes to localStorage
function saveRecipes(recipes) {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Initialize recipes
let recipes = loadRecipes();

// Function to add a new recipe
function addRecipe() {
    // Get input values
    const name = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const category = document.getElementById('category').value;
    const method = document.getElementById('method').value;

    // Create a new recipe object
    const newRecipe = {
        name: name,
        ingredients: ingredients,
        category: category,
        method: method
    };

    // Add the new recipe to the recipes array
    recipes.push(newRecipe);
    saveRecipes(recipes);

    // Clear the form
    document.getElementById('recipeForm').reset();

    // Display the updated list of recipes
    displayRecipes();
    updateTagButtons();
}


// Function to display recipes on the homepage
function displayRecipes() {
    const categories = ['breakfast', 'lunch', 'dinner', 'snacks'];
    const recipeList = document.getElementById('recipeList');

    // Clear existing content
    recipeList.innerHTML = '';

    // Loop through each category and display the recipes
    categories.forEach(category => {
        const categoryRecipes = recipes.filter(recipe => recipe.category.toLowerCase() === category);

        if (categoryRecipes.length > 0) {
            // Create a category header
            const categoryHeader = document.createElement('h3');
            categoryHeader.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            recipeList.appendChild(categoryHeader);

            // Create a list for recipes in this category
            const ul = document.createElement('ul');

            categoryRecipes.forEach(recipe => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${recipe.name}</strong><br>Ingredients: ${recipe.ingredients}<br>Method: ${recipe.method}`;
                ul.appendChild(li);
            });

            recipeList.appendChild(ul);
        }
    });
}

// Add event listener to the form submit button
document.getElementById('addRecipeBtn').addEventListener('click', function(event) {
    event.preventDefault();
    addRecipe();
});

// Initial display of recipes (empty)
displayRecipes();
