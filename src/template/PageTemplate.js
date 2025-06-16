export class PageTemplate {
    constructor() {
        this.pageType = 'default';
        this.isAsideVisible = true;
    }

    head() {
        return `
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Express example</title>
                <link rel="shortcut icon" href="/logo.png" />
                <link rel="icon" type="image/png" href="/favico"/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favico"/favicon.svg" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Coming soon" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="stylesheet" href="/css/main.css">
                <link rel="stylesheet" href="/css/vendor/font-awesome.min.css">
            </head>`;
    }

    header() {
        return `
            <header>
                <img src="#" alt="Logo">
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/register">Register</a>
                    <a href="/services">Services</a>
                    <a href="/login">Login</a>
                </nav>
            </header>`;
    }

    headerAuth() {
        return `
            <header>
                <img src="#" alt="Logo">
                <nav>
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                </nav>
            </header>`;
    }

    footer() {
        return `
            <footer>
                <p>Pagaminta Lietuvoje &copy; 2025</p>
            </footer>`;
    }

    footerAuth() {
        return `
            <footer>
                Pagaminta Lietuvoje &copy; 2025
            </footer>`;
    }

    script() {
        if (this.pageJS === '') {
            return '';
        }
        return `<script src="/js/${this.pageJS}.js" type="module"></script>`;
    }

    aside() {
        return `<aside>SONINIS MENU</aside>`;
    }

    main() {
        return 'CONTENT...';
    }

    render() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            ${this.head()}
            <body>
                ${this.pageType === 'default' ? this.header() : this.headerAuth()}
                ${this.isAsideVisible ? this.aside() : ''}
                <main>${this.main()}</main>
                ${this.pageType === 'default' ? this.footer() : this.footerAuth()}
                <script src="/js/main.js" type="module"></script>
            </body>
            </html>`;
    }
}