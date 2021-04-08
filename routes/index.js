const express = require('express');
const router = express.Router();
const projects = require('../data.json').projects;

router.get('/', (req, res) => {
    res.render('index', {projects});
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project', (req, res) => {
    const num = Math.floor(Math.random()*projects.length);
    res.redirect(`/project/${num}`);
});

router.get('/project/:id', (req, res) => {
    const id = +req.params.id;
    console.log(id);
    if (!projects[id]) {
        return res.redirect('/error');
    }
    res.render('project', {project: projects[id]});
});

module.exports = router;