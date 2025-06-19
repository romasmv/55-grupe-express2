import { PageTemplate } from "../template/PageTemplate.js";

export class PageLogin extends PageTemplate {
    constructor(req) {
        super(req);
        this.pageType = 'auth';
        this.pageJS = 'login';
    }

    main() {
        return `
            <section class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Login page</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa culpa animi explicabo quo dignissimos consequuntur voluptates. Autem ipsa eius mollitia fugiat veniam explicabo rerum, pariatur, dolores impedit eum aliquam obcaecati?</p>
                        <div id="success_msg" class="info info-success">SUCCESS</div>
                        <form class="form">
                            <div class="form-row">
                                <label>Username</label>
                                <input id="username" type="text" autofocus>
                                <span id="error_username" class="info info-error">ERROR</span>
                            </div>
                            <div class="form-row">
                                <label>Password</label>
                                <input id="password" type="password">
                                <span id="error_password" class="info info-error">ERROR</span>
                            </div>
                            <div class="form-row">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            <section>`;
    }
}