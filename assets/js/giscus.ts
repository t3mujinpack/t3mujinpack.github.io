'use strict'

import { default as params } from '@params';
import Giscus from 'mods/giscus/js';

const giscus = new Giscus(params.endpoint);
window.Giscus = giscus;

// this should be bound to "giscus-load" event, but that is being launched too early, the one second delay does the trick
setTimeout(() => {
    const theme = localStorage.getItem("dark-mode");
    if (theme == ""){
        window.Giscus.setTheme('light')
    }
    else {
        window.Giscus.setTheme(theme)
    }
}, 1000);