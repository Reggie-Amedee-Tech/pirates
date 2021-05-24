const Pirate = require('../model/pirate.model')



module.exports = {
    createPirate: (request, response) => {
        const{pirateName, imageUrl, treasureChest, catchPhrase, position, attribute} = request.body;
        Pirate.create({
            pirateName,
            imageUrl,
            treasureChest,
            catchPhrase,
            position,
            attribute
            
        })
        .then(pirate=> response.json(pirate))
        .catch(err=> response.status(400).json(err))
    }
}

module.exports.showAllPirates = (request,response) => {
    Pirate.find({})
    .then(pirates=> response.json(pirates))
    .catch(err=> response.json(err))
}

module.exports.pirateDetails = (request, response) => {
    Pirate.findOne({_id: request.params.id})
    .then(pirate=> response.json(pirate))
    .catch(err=> response.json(err))
}

module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({_id: request.params.id})
    .then(deleteConfirmation=> response.json(deleteConfirmation))
    .catch(err=> response.json(err))
}

module.exports.updatePirate = (request, response) => {
    Pirate.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
    .then(updatedPirate=> response.json(updatedPirate))
    .catch(err=> response.response(400).json(err))
}





