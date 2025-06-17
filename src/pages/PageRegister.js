import { PageTemplate } from "../template/PageTemplate.js";

export class PageRegister extends PageTemplate {
    constructor(req) {
        super(req);
        this.pageType = 'auth';
        this.pageJS = 'register';
    }

    main() {
        return `
            <section class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Register page</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa culpa animi explicabo quo dignissimos consequuntur voluptates. Autem ipsa eius mollitia fugiat veniam explicabo rerum, pariatur, dolores impedit eum aliquam obcaecati?</p>
                        <form class="form">
                            <div class="form-row">
                                <label>Username</label>
                                <input id="username" type="text" autofocus>
                            </div>
                            <div class="form-row">
                                <label>Password</label>
                                <input id="password" type="password">
                            </div>
                            <div class="form-row">
                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            <section>`;
    }
}