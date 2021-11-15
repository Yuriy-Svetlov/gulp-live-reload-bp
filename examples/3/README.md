# Example - 3 (Gulp) (live-reload-bp)

How to use «*Partial reload*» in **Live Reload Browser Page**.

**1.** Download or copy [example-3](https://github.com/Yuriy-Svetlov/live-reload-bp/tree/main/documentation/examples/gulp/3)

**2.** Go to the directory with `gulpfile.js` and run the command in console: 

```shell
npm install
```

**3.** Double-clisk on **start.bat** or run in console 

```shell
gulp start
```
In the console you should see the following message:

> Server started | host: 127.0.0.1 | port: 8080

**4.** 
Open your browser: http://localhost:3000

**5.** Set up a connection with the plugin. [Example of how to establish a connection to a plugin](https://github.com/Yuriy-Svetlov/live-reload-bp/tree/main/documentation/examples/%D1%81onnect_to_server)

**6.** 
If you change the `src/index.html`, `src/scss/main-1/1.scss`, `src/scss/main-1/_1.scss`, `src/scss/main-2/2.scss` or `src/js/1.js`, reload of the browser page will be partial. If you change the `src/js/2.js`, the browser page will not be reload. If you disable 'Partial reload' in the browser plugin **Live Reload Browser Page** will be full reload of the browser page. 

\* You may need to disable the cache in the Google Chrome browser developer console.

![Disable cache](https://raw.githubusercontent.com/Yuriy-Svetlov/live-reload-bp/main/images/disable_cache.png)

**Congratulation!**
