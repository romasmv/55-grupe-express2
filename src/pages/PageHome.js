import { PageTemplate } from "../template/PageTemplate.js";

export class PageHome extends PageTemplate {
    main() {
        const services = ['UX', 'Design', 'Development'];
        let servicesHTML = '';

        for (const service of services) {
            servicesHTML += `<li>${service}</li>`;
        }

        return `
            <h1>Home page</h1>
            <p>Lorem  voluptates dolores impedit eum aliquam obcaecati?</p>
            <h1>Services</h1>
            <ul>${servicesHTML}</ul>`;
    }
}