import express from 'express';
import { PageHome } from './pages/PageHome.js';
import { PageAbout } from './pages/PageAbout.js';
import { PageRegister } from './pages/PageRegister.js';
import { PageLogin } from './pages/PageLogin.js';
import { Page404 } from './pages/Page404.js';
import { PageServices } from './pages/PageServices.js';
import { PageServiceInner } from './pages/PageServiceInner.js';
import { PageServiceDelete } from './pages/PageServiceDelete.js';
import { PageTeam } from './pages/PageTeam.js';
import { registerAPI } from './api/registerAPI.js';
import { loginAPI } from './api/loginAPI.js';
import { PageDashboard } from './pages/PageDashboard.js';

const app = express();
const port = 3010;

app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
    req.user = {
        username: '',
        isLoggedIn: false,
    };

    if (!req.headers.cookie) {
        console.log('nera cookie header');
        return next();
    }

    const cookieParts = req.headers.cookie.split(';').map(s => s.trim());
    let cookie = '';

    for (const cookieStr of cookieParts) {
        if (cookieStr.startsWith('login-token=')) {
            cookie = cookieStr.slice(12);
            break;
        }
    }

    if (!cookie) {
        console.log('nera login-token cookie');
        return next();
    }

    if (cookie.length !== 20) {
        console.log('login-token nera 20 simboliu');
        return next();
    }

    let user = null;

    for (const cookieTokens of loginTokens) {
        if (cookieTokens.randomString === cookie) {
            user = cookieTokens;
            break;
        }
    }

    if (!user) {
        console.log('pagal cookie nerastas registruotas token');
        return next();
    }

    // radom kuriam vartotojui davem sita sausaini!!!
    // user.userId

    req.user.username = 'Chuck';
    req.user.isLoggedIn = true;

    return next();
});


// public routes
app.get('/', (req, res) => res.send(new PageHome(req).render()));
app.get('/about', (req, res) => res.send(new PageAbout(req).render()));
app.get('/services', (req, res) => res.send(new PageServices(req).render()));
app.get('/services/delete', (req, res) => res.send(new PageServiceDelete(req).render()));
app.get('/services/:service', (req, res) => res.send(new PageServiceInner(req).render()));
app.get('/team', (req, res) => res.send(new PageTeam(req).render()));
app.get('/register', (req, res) => res.send(new PageRegister(req).render()));
app.get('/login', (req, res) => res.send(new PageLogin(req).render()));

// private routes
app.get('/dashboard', (req, res) => res.send(new PageDashboard(req).render()));

// api routes
app.post('/api/register', registerAPI);
app.post('/api/login', loginAPI);

// error
app.get('*error', (req, res) => res.send(new Page404(req).render()));

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});