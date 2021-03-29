// const { searchPlate } = require('search-plate-pb')
const sinespApi = require('sinesp-api');


module.exports = {
    async search(req, res) {
        const { plate } = req.params
        const plate_regex = '[A-Z]{3}[0-9][0-9A-Z][0-9]{2}';

        if (!plate.match(plate_regex)) {
            throw new Error('Placa possui formato inválido');
        }

        try {
            const foundPlate = await sinespApi.search(plate); 
            return res.json(foundPlate)

        } catch (e) {
            return res.status(400).send("A placa enviada é inválida ou a API de consulta se encontra indisponível. Tente novamente em alguns instantes.")
        }
    }
}