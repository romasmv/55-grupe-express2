import { PageTemplate } from "../template/PageTemplate.js";

export class PageRegister extends PageTemplate {
    constructor() {
        super();
        this.pageType = 'auth';
        this.isAsideVisible = false;
    }

    main() {
        return `
            <h1>Register page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa culpa animi explicabo quo dignissimos consequuntur voluptates. Autem ipsa eius mollitia fugiat veniam explicabo rerum, pariatur, dolores impedit eum aliquam obcaecati?</p>
            <form>
                <label>Username</label>
                <input type="text">
                <label>Password</label>
                <input type="password">
                <button type="submit">Register</button>
            </form>`;
    }
}