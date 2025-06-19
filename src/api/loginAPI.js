import { users, loginTokens } from "../data/users.js";
import { IsValid } from "../lib/isValid.js";

export function loginAPI(req, res) {
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

    let userObj = null;

    for (const user of users) {
        if (user.username === req.body.username && user.password === req.body.password) {
            userObj = user;
            break;
        }
    }

    if (!userObj) {
        return res.json({
            status: 'error',
            msg: {
                password: 'Neteisinga username ir password pora.',
            },
        });
    }
     
    //TODO: reikalinga randomString() funkcija
    const randomString = '584hgs5fasd584aef';
    loginTokens.push({
        userId: userObj.id,
        randomString: randomString,
        createdAt: Date.now(),
    });

    return res
        .set({
            'Set-Cookie': `login-token=${randomString}; domain=localhost; max-age=3600; HttpOnly; path=/; Secure; SameSite=Lax`,
        })
        .json({
            status: 'success',
            msg: 'Tu buvai sekmingai prijungtas prie sistemos',
        });
}
