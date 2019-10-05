const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
//const formidable = require('formidable');
const breeds = require('../data/breeds');
const cats = require('../data/cats');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/cats/add-cat' && req.method === 'GET') {

        let filePath = path.normalize(
            path.join(__dirname, "../views/addCat.html")
        );

        const index = fs.createReadStream(filePath);

        index.on('data', (data) => {
            res.write(data);
        });

        index.on('end', () => {
            res.end();
        });

        index.on('error', (err) => {
            console.log(err);
        });

    } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
        let filePath = path.normalize(
            path.join(__dirname, "../views/addBreed.html")
        );

        const index = fs.createReadStream(filePath);
        let catBreedPlaceholder = breeds.map((breed) => `<option value="${breed}">${breed}</option>`);
        let modifiedData = data.toString().replace('{{catBreeds}}', catBreedPlaceholder);

        index.on('data', (data) => {
            res.write(data);
            modifiedData;
        });

        index.on('end', () => {
            res.end();
        });

        index.on('error', (err) => {
            console.log(err);
        });

    } else if (pathname === '/cats/add-cat' && req.method === 'POST') {
        let formData = '';
        let catBreedPlaceholder = breeds.map((breed) => `<option value="${breed}">${breed}</option>`);
        let modifiedData = data.toString().replace('{{catBreeds}}', catBreedPlaceholder);

        res.on('data', (data) => {
            formData += data;
        });

        res.on('end', () => {

            let body = fs.parse(formData);

            fs.readFile('./data/cats.json', (err, data) => {
                if (err) {
                    throw err;
                }

                let cat = JSON.parse(data);
                cat.push(body.cat);
                let JSON = JSON.stringify(cat);
                modifiedData(data);

                fs.writeFile('./data/cats.json', json, 'utf-8', () => console.log('The cat was uploaded successfully'));
            });

            res.writeHead(302, {
                location: '/'
            });

            res.end();
        })
    } else if (pathname === '/cats/add-breed' && req.method === 'POST') {
        let formData = '';

        res.on('data', (data) => {
            formData += data;
        });

        res.on('end', () => {

            let body = fs.parse(formData);

            fs.readFile('./data/breeds.json', (err, data) => {
                if (err) {
                    throw err;
                }

                let breed = JSON.parse(data);
                breed.push(body.breed);
                let JSON = JSON.stringify(breed);

                fs.writeFile('./data/breeds.json', json, 'utf-8', () => console.log('The breed was uploaded successfully'));
            });

            res.writeHead(302, {
                location: '/'
            });

            res.end();
        })
    } else {
        return true;
    }
}