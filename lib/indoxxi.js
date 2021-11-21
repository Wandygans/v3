const cheerio = require('cheerio')
const axios = require('axios')

async function indoxxi(q) {
    return new Promise((resolve, reject) => {
        axios.request(`https://204.48.22.58/?s=${q}`, {
        method: "GET",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9,id;q=0.8",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
        }
    }).then(respon => {
        let hasil = []
        const $ = cheerio.load(respon.data)
        $('#featured').each(function (an, jg){
            $(jg).find('.ml-item').each(function (FU, CK) {
                let url = $(CK).find('a').attr('href')
                let judul = $(CK).find('a').attr('title')
                let duration = $(CK).find('a > div.rating-durasi > span.mli-durasi').text().trim()
                let rating = $(CK).find('a > div.rating-durasi > span.mli-rating').text().trim()
                let quality = $(CK).find('a > span:nth-child(1)').text().trim()
                let thumb = $(CK).find('a > img').attr('src')
                const res = {
                    url: "http:"+url,
                    judul: judul,
                    durtion: duration+"m",
                    rating: rating,
                    quality: quality,
                    thumb: "http:"+thumb
                }
                hasil.push(res)
                resolve(hasil)
            })
    })
    })
})
}


indoxxi('thanos')
.then((data) => console.log(data))