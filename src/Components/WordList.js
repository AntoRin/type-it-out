const fetch = require("node-fetch");
const cheerio = require("cheerio");

async function getList() {
    const data = await fetch("https://www.ef.com/wwen/english-resources/english-vocabulary/top-3000-words/",);
    const parsedData = await data.text();
    let $;
    $ = cheerio.load(parsedData);
    let wordList = $("#main-content > div > div > section > div > p:nth-child(2)");    
    let wordArr = wordList.html().split("<br>");
    let myWords = [];

    for(let i = 0; i < 100; i++) {
        let random = Math.floor(Math.random() * 3000);
        wordArr.map((word, index) => {
            index === random && myWords.push(word);
            return word;
        });
    }
    return myWords;
}


// module.exports = { getList };
export default getList;

