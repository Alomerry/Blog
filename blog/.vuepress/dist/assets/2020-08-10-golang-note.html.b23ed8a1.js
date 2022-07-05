const l=JSON.parse('{"key":"v-52535075","path":"/posts/2020-08-10-golang-note.html","title":"Golang Note","lang":"en-US","frontmatter":{"layout":"Post","title":"Golang Note","subtitle":"\u8BB0\u5F55 Golang \u5B66\u4E60\u8FC7\u7A0B\u4E2D\u7684\u7ECF\u9A8C\u3001\u9047\u5230\u7684\u5751\u70B9\u7B49","author":"Alomerry Wu","date":"2020-08-10T00:00:00.000Z","update":"2022-07-02T00:00:00.000Z","useHeaderImage":true,"headerMask":"rgba(40, 57, 101, .5)","catalog":true,"headerImage":"https://cdn.alomerry.com/blog/img/in-post/header-image?max=59","tags":["Y2020","U2022","Golang","TODO"]},"excerpt":"<!-- Description. -->\\n","headers":[{"level":2,"title":"Slice","slug":"slice","children":[]},{"level":2,"title":"Signal \u5305","slug":"signal-\u5305","children":[]},{"level":2,"title":"flag \u5305","slug":"flag-\u5305","children":[{"level":3,"title":"os.Args","slug":"os-args","children":[]}]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u7C7B\u578B\u4E0E\u7C7B\u578B\u522B\u540D","slug":"\u81EA\u5B9A\u4E49\u7C7B\u578B\u4E0E\u7C7B\u578B\u522B\u540D","children":[{"level":3,"title":"\u81EA\u5B9A\u4E49\u7C7B\u578B","slug":"\u81EA\u5B9A\u4E49\u7C7B\u578B","children":[]},{"level":3,"title":"\u7C7B\u578B\u522B\u540D","slug":"\u7C7B\u578B\u522B\u540D","children":[]},{"level":3,"title":"\u533A\u522B","slug":"\u533A\u522B","children":[]}]},{"level":2,"title":"unsafe","slug":"unsafe","children":[{"level":3,"title":"Pointer","slug":"pointer","children":[{"level":4,"title":"\u6307\u9488\u7C7B\u578B\u8F6C\u6362","slug":"\u6307\u9488\u7C7B\u578B\u8F6C\u6362","children":[]},{"level":4,"title":"\u5904\u7406\u7CFB\u7EDF\u8C03\u7528","slug":"\u5904\u7406\u7CFB\u7EDF\u8C03\u7528","children":[]}]}]},{"level":2,"title":"\u514B\u9686 \u6DF1\u6D45\u62F7\u8D1D","slug":"\u514B\u9686-\u6DF1\u6D45\u62F7\u8D1D","children":[]},{"level":2,"title":"Context","slug":"context","children":[{"level":3,"title":"Context \u63A5\u53E3","slug":"context-\u63A5\u53E3","children":[]},{"level":3,"title":"\u539F\u7406","slug":"\u539F\u7406","children":[{"level":4,"title":"\u4E0A\u4E0B\u6587\u6570\u636E\u7684\u5B58\u50A8\u4E0E\u67E5\u8BE2","slug":"\u4E0A\u4E0B\u6587\u6570\u636E\u7684\u5B58\u50A8\u4E0E\u67E5\u8BE2","children":[]},{"level":4,"title":"\u624B\u52A8cancel\u548C\u8D85\u65F6cancel","slug":"\u624B\u52A8cancel\u548C\u8D85\u65F6cancel","children":[]}]}]},{"level":2,"title":"\u7A7A interface type","slug":"\u7A7A-interface-type","children":[]},{"level":2,"title":"map","slug":"map","children":[]},{"level":2,"title":"\u5E38\u89C1\u5751","slug":"\u5E38\u89C1\u5751","children":[]},{"level":2,"title":"\u98CE\u683C","slug":"\u98CE\u683C","children":[{"level":3,"title":"Panic","slug":"panic","children":[]}]},{"level":2,"title":"defer","slug":"defer","children":[]},{"level":2,"title":"\u7ADE\u4E89\u6761\u4EF6","slug":"\u7ADE\u4E89\u6761\u4EF6","children":[]},{"level":2,"title":"GC","slug":"gc","children":[]},{"level":2,"title":"\u65B9\u6CD5\u7684\u7ED3\u6784\u6307\u9488\u63A5\u6536\u8005\u548C\u7ED3\u6784\u503C\u63A5\u6536\u8005","slug":"\u65B9\u6CD5\u7684\u7ED3\u6784\u6307\u9488\u63A5\u6536\u8005\u548C\u7ED3\u6784\u503C\u63A5\u6536\u8005","children":[]},{"level":2,"title":"\u6570\u636E\u7ED3\u6784","slug":"\u6570\u636E\u7ED3\u6784","children":[]},{"level":2,"title":"\u8BED\u8A00\u57FA\u7840","slug":"\u8BED\u8A00\u57FA\u7840","children":[]},{"level":2,"title":"\u5E38\u7528\u5173\u952E\u5B57","slug":"\u5E38\u7528\u5173\u952E\u5B57","children":[]},{"level":2,"title":"\u8FD0\u884C\u65F6-\u5E76\u53D1","slug":"\u8FD0\u884C\u65F6-\u5E76\u53D1","children":[{"level":3,"title":"Context","slug":"context-1","children":[]},{"level":3,"title":"\u540C\u6B65\u4E0E\u9501","slug":"\u540C\u6B65\u4E0E\u9501","children":[{"level":4,"title":"\u57FA\u672C\u539F\u8BED","slug":"\u57FA\u672C\u539F\u8BED","children":[{"level":5,"title":"Mutex","slug":"mutex","children":[]},{"level":5,"title":"\u72B6\u6001","slug":"\u72B6\u6001","children":[]},{"level":5,"title":"\u52A0\u9501\u548C\u89E3\u9501","slug":"\u52A0\u9501\u548C\u89E3\u9501","children":[]}]}]}]},{"level":2,"title":"\u8FD0\u884C\u65F6-\u5185\u5B58\u7BA1\u7406","slug":"\u8FD0\u884C\u65F6-\u5185\u5B58\u7BA1\u7406","children":[]},{"level":2,"title":"Slice","slug":"slice-1","children":[]},{"level":2,"title":"Signal \u5305","slug":"signal-\u5305-1","children":[]},{"level":2,"title":"flag \u5305","slug":"flag-\u5305-1","children":[{"level":3,"title":"os.Args","slug":"os-args-1","children":[]}]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u7C7B\u578B\u4E0E\u7C7B\u578B\u522B\u540D","slug":"\u81EA\u5B9A\u4E49\u7C7B\u578B\u4E0E\u7C7B\u578B\u522B\u540D-1","children":[{"level":3,"title":"\u81EA\u5B9A\u4E49\u7C7B\u578B","slug":"\u81EA\u5B9A\u4E49\u7C7B\u578B-1","children":[]},{"level":3,"title":"\u7C7B\u578B\u522B\u540D","slug":"\u7C7B\u578B\u522B\u540D-1","children":[]},{"level":3,"title":"\u533A\u522B","slug":"\u533A\u522B-1","children":[]}]},{"level":2,"title":"unsafe","slug":"unsafe-1","children":[{"level":3,"title":"Pointer","slug":"pointer-1","children":[{"level":4,"title":"\u6307\u9488\u7C7B\u578B\u8F6C\u6362","slug":"\u6307\u9488\u7C7B\u578B\u8F6C\u6362-1","children":[]},{"level":4,"title":"\u5904\u7406\u7CFB\u7EDF\u8C03\u7528","slug":"\u5904\u7406\u7CFB\u7EDF\u8C03\u7528-1","children":[]}]}]},{"level":2,"title":"\u514B\u9686 \u6DF1\u6D45\u62F7\u8D1D","slug":"\u514B\u9686-\u6DF1\u6D45\u62F7\u8D1D-1","children":[]},{"level":2,"title":"Context","slug":"context-2","children":[{"level":3,"title":"Context \u63A5\u53E3","slug":"context-\u63A5\u53E3-1","children":[]},{"level":3,"title":"\u539F\u7406","slug":"\u539F\u7406-1","children":[{"level":4,"title":"\u4E0A\u4E0B\u6587\u6570\u636E\u7684\u5B58\u50A8\u4E0E\u67E5\u8BE2","slug":"\u4E0A\u4E0B\u6587\u6570\u636E\u7684\u5B58\u50A8\u4E0E\u67E5\u8BE2-1","children":[]},{"level":4,"title":"\u624B\u52A8 cancel \u548C\u8D85\u65F6 cancel","slug":"\u624B\u52A8-cancel-\u548C\u8D85\u65F6-cancel","children":[]}]},{"level":3,"title":"Case: \u8D85\u65F6\u63A7\u5236","slug":"case-\u8D85\u65F6\u63A7\u5236","children":[{"level":4,"title":"\u5F0F\u4E00","slug":"\u5F0F\u4E00","children":[]},{"level":4,"title":"\u5F0F\u4E8C","slug":"\u5F0F\u4E8C","children":[]},{"level":4,"title":"\u5F0F\u4E09","slug":"\u5F0F\u4E09","children":[]},{"level":4,"title":"\u5F0F\u56DB","slug":"\u5F0F\u56DB","children":[]}]}]},{"level":2,"title":"\u7A7A interface type","slug":"\u7A7A-interface-type-1","children":[]},{"level":2,"title":"map","slug":"map-1","children":[]},{"level":2,"title":"\u5E38\u89C1\u5751","slug":"\u5E38\u89C1\u5751-1","children":[{"level":3,"title":"\u6570\u7EC4\u548C\u5207\u7247\u4F5C\u4E3A\u53C2\u6570\u5206\u522B\u662F\u503C\u4F20\u9012\u548C\u5F15\u7528\u4F20\u9012","slug":"\u6570\u7EC4\u548C\u5207\u7247\u4F5C\u4E3A\u53C2\u6570\u5206\u522B\u662F\u503C\u4F20\u9012\u548C\u5F15\u7528\u4F20\u9012","children":[]},{"level":3,"title":"for range \u4E2D\u7684\u53C2\u6570\u4E3A\u503C\u62F7\u8D1D","slug":"for-range-\u4E2D\u7684\u53C2\u6570\u4E3A\u503C\u62F7\u8D1D","children":[]}]},{"level":2,"title":"\u98CE\u683C","slug":"\u98CE\u683C-1","children":[{"level":3,"title":"Panic","slug":"panic-1","children":[]}]},{"level":2,"title":"defer","slug":"defer-1","children":[{"level":3,"title":"\u7279\u70B9","slug":"\u7279\u70B9","children":[]},{"level":3,"title":"\u7528\u9014","slug":"\u7528\u9014","children":[]}]},{"level":2,"title":"\u7ADE\u4E89\u6761\u4EF6","slug":"\u7ADE\u4E89\u6761\u4EF6-1","children":[]},{"level":2,"title":"GC","slug":"gc-1","children":[]},{"level":2,"title":"\u65B9\u6CD5\u7684\u7ED3\u6784\u6307\u9488\u63A5\u6536\u8005\u548C\u7ED3\u6784\u503C\u63A5\u6536\u8005","slug":"\u65B9\u6CD5\u7684\u7ED3\u6784\u6307\u9488\u63A5\u6536\u8005\u548C\u7ED3\u6784\u503C\u63A5\u6536\u8005-1","children":[]},{"level":2,"title":"\u65F6\u95F4\u8F93\u51FA","slug":"\u65F6\u95F4\u8F93\u51FA","children":[]},{"level":2,"title":"golang \u8BFB\u53D6\u6587\u4EF6\u6027\u80FD\u5BF9\u6BD4","slug":"golang-\u8BFB\u53D6\u6587\u4EF6\u6027\u80FD\u5BF9\u6BD4","children":[]},{"level":2,"title":"GVM \u5B89\u88C5 Golang","slug":"gvm-\u5B89\u88C5-golang","children":[]},{"level":2,"title":"go install","slug":"go-install","children":[]},{"level":2,"title":"Golang \u5927\u6740\u5668\u4E4B\u6027\u80FD\u5256\u6790 PProf","slug":"golang-\u5927\u6740\u5668\u4E4B\u6027\u80FD\u5256\u6790-pprof","children":[]},{"level":2,"title":"golang cond \u5524\u9192\u9501","slug":"golang-cond-\u5524\u9192\u9501","children":[]},{"level":2,"title":"golang \u83B7\u53D6\u968F\u673A\u6570","slug":"golang-\u83B7\u53D6\u968F\u673A\u6570","children":[]},{"level":2,"title":"golang \u5B57\u7B26\u4E32\u62FC\u63A5\u6027\u80FD","slug":"golang-\u5B57\u7B26\u4E32\u62FC\u63A5\u6027\u80FD","children":[{"level":3,"title":"\u5927\u91CF\u5B57\u7B26\u4E32\u62FC\u63A5\u6027\u80FD\u6D4B\u8BD5","slug":"\u5927\u91CF\u5B57\u7B26\u4E32\u62FC\u63A5\u6027\u80FD\u6D4B\u8BD5","children":[]}]},{"level":2,"title":"Go \u8BED\u8A00\u6587\u4EF6\u8BFB\u53D6","slug":"go-\u8BED\u8A00\u6587\u4EF6\u8BFB\u53D6","children":[]},{"level":2,"title":"golang cond \u5524\u9192\u9501","slug":"golang-cond-\u5524\u9192\u9501-1","children":[]},{"level":2,"title":"\u5173\u4E8E signal.Notify \u7684\u4E00\u4E2A\u5C0F\u95EE\u9898","slug":"\u5173\u4E8E-signal-notify-\u7684\u4E00\u4E2A\u5C0F\u95EE\u9898","children":[]},{"level":2,"title":"\u5173\u4E8E signal.Notify \u4F7F\u7528\u5E26\u7F13\u5B58\u7684 channel","slug":"\u5173\u4E8E-signal-notify-\u4F7F\u7528\u5E26\u7F13\u5B58\u7684-channel","children":[]},{"level":2,"title":"\u67D0\u4E2A\u7C7B\u578B\u662F\u5426\u5B9E\u73B0\u4E86\u67D0\u4E2A\u63A5\u53E3","slug":"\u67D0\u4E2A\u7C7B\u578B\u662F\u5426\u5B9E\u73B0\u4E86\u67D0\u4E2A\u63A5\u53E3","children":[]},{"level":2,"title":"FAQ","slug":"faq","children":[]}],"git":{"updatedTime":1657029090000},"readingTime":{"minutes":33,"words":7213},"filePathRelative":"posts/2020-08-10-golang-note.md"}');export{l as data};