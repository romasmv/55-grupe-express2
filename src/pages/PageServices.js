import { PageTemplate } from "../template/PageTemplate.js";
import { services } from "../components/services.js";

export class PageServices extends PageTemplate {
    main() {
        return `
               ${services()}
           `;
    }
}