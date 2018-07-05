import newsData from '../json/newsData.json';

function getNews() {
    return Promise.resolve(newsData);
}
