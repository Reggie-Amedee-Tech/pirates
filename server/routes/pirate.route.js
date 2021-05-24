const PirateController = require('../controller/pirate.controller');

module.exports = function(app) {
    app.post('/api/pirate', PirateController.createPirate);
    app.get('/api/pirate/all', PirateController.showAllPirates);
    app.get('/api/pirate/:id', PirateController.pirateDetails);
    app.put('/api/pirate/:id', PirateController.updatePirate);
    app.delete('/api/pirate/:id', PirateController.deletePirate);
};
