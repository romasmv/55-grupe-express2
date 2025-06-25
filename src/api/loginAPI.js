import { users, loginTokens } from "../data/users.js";
import { IsValid } from "../lib/isValid.js";
import { randomString } from "../lib/randomString.js";

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

    const loginTokenString = randomString();

    loginTokens.push({
        userId: userObj.id,
        randomString: loginTokenString,
        createdAt: Date.now(),
    });

    const cookieParams = [
        `login-token=${loginTokenString}`,
        'domain=localhost',
        'max-age=3600',
        'HttpOnly',
        'path=/',
        'Secure',
        'SameSite=Lax',
    ];

    return res
        .set({ 'Set-Cookie': cookieParams.join('; ') })
        .json({
            status: 'success',
            msg: 'Tu buvai sekmingai prijungtas prie sistemos',
        });
}
