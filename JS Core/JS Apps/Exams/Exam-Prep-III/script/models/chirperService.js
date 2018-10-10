let chirperService = (() => {

    function loadChirps(subs) {
        let endpoint = `chirps?query={"author":{"$in": ${subs}}}&sort={"_kmd.ect": 1}`;

        return requester.get('appdata', endpoint, 'kinvey');
    }

    return {
        loadChirps
    }

})();