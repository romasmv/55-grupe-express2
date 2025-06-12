import { PageTemplate } from "../template/PageTemplate.js";

export class PageAbout extends PageTemplate {
    main() {
        return `
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa culpa animi explicabo quo dignissimos consequuntur voluptates. Autem ipsa eius mollitia fugiat veniam explicabo rerum, pariatur, dolores impedit eum aliquam obcaecati?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa culpa animi explicabo quo dignissimos consequuntur voluptates. Autem ipsa eius mollitia fugiat veniam explicabo rerum, pariatur, dolores impedit eum aliquam obcaecati?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa culpa animi explicabo quo dignissimos consequuntur voluptates. Autem ipsa eius mollitia fugiat veniam explicabo rerum, pariatur, dolores impedit eum aliquam obcaecati?</p>`;
    }
}