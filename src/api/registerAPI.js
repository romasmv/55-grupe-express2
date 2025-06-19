import { users } from "../data/users.js";
import { IsValid } from "../lib/isValid.js";

export function registerAPI(req, res) {
    const [err, msg] = IsValid.fields(req.body, {
        username: 'username',
        password: 'password',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    // tikriname, ar nera dublikatu
    for (const user of users) {
        if (user.username === req.body.username) {
            return res.json({
                status: 'error',
                msg: {
                    username: 'Sorry, toks username jau uzimtas :(',
                },
            });
        }
    }

// "registering"
    users.push({ id: users.length + 1, ...req.body });

    return res.json({
        status: 'success',
        msg: 'Tu esi, nr:' + users.length,
    });
}
