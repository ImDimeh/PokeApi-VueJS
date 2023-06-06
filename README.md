



# pokemon Vue JS

Ce projets consiste avec l'api POKEAPI à creer dynamiquement des pages web pour chaque pokemon . Ceci est un projets personelle afin de toujours travailler  .


- [pokemon Vue JS](#pokemon-vue-js)
  * [API Reference](#api-reference)
  * [Recommended IDE Setup](#recommended-ide-setup)
      - [Get a pokemon data](#get-a-pokemon-data)
      - [Get more pokemon data](#get-more-pokemon-data)
      - [getPokemon()](#getpokemon--)
      - [getDescription()](#getdescription--)
      - [gettypeImage()](#gettypeimage--)
  * [Customize configuration](#customize-configuration)
  * [Project Setup](#project-setup)
    + [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
    + [Compile and Minify for Production](#compile-and-minify-for-production)
    + [Run Unit Tests with [Vitest](https://vitest.dev/)](#run-unit-tests-with--vitest--https---vitestdev--)
    + [Lint with [ESLint](https://eslint.org/)](#lint-with--eslint--https---eslintorg--)
  * [Acknowledgements](#acknowledgements)
  * [Authors](#authors)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>



## API Reference


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) 


#### Get a pokemon data

```http
  GET api/v2/pokemon/{id or name}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | integer | **Required**. Id of pokemon to fetch |
|'name' | string | **Required**. name of pokemon to fetch



#### Get more pokemon data

```http
  GET /api/v2/pokemon-species/{id or name}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | integer | **Required**. Id of pokemon to fetch |
|'name' | string | **Required**. name of pokemon to fetch

#### getPokemon()

Elle prend l'id / nom du pokemon  se trouvant dans l'url et en récupere les données .

#### getDescription()

Elle prend l'id / nom du pokemon  se trouvant dans l'url et récupère la description de celui-ci . Cependant il est filtré car on ne veux que la description anglais et celle du jeu pokemon épée ou celle de blanc 2
``` 
const result = data.flavor_text_entries.filter(word => word.language.name == "en" &&  ( word.version.name == "sword" || word.version.name == "white-2"));
```

#### gettypeImage()

Cette fonction nous renvoie les types du pokemon ce qui nous permet avec le code suivant , de les ajouter a la page 
```
this.poke.types.forEach(type => {
      
      const typeImage = document.createElement('img')
      typeImage.src = pokemonColors[type.type.name].image
      typeImage.alt = type.type.name
      document.querySelector('.type-img-list').appendChild(typeImage)
      
    });
    
```

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```



## Acknowledgements

 - [PokeAPI website ](https://pokeapi.co)
 


## Authors

- [@ImDimeh](https://github.com/ImDimeh)
