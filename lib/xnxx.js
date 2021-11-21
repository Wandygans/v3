const axios = require('axios');
const cheerio = require('cheerio');

async function xnxx(q) {
	return new Promise(async (resolve, reject) => {
		await axios.get(`https://www.xnxx.com/search/${q}`, {
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
			}
		}).then(respon => {
			const $ = cheerio.load(respon.data)
			const hasil = []
			$('#content-thumbs > div.mozaique.cust-nb-cols').each(function (tyu, zu) {
				$(zu).find('div').each(function (chu, chuwi) {
					const Url = $(chuwi).find('div.thumb-inside > div > a').attr('href') || undefined
					const thumb = $(chuwi).find('div.thumb-inside > div > a > img').attr('data-src') || undefined
					const judul = $(chuwi).find('div.thumb-under > p:nth-child(1) > a').text().trim() || undefined
					const View = $(chuwi).find('div.thumb-under > p.metadata > span.right > span.superfluous').text().trim() || undefined
					const Info = $(chuwi).find('div.thumb-under > p.metadata').text().trim() || undefined
					const result = {
						url: Url,
						judul: judul,
						thumb: thumb,
						view: View,
						info: Info
					}
					hasil.push(result)
				})
			})
			const hasil2 = []
			hasil.map(itzy => {
				if (itzy.url === undefined) return 
				if (itzy.judul === undefined) return 
				if (itzy.thumb === undefined) return
				if (itzy.view === undefined) return
				if (itzy.info === undefined) return
				const Format = {
					judul: itzy.judul,
					url: 'https://www.xnxx.com' + itzy.url,
					thumb: itzy.thumb,
					viewers: itzy.view,
					info: itzy.info
				}
				hasil2.push(Format)
			})
			const data = {
				status: respon.status,
				result: hasil2
			}
			resolve(data)
		}).catch(reject)
	})
}


// USAGE

xnxx('pubg+gameplay')
 .then((data) => console.log(data))
  .catch((err) => console.log(err));