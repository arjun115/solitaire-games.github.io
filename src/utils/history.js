import { createBrowserHistory } from 'history'

class History {

    api = createBrowserHistory({
        basename: '',
        forceRefresh: false,
        keyLength: 6
    })

    constructor() {
        let qParams = this.getQueryParams()
        if (qParams['callbackUrl']) {
            this.forward(qParams['callbackUrl'])
        }
    }

    forward(path) {
        if (this.api.location.pathname !== path) {
            this.api.push(path)
        }
    }
    
    back() {
        this.api.goBack()
    }

    getQueryParams() {
        let queryString = this.api.location.search
        queryString = queryString.substring(queryString.indexOf('?')+1).split('&')
        let params = {}
        let pair = null
        for (var i = queryString.length - 1; i >= 0; i--) {
            pair = queryString[i].split('=');
            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
        }
        return params
    }
}

export default new History()