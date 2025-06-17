import { hero } from "../components/hero.js";
import { services } from "../components/services.js";
import { PageTemplate } from "../template/PageTemplate.js";

export class PageHome extends PageTemplate {
    constructor(req) {
        super(req);
        this.pageJS = 'main';
    }

    main() {
        return `
            ${hero()}
            ${services(3)}
        `;
    }
}