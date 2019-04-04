const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const sanitizeHtml = require('sanitize-html');
// const shrinkRay = require('shrink-ray');
// const DomParser = require('dom-parser');
const https = require('https');
const fs = require('fs')
const app = express()
    .set('view engine', 'ejs')
    .set('views', 'view')
    // .use(shrinkRay)
    // .use(setHeader)
    .use(express.static('./src/css'))
    .use(express.static('./src/images'))
    .use(express.static('./src/js'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .get('/', index)
    .get('/offline', offline)
    .get('/:id', detail)
    // .post('/', index)

const port = 5000;


// function setHeader(req, res, next){
//     res.setHeader('Cache-Control', 'max-age=' + 365 * 24 * 60 * 60 + ', public'); 
//     next();
// }

function index(req, res) {
    res.render('pages/index.ejs')

    // fetch('https://www.cmd-amsterdam.nl/wp-json/wp/v2/pages/758')
    //     .then(function(response) {
    //         return response.json();
    //     })
    //     .then(function(json) {
    //         return sanitizeHtml(json.content.rendered, {
    //             allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'ul', 'ol', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'table', 'thead', 'caption',
    //                 'tbody', 'tr', 'th', 'td', 'pre', 'span', 'iframe', 'img'
    //             ],
    //             allowedAttributes: {
    //                 'a': ['href'],
    //                 'img': ['src']
    //             },
    //             transformTags: {
    //                 'span': 'h2',
    //             }

    //         })
    //     }).then(function(html){
    //         const rx1 = /\[.+\]/g;
    //         return normalHtml = html.replace(rx1, "");

           // // <(\w+)(?:\s+\w+="[^"]+(?:"\$[^"]+"[^"]+)?")*>\s*</\1>
    //     })
    //     .then(function(html) {
    //         res.send(normalHtml);
    //     });



    // https.get("https://www.cmd-amsterdam.nl/wp-json/wp/v2/pages/758", response => {
    //     let data = "";

    //     response.on("data", buffer => data += buffer)

    //     response.on("end", () => {
    //         const html = JSON.parse(data).content.rendered;

    //         // Selects all the: [full-width] bs
    //         const rx1 = /\[.+\]/g;

    //         // Selects all white spaces
    //         const rx2 = /(?<=\>)[\t\n\r\s]+(?=\<)/g;

    //         // Selects all the useful tags
    //         const rx3 = /\<(p|a|form|button|h[1-6]).+?\1\>|\<img.+?\/?\>|(?<=(div|span).+\>).[^\<\>]+(?=\<\/(div|span))/g;

    //         const normalHtml = html.replace(rx1, "");
    //         const minifiedHtml = normalHtml.replace(rx2, "")

    //         const temp = [];
    //         let result;

    //         while ((result = rx3.exec(minifiedHtml)) !== null) {
    //             temp.push(result[0])
    //         }

    //         console.log(temp.join(""))

    //         res.send(temp.join(""))
    //     })
    // })
}

function offline(req, res) {
    res.render('pages/offline.ejs');
}

function detail(req, res) {
    res.render('pages/detail.ejs'
        //     ,{
        //     detailBook: detailResult
        // }
    );
}

app.listen(5000, () => console.log(`Example app listening on port ${port}!`))
    // app.listen(process.env.PORT || 5000)