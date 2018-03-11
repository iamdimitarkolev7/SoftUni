function getArticleGenerator(articles) {
    /*
    *  if we want to save the articles' values =>
    *  let articlesToShow = Object.assign([], articles);
    *  return function () {
        if (articles.length > 0) {
            let article = $('<article>');
            article.append($(`<p>${articlesToShow.shift()}</p>`));
            $('#content').append(article);
        }
    }  in this way values of the variable 'articles' are not changed
    * */
    return function () {
        if (articles.length > 0) {
            let article = $('<article>');
            article.append($(`<p>${articles.shift()}</p>`));
            $('#content').append(article);
        }
    }
}