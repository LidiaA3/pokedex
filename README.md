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

+ Creamos un contexto para alojar los datos de la API y otra información general relevante. ![Web de referencia](https://react.dev/reference/react/createContext)

+ Al hacer la petición a la API usamos anidación de promesas para guardar los datos de los diferentes pokemons. Se puede ver el fragmento de código a continuación:

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

    Como se puede ver, se guardan los datos en un nuevo array más completo para después pintar los datos que sean necesarios.

+ Se ha realizado también la paginación de los resultados utilizando una variable límite que permite cargar el número de datos que se quieran y no los 20 que aparecen por defecto en la API. Para ello se ha utilizado otra variable que controla el offset de los mismos.