import { users } from "../data/users.js";

export function registerAPI(req, res) {
    // is not valid req.body.username
    if (false) {
        return res.send('Netinkamas username');
    }

    // is not valid req.body.password
    if (false) {
        return res.send('Netinkamas password');
    }

    // tikriname, ar nera dublikatu
    for (const user of users) {
        if (user.username === req.body.username) {
            return res.send('Sorry, toks username jau uzimtas :(');
        }
    }

    // "registruojame"
    users.push(req.body);

    return res.send('Tu esi, nr:' + users.length);
}