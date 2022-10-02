const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the partners to you');
    })
    .post((req, res) => {
        res.end(`Will add partner: ${req.body.name} with description ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT not supported for /partners');
    })
    .delete((req, res) => {
        res.end('Deleting all partners');
    });

partnerRouter.route('/:partnerId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details for partner ${req.params.partnerId}`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported');
    })
    .put((req, res) => {
        res.end(`Updating partner ${req.body.name} with description ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting partner ${req.params.partnerId}`);
    });

module.exports = partnerRouter;