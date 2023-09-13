const fetchSearch = (val) => {
    if(!val) return [];

    return fetch("https://api.cloud.tui.com/search-destination/v2/de/package/TUICOM/2/autosuggest/peakwork/" + val)
        .then(async (response) => {
            return await (response.json ? response.json() : []);
        })
        .catch(() => {
            return [];
        });
};

export default fetchSearch;
