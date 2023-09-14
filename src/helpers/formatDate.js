const formatDate = (date, format = 'DE') => {
    if(format === 'DE') {
        const today = new Date(date);
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        
        return dd + '.' + mm + '.' + yyyy;
    } else {
        return date;
    }

}

export default formatDate;