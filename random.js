document.getElementById("button").addEventListener("click", () => {//Função click para gerar receita.
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)//Caminho da api para buscar os dados da receita gerada.
        .then(response => response.json())//Transformar os dados da api em .json
        .then(data => {
            const meal = data.meals[0];//Irá pegar o primeiro dado gerado.

            const existingCard = document.querySelector(".existing-card"); // procura o card pela classe ".existing-card"
            
            // Variavel que irá adiconar a imagem que virá da API, 
            const cardImage = existingCard.querySelector(".card-img-top");
            cardImage.src = meal.strMealThumb;
            cardImage.alt = meal.strMeal;


            cardImage.style.width = "100%";//ja deixa setado a imagem para q se adapte ao tamanho do card

            // procura a classe .card-title 
            const cardTitle = existingCard.querySelector(".card-title");
            cardTitle.textContent = meal.strMeal;//adiciona o dado da api strMeal ao Titulo da receita

            // procura a classe .list-group
            const ingredientList = existingCard.querySelector(".list-group");
            ingredientList.innerHTML = ""; // Limpa a lista original

            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];

                if (ingredient && measure) {
                    const listItem = document.createElement("li");//criar um elemento li 
                    listItem.classList.add("list-group-item");//adiciona classe ao elemento li
                    listItem.textContent = `${measure} ${ingredient}`;//adiciona dado retornado da api
                    ingredientList.appendChild(listItem);//adiciona um elemento filho dentro do listitem
                }
            }

            const instruc = document.getElementById("howto")

            const imgInstruc = instruc.querySelector(".card-img-top");
            imgInstruc.src = meal.strMealThumb

            const titleInstruc = instruc.querySelector(".titleinst");
            titleInstruc.textContent = meal.strMeal;

            const intructxt = instruc.querySelector(".instruc")
            intructxt.textContent = meal.strInstructions

            const ytAnch = instruc.querySelector(".anch")
            ytAnch.href = meal.strYoutube;

            //Criação da ancoragem
            
        })
        .catch(error => console.error("Erro na requisição da API:", error));
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }
