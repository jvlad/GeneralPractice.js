/** discover_site_map returns a representation of the links between pages, using whatever data structure you think is suitable: 
Input: 
 [
    { 'user': 'A', 'page': 1 },
    { 'user': 'B', 'page': 5 },
    { 'user': 'A', 'page': 2 },
    { 'user': 'A', 'page': 1 },
    { 'user': 'B', 'page': 2 },
    { 'user': 'C', 'page': 7 },
    { 'user': 'C', 'page': 3 },
    { 'user': 'A', 'page': 3 },
    { 'user': 'C', 'page': 1 },
]

OutPut:
  1 -> 2, 3 
  2 -> 1 
  3 -> 1 
  5 -> 2 
  7 -> 3
*/

log = [
    { 'user': 'A', 'page': 1 },
    { 'user': 'B', 'page': 5 },
    { 'user': 'A', 'page': 2 },
    { 'user': 'A', 'page': 1 },
    { 'user': 'B', 'page': 2 },
    { 'user': 'C', 'page': 7 },
    { 'user': 'C', 'page': 3 },
    { 'user': 'A', 'page': 3 },
    { 'user': 'C', 'page': 1 },
    { 'user': 'D', 'page': 8 },
    { 'user': 'D', 'page': 1 },
]

discoverSiteMap = function(log) {
    var count = 0
    var siteMap = {}
    var lastPageVisitedBy = {}
    for (var i = 0; i < log.length; i++) {
        var currentUser = log[i].user
        var currentPage = log[i].page
        if (!lastPageVisitedBy[currentUser]) {
            lastPageVisitedBy[currentUser] = currentPage
        } else {
            addPageLink(siteMap, lastPageVisitedBy[currentUser], currentPage)
            lastPageVisitedBy[currentUser] = currentPage
        }
    }
    return siteMap
}

addPageLink = function(siteMap, fromPage, toPage) {
    if (!siteMap[fromPage]) {
        siteMap[fromPage] = new Set()
    }
    siteMap[fromPage].add(toPage)
}

module.exports = {
    data: discoverSiteMap(log)
}
