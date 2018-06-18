const searchresults = document.getElementById("searchresults__query")

const url_string = window.location.href;
const url = new URL(url_string);
const query = url.searchParams.get("query");

searchresults.innerHTML = query;
