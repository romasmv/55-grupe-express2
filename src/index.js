import express from 'express';
import { PageHome } from './pages/PageHome.js';
import { PageAbout } from './pages/PageAbout.js';
import { PageRegister } from './pages/PageRegister.js';
import { Page404 } from './pages/Page404.js';
import { PageServices } from './pages/PageServices.js';
import { PageServiceInner } from './pages/PageServiceInner.js';
import { PageServiceDelete } from './pages/PageServiceDelete.js';
import { PageTeam } from './pages/PageTeam.js';
import { registerAPI } from './api/registerAPI.js';

const app = express();
const port = 3010;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => res.send(new PageHome(req).render()));
app.get('/about', (req, res) => res.send(new PageAbout(req).render()));
app.get('/services', (req, res) => res.send(new PageServices(req).render()));
app.get('/services/delete', (req, res) => res.send(new PageServiceDelete(req).render()));
app.get('/services/:service', (req, res) => res.send(new PageServiceInner(req).render()));
app.get('/team', (req, res) => res.send(new PageTeam(req).render()));
app.get('/register', (req, res) => res.send(new PageRegister(req).render()));

app.post('/api/register', registerAPI);

app.get('*error', (req, res) => res.send(new Page404(req).render()));

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});