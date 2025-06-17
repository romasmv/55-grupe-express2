import { users } from "../data/users.js";
import { PageTemplate } from "../template/PageTemplate.js";

export class PageTeam extends PageTemplate {
    constructor(req) {
        super(req);
    }

    main() {
        let HTML = '';

        if (users.length) {
            for (const user of users) {
                HTML += `<li>${user.username} (${user.password})</li>`;
            }

            HTML = `<ul>${HTML}</ul>`;
        } else {
            HTML = '<p>Panašu, jog šiuo metu nėra registruotų narių.</p>';
        }

        return `
            <section class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Our team</h1>
                        <p><a href="/register">Register</a> to become our member</p>
                        ${HTML}
                    </div>
                </div>
            <section>`;
    }
}