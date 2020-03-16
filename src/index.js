import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();

let loadScript = (src) => {
    let tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName('body')[0].appendChild(tag);
}

setTimeout(() => {
    loadScript('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
    loadScript('//cookie-script.com/s/1585fc872fa92d28180e2a6e9ead9e0b.js')
}, 0)

