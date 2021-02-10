const fetch = require("node-fetch");
const cheerio = require("cheerio");

let cache;

async function getData() {
    let webContent;
    if(cache) {
        webContent = cache;
    }
    else {
        try {
            const data = await fetch("https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/");
            const parsedData = await data.text();
            webContent = parsedData;
            cache = parsedData;
        } catch (err) {
            console. error(err);
        }
    }
    
    let $;
    $ = cheerio.load(webContent);
    let wordList = $("#main-content > div > div > section > div > p:nth-child(2)");    
    let wordArr = wordList.html().split("<br>");
    let myWords = [];

    for(let i = 0; i < 100; i++) {
        let random = Math.floor(Math.random() * 3000);
        wordArr.map((word, index) => {
            index === random && myWords.push(word);
        });
    }
    // console.log(myWords);
    return myWords;
}


module.exports = { getData };

