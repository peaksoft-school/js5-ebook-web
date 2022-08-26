export const requestObj = {
   genres: [],
   bookType: 'PAPER_BOOK',
   priceFrom: null,
   priceTo: null,
   languages: null,
   search: 'all',
   sortBy: null,
   page: null,
   size: null,
}

export function sortRequestApplic(obj) {
   let text = ''
   // eslint-disable-next-line no-restricted-syntax
   for (const key in obj) {
      if (obj[key] !== null) {
         if (text !== '') {
            if (key === 'genres') {
               text = `${text}&${genresFunc(obj[key])}`
            } else {
               text = `${text}&${key}=${obj[key]}`
            }
         } else if (key === 'genres') {
            text = `?${genresFunc(obj[key])}`
         } else {
            text = `?${key}=${obj[key]}`
         }
      }
   }
   return text
}

function genresFunc(genres) {
   let text = ''
   for (let i = 0; i < genres.length; i += 1) {
      if (text !== '') {
         text = `${text}&genres=${genres[i]}`
      } else {
         text = `genres=${genres[i]}`
      }
   }
   return text
}
