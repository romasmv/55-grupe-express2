import { stats } from "../data/stats.js";

export function hero() {
    return `
        <section class="container bg-dark hero">
            <div class="row">
                <div class="col-12 col-lg-6 hero-content">
                    <div>Current Electricity Services</div>
                    <h1>Power for Seamless Electricity Solutions</h1>
                    <p>Whether you're a homeowner, business owner, or community leader, a we're here to light up your life with sustainable energy solutions that.</p>
                    <div>
                        <a href="#">Get a free estimate</a>
                        <a href="#">Discover more</a>
                    </div>
                    <div>
                        STARS
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <p style="font-size: 5rem; color: red;">Šis puslapis peržiūrėtas: ${stats.visitsCount}</p>
                </div>
            </div>
        </section>`;
}