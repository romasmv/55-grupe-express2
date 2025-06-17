import { servicesData } from "../data/servicesData.js";
import { PageTemplate } from "../template/PageTemplate.js";

export class PageServiceDelete extends PageTemplate {
    constructor(req) {
        super(req);
    }

    main() {
        servicesData.shift();

        return `
            <section class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>First service has been deleted</h1>
                        <a href="/services">Back to services list</a>
                    </div>
                </div>
            <section>`;
    }
}