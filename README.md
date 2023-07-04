# Pokedex

App de pokemon

Partiendo de la estructura básica de páginas que se quiere utilizar y de algunas webs de documentación sobre pokemons, se comienza a estudiar y analizar la propia API de pokemon para extraer la estructura de toda la información que se va a solicitar:

![Documentación propia de la API](https://pokeapi.co/docs/v2)
![Web de documentación de pokemons](https://pokemon.fandom.com/es/wiki)
![Web oficial de pokedex de pokemon](https://pokemon.com/es/pokedex)

Partiendo de una estructura básica, se comienzan a realizar algunos bocetos de diseño para organizar toda la información obtenida:

> Imgs de los diseños obtenidos

## Programando la pokedex

+ Creación de una app con React y ![Vite](https://vitejs.dev/guide).

+ Estructura de datos utilizando ![react-router](https://reactrouter.com/en/main/start/tutorial) para crear las páginas.

+ Creación de un contexto para alojar los datos de la API y otra información general relevante. ![Web de referencia](https://react.dev/reference/react/createContext)

+ Anidación de promesas al hacer petición a la API para guardar los datos de los diferentes pokemons. Se puede ver el fragmento de código a continuación:

    ```
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${actualOffset}&limit=${limitSearch}`)
        .then(res => res.json())
        .then(data => {
            data.results.map(item => {
            fetch(item.url)
                .then(res => res.json())
                .then(pokeInfo => {
                if(!arr.find(item => item.id == pokeInfo.id)) {
                    arr.push(pokeInfo)
                }
                if(arr.length === limitSearch) {
                    setPokeList(arr.sort((a, b) => a - b))
                }
                })
            })
        })
    }, [actualOffset])
    ```

    Como se puede ver, se guardan los datos en un nuevo array más completo para después pintar los datos que sean necesarios. Dichos datos son pintados ordenados de menor a mayor por Id. .

+ Se ha realizado también la paginación de los resultados utilizando una variable límite que permite cargar el número de datos que se quieran y no el valor por defecto de la API. Para ello se ha utilizado otra variable que controla el offset de los mismos.

+ Se ha añadido un botón que cambia el tema de modo claro a oscuro

+ Se ha añadido la opción de cambiar la visualización de grid a list

+ Se ha añadido la opción de guardar como favoritos algunos pokemons. Se pueden añadir y eliminar de favoritos tanto desde la vista de listado como de la de detalle. Igualmente se pueden ver todos los pokemons guardados como favoritos en una nueva página.

+ Los valores de theme, layout y pokemons favoritos han sido guardados en local para que al refrescarse la página, estos permanezcan inalterables.

+ Se ha creado un componente de Loading para indicar que los datos se están cargando.

+  Se han creado tests para comprobar que las páginas de vistas se renderizan de forma correcta y que los valores preestablecidos se guardan correctamente en el alojamiento local. Para estos tests se han necesitado testing-library, vitest y jsdom.