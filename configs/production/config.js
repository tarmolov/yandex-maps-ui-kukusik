export const config = {
    environmentName: 'production',
    port: 8080,
    publicPath: 'http://localhost:8082/kukusik/{{DEB_VERSION}}/out',
    staticMiddleware: (req, res, next) => next(),
    render: (ctx) => `
        <!doctype html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>yandex-maps-ui-kukusik</title>
          <link rel="stylesheet" href="${ctx.publicPath}/styles.css">
        </head>

        <body>
          <div id="app">
            <h1>Hello, ${ctx.environmentName}!</h1>
          </div>
          <script src="${ctx.publicPath}/scripts.js"></script>
        </body>
        </html>
    `
};
