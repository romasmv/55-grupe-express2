import { servicesData } from "../data/servicesData.js";
import { PageTemplate } from "../template/PageTemplate.js";

export class PageServiceInner extends PageTemplate {
    constructor(req) {
        super(req);
    }

    main() {
        const data = servicesData.filter(s => s.link === '/' + this.req.params.service);
        let HTML = '';

        if (data[0]) {
            HTML = `<pre>${JSON.stringify(data[0], null, 4)}</pre>`;
        } else {
            HTML = `<p>Norima paslauga neegzistuoja</p>`;
        }

        return `
            <section class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Service "${this.req.params.service}"</h1>
                        ${HTML}
                        <a href="/services">Back to services list</a>
                    </div>
                </div>
            <section>`;
    }
}