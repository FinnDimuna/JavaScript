async function getPopularRepos(language, minStars) {
    let startDate = Date.now();
    let topRepos = [];
    let response = await fetch(`https://api.github.com/search/repositories?q=language:${language}+stars:>=${minStars}&sort=stars&order=desc`);
    if (!response.ok) {
        let endDate = Date.now();
        console.log(`Вызов завершился с ошибкой за: ${endDate - startDate} мс`);
        return topRepos;
    }
    response = await response.json();
    response = response.items;
    for (let i = 0; i < 10; i++) {
        let {name, html_url, stargazers_count} = response[i];
        let repo = {name, html_url, stargazers_count};
        topRepos.push(repo);
    }
    let endDate = Date.now();
    console.log(`Вызов завершился верно за: ${endDate - startDate} мс`);
    return topRepos;
}

getPopularRepos('html', 4).then(console.log);