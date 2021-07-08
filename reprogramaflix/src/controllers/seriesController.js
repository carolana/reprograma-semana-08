const series = require("../models/series.json")


const home = (request, response) => {
    response.status(200).send(
        {
            "message": "Olá, pessoal, bem-vindos ao {reprograma}flixx!!"
        }
    )
}

const getAll = (request, response) => {
    response.status(200).send(series)
}

const getById = (request, response) => {
    const requestedId = request.params.id

    const filteredId = series.find(serie => serie.id == requestedId)

    response.status(200).send(filteredId)
}

const getByTitle = (request, response) => {
    const requestedTitle = request.query.title.toLowerCase()

    const filteredTitle = series.find(serie => serie.title.toLowerCase().includes(requestedTitle))
    
        if(requestedTitle === "" || filteredTitle === undefined) {
            response.status(404).send(
                {
                "message": "Insira um título válido"
                })
        } else {
        response.status(200).send(filteredTitle)
        }
}

const getByGenre = (request, response) =>{
    const requestedGenre = request.query.genre.toLowerCase();
    const filteredGenre = series.filter(serie => {
      const filtro =  serie.genre.find(genero => genero.toLowerCase().includes(requestedGenre))

      if(filtro != null){
          return serie
      }
    });
    if (filteredGenre.length == 0){
        response.status(404).send({"message": "Busca não encontrada. Insira um gênero válido."})
    }else{
        response.status(200).send(filteredGenre);
    }

}



module.exports = {home, getAll, getById, getByTitle, getByGenre}