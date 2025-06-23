import { PageTemplate } from "../template/PageTemplate.js";

export class PageDashboard extends PageTemplate {
    constructor(req) {
        super(req);
    }

 
    main() {
        if (!this.req.user.isLoggedIn) {
            return `
                <section class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1>Unauthorized access</h1>
                            <p>Turinys yra pasiekiamas TIK prisijungusiems vartotojams!</p>
                            <a href="/login">Prisijungti</a>
                            <p>arba</p>
                            <a href="/register">Susikurti paskyra</a>
                        </div>
                    </div>
                <section>`;
        }

        return `
            <section class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Dashboard</h1>
                        <p>Cia turetu buti matoma kazkokia informacija, kuri yra skirta matyti TIK prisijungusiam vartotojui</p>
                        <a href="/">Back home</a>
                    </div>
                </div>
            <section>`;
    }
}