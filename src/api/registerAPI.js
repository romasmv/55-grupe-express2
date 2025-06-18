import { users } from "../data/users.js";
import { IsValid } from "../lib/isValid.js";

export function registerAPI(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        username: 'username',
        pass: 'password',
        userAge: 'age',
    });

    if (err) {
        return msg;
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
