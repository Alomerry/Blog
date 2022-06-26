import{_ as n,o as e,c as s,a}from"./app.c3e71323.js";const i={},t=a(`<h2 id="redis-\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#redis-\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> Redis \u77E5\u8BC6\u70B9</h2><h3 id="\u524D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E" aria-hidden="true">#</a> \u524D\u7F6E</h3><ul><li>\u5173\u7CFB\u578B\u6570\u636E\u5E93\u5EFA\u8868\u9700\u8981\u7ED9\u51FA schema\u3001\u7C7B\u578B\u3001\u5B57\u8282\u5BBD\u5EA6\u7B49\u3002\u503E\u5411\u4E8E\u884C\u7EA7\u5B58\u50A8</li><li>\u6570\u636E\u5E93\u8868\u5F88\u5927\u65F6\uFF0C\u6027\u80FD\u662F\u5426\u4E0B\u964D\uFF1F\uFF08\u8868\u6709\u7D22\u5F15\uFF09 <ul><li>\u589E\u5220\u6539\u53D8\u6162</li><li>\u5C11\u91CF\u67E5\u8BE2\u4E0D\u4F1A\u53D8\u6162\uFF0C\u5E76\u53D1\u5927\u65F6\u4F1A\u53D7\u5230\u786C\u76D8\u5E26\u5BBD\u5F71\u54CD\u901F\u5EA6</li></ul></li></ul><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><ul><li>\u4E0B\u8F7D\u3001\u7F16\u8BD1\u5B89\u88C5 make install PREFIX=/opt/alomerry/redis</li><li>\u4F7F\u7528 utils/install_server.sh \u5B89\u88C5\u670D\u52A1\uFF0C\u8BBE\u7F6E\u81EA\u542F\u52A8</li></ul><h3 id="epoll" tabindex="-1"><a class="header-anchor" href="#epoll" aria-hidden="true">#</a> epoll</h3><ul><li>\u65E9\u8D77 BIO \u6D41\u7A0B</li><li>NIO\uFF08\u591A\u8DEF\u590D\u7528 \uFF09\u3001AIO \u540C\u6B65\u975E\u79DF\u585E\u3001</li><li>select\u3001read\u3001epoll\u3001mmap</li></ul><h3 id="redis-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#redis-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> Redis \u5E94\u7528\u573A\u666F</h3><ul><li>\u4E94\u5927 value \u7C7B\u578B</li><li>\u7F13\u5B58</li><li>\u4E3A\u4E86\u670D\u52A1\u65E0\u72B6\u6001\uFF0C\u5EF6\u4F38\u601D\u8003\uFF0C\u9879\u76EE\u4E2D\u54EA\u4E9B\u6570\u636E\u7ED3\u6784\u6216\u5BF9\u8C61\uFF0C\u5728\u5355\u673A\u91CC\u9700\u8981\u5355\u673A\u9501\uFF0C\u5728\u591A\u673A\u91CC\u9700\u8981\u5206\u5E03\u5F0F\u9501</li><li>\u65E0\u9501\u5316</li></ul><h3 id="set\u3001zset-\u5206\u522B\u7528\u4E8E\u54EA\u4E9B\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#set\u3001zset-\u5206\u522B\u7528\u4E8E\u54EA\u4E9B\u573A\u666F" aria-hidden="true">#</a> Set\u3001ZSet \u5206\u522B\u7528\u4E8E\u54EA\u4E9B\u573A\u666F</h3><h3 id="redis-\u5355\u7EBF\u7A0B-\u591A\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#redis-\u5355\u7EBF\u7A0B-\u591A\u7EBF\u7A0B" aria-hidden="true">#</a> Redis \u5355\u7EBF\u7A0B/\u591A\u7EBF\u7A0B</h3><ul><li>\u65E0\u8BBA\u4EC0\u4E48\u7248\u672C\uFF0C\u5DE5\u4F5C\u7EBF\u7A0B\u90FD\u662F\u4E00\u4E2A</li><li>6.x \u7248\u672C\u540E\u51FA\u73B0\u4E86 IO \u591A\u7EBF\u7A0B</li><li>[ Todo \u5B66\u4E60\u4E00\u4E0B\u7CFB\u7EDF IO ] \u7406\u89E3\u9762\u5411 IO \u6A21\u578B\u7F16\u7A0B\u65F6\uFF0C\u6709\u5185\u6838\u7684\u4E8B\uFF0C\u4ECE\u5185\u6838\u628A\u6570\u636E\u8FD0\u5230\u7A0B\u5E8F\u91CC\u662F\u7B2C\u4E00\u6B65\uFF0C\u642C\u8FD0\u56DE\u6765\u7684\u6570\u636E\u505A\u8BA1\u7B97\u662F\u7B2C\u4E8C\u6B65\u3002\uFF08example: netty\uFF09</li></ul><h3 id="redis-\u5B58\u5728\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\u5417-\u4E3A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#redis-\u5B58\u5728\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\u5417-\u4E3A\u4EC0\u4E48" aria-hidden="true">#</a> Redis \u5B58\u5728\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\u5417\uFF1F\u4E3A\u4EC0\u4E48</h3><h3 id="\u9047\u5230\u8FC7\u7F13\u5B58\u7A7F\u900F\u5417-\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u8FC7\u7F13\u5B58\u7A7F\u900F\u5417-\u63CF\u8FF0" aria-hidden="true">#</a> \u9047\u5230\u8FC7\u7F13\u5B58\u7A7F\u900F\u5417\uFF1F\u63CF\u8FF0</h3><h3 id="\u9047\u5230\u8FC7\u7F13\u5B58\u51FB\u7A7F\u5417-\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u8FC7\u7F13\u5B58\u51FB\u7A7F\u5417-\u63CF\u8FF0" aria-hidden="true">#</a> \u9047\u5230\u8FC7\u7F13\u5B58\u51FB\u7A7F\u5417\uFF1F\u63CF\u8FF0</h3><h3 id="\u5982\u4F55\u907F\u514D\u7F13\u5B58\u96EA\u5D29" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u907F\u514D\u7F13\u5B58\u96EA\u5D29" aria-hidden="true">#</a> \u5982\u4F55\u907F\u514D\u7F13\u5B58\u96EA\u5D29\uFF1F</h3><h3 id="\u7F13\u5B58\u662F\u5982\u4F55\u56DE\u6536\u7684" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u662F\u5982\u4F55\u56DE\u6536\u7684" aria-hidden="true">#</a> \u7F13\u5B58\u662F\u5982\u4F55\u56DE\u6536\u7684\uFF1F</h3><h3 id="\u7F13\u5B58\u662F\u5982\u4F55\u9884\u70ED\u7684" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u662F\u5982\u4F55\u9884\u70ED\u7684" aria-hidden="true">#</a> \u7F13\u5B58\u662F\u5982\u4F55\u9884\u70ED\u7684\uFF1F</h3><h3 id="\u6570\u636E\u5E93\u4E0E\u7F13\u5B58\u4E0D\u4E00\u81F4\u5982\u4F55\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u4E0E\u7F13\u5B58\u4E0D\u4E00\u81F4\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a> \u6570\u636E\u5E93\u4E0E\u7F13\u5B58\u4E0D\u4E00\u81F4\u5982\u4F55\u89E3\u51B3</h3><h2 id="homework" tabindex="-1"><a class="header-anchor" href="#homework" aria-hidden="true">#</a> Homework</h2><ul><li>\u5199\u51FA\u4E0B\u9762\u7684 Redis \u547D\u4EE4 <ul><li>Redis \u4E2D\u63D2\u5165\u5341\u6761 student{id, name, age} \u7684\u6570\u636E\u3002</li><li>Redis \u4E2D\u8BB0\u5F55 student \u7684\u6295\u7968\u6B21\u6570\uFF0C\u5E76\u6267\u884C\u52A0 1 \u548C\u52A0 3 \u7684\u64CD\u4F5C\u3002</li></ul></li><li>\u4F7F\u7528\u540E\u7AEF\u6846\u67B6\u64CD\u4F5C Redis \u5B9E\u73B0\u4E0B\u9762\u7684\u529F\u80FD <ul><li>Redis \u4E2D\u63D2\u5165\u5341\u6761 student{id, name, age} \u7684\u6570\u636E\u3002\u5176\u4E2D student \u9700\u8981\u5B9A\u4E49\u6210 model\uFF0Cid\u3001name\u3001age \u90FD\u9700\u8981\u968F\u673A\u751F\u6210\u3002</li><li>Redis \u4E2D\u8BB0\u5F55 student \u7684\u6295\u7968\u6B21\u6570(\u521D\u59CB\u503C\u968F\u673A\u751F\u6210)\uFF0C\u5E76\u6309\u4ECE\u4F4E\u5230\u9AD8\u7684\u987A\u5E8F\u53D6\u51FA\u6765\u3002</li></ul></li></ul><p>\u4F7F\u7528 Redis \u547D\u4EE4\u4EE3\u7801\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> sadd studentIds <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">10</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">10</span>
<span class="token operator">&gt;</span> hmset studentInfos <span class="token number">1</span> <span class="token string">&quot;{name:&#39;a&#39;,age:18}&quot;</span> <span class="token number">2</span> <span class="token string">&quot;{name:&#39;b&#39;,age:18}&quot;</span> <span class="token number">3</span> <span class="token string">&quot;{name:&#39;c&#39;,age:18}&quot;</span> <span class="token number">4</span> <span class="token string">&quot;{name:&#39;d&#39;,age:18}&quot;</span> <span class="token number">5</span> <span class="token string">&quot;{name:&#39;e&#39;,age:18}&quot;</span> <span class="token number">6</span> <span class="token string">&quot;{name:&#39;f&#39;,age:18}&quot;</span> <span class="token number">7</span> <span class="token string">&quot;{name:&#39;g&#39;,age:18}&quot;</span> <span class="token number">8</span> <span class="token string">&quot;{name:&#39;h&#39;,age:18}&quot;</span> <span class="token number">9</span> <span class="token string">&quot;{name:&#39;i&#39;,age:18}&quot;</span> <span class="token number">10</span> <span class="token string">&quot;{name:&#39;j&#39;,age:18}&quot;</span> 
OK
<span class="token operator">&gt;</span> hmset studentVote <span class="token number">1</span> <span class="token number">0</span> <span class="token number">2</span> <span class="token number">0</span> <span class="token number">3</span> <span class="token number">0</span> <span class="token number">4</span> <span class="token number">0</span> <span class="token number">5</span> <span class="token number">0</span> <span class="token number">6</span> <span class="token number">0</span> <span class="token number">7</span> <span class="token number">0</span> <span class="token number">8</span> <span class="token number">0</span> <span class="token number">9</span> <span class="token number">0</span> <span class="token number">10</span> <span class="token number">0</span>
OK
<span class="token operator">&gt;</span> hincrby studentVote <span class="token number">1</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token operator">&gt;</span> hincrby studentVote <span class="token number">2</span> <span class="token number">3</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token operator">&gt;</span> hincrby studentVote <span class="token number">3</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token operator">&gt;</span> hincrby studentVote <span class="token number">4</span> <span class="token number">3</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token operator">&gt;</span> hincrby studentVote <span class="token number">5</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token operator">&gt;</span> hincrby studentVote <span class="token number">6</span> <span class="token number">3</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token operator">&gt;</span> hincrby studentVote <span class="token number">7</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token operator">&gt;</span> hincrby studentVote <span class="token number">8</span> <span class="token number">3</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token operator">&gt;</span> hincrby studentVote <span class="token number">9</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token operator">&gt;</span> hincrby studentVote <span class="token number">10</span> <span class="token number">3</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token operator">&gt;</span> smembers studentIds
 <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
 <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
 <span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
 <span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
 <span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;6&quot;</span>
 <span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;7&quot;</span>
 <span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;8&quot;</span>
 <span class="token number">9</span><span class="token punctuation">)</span> <span class="token string">&quot;9&quot;</span>
<span class="token number">10</span><span class="token punctuation">)</span> <span class="token string">&quot;10&quot;</span>
<span class="token operator">&gt;</span> hgetall studentInfos
 <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
 <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;{name:&#39;a&#39;,age:18}&quot;</span>
 <span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
 <span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;{name:&#39;b&#39;,age:18}&quot;</span>
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
 <span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;{name:&#39;c&#39;,age:18}&quot;</span>
 <span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
 <span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;{name:&#39;d&#39;,age:18}&quot;</span>
 <span class="token number">9</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
<span class="token number">10</span><span class="token punctuation">)</span> <span class="token string">&quot;{name:&#39;e&#39;,age:18}&quot;</span>
<span class="token number">11</span><span class="token punctuation">)</span> <span class="token string">&quot;6&quot;</span>
<span class="token number">12</span><span class="token punctuation">)</span> <span class="token string">&quot;{name:&#39;f&#39;,age:18}&quot;</span>
<span class="token number">13</span><span class="token punctuation">)</span> <span class="token string">&quot;7&quot;</span>
<span class="token number">14</span><span class="token punctuation">)</span> <span class="token string">&quot;{name:&#39;g&#39;,age:18}&quot;</span>
<span class="token number">15</span><span class="token punctuation">)</span> <span class="token string">&quot;8&quot;</span>
<span class="token number">16</span><span class="token punctuation">)</span> <span class="token string">&quot;{name:&#39;h&#39;,age:18}&quot;</span>
<span class="token number">17</span><span class="token punctuation">)</span> <span class="token string">&quot;9&quot;</span>
<span class="token number">18</span><span class="token punctuation">)</span> <span class="token string">&quot;{name:&#39;i&#39;,age:18}&quot;</span>
<span class="token number">19</span><span class="token punctuation">)</span> <span class="token string">&quot;10&quot;</span>
<span class="token number">20</span><span class="token punctuation">)</span> <span class="token string">&quot;{name:&#39;j&#39;,age:18}&quot;</span>
<span class="token operator">&gt;</span> hgetall studentVote
 <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
 <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
 <span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
 <span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
 <span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
 <span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
 <span class="token number">7</span><span class="token punctuation">)</span> <span class="token string">&quot;4&quot;</span>
 <span class="token number">8</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
 <span class="token number">9</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
<span class="token number">10</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">11</span><span class="token punctuation">)</span> <span class="token string">&quot;6&quot;</span>
<span class="token number">12</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">13</span><span class="token punctuation">)</span> <span class="token string">&quot;7&quot;</span>
<span class="token number">14</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">15</span><span class="token punctuation">)</span> <span class="token string">&quot;8&quot;</span>
<span class="token number">16</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
<span class="token number">17</span><span class="token punctuation">)</span> <span class="token string">&quot;9&quot;</span>
<span class="token number">18</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">19</span><span class="token punctuation">)</span> <span class="token string">&quot;10&quot;</span>
<span class="token number">20</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E94\u79CD\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E94\u79CD\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u4E94\u79CD\u6570\u636E\u7ED3\u6784</h2><h3 id="\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B57\u7B26\u4E32</h3><p>\u5E38\u7528\u547D\u4EE4</p><p>set key value \u8BBE\u7F6E\u6307\u5B9A key \u7684\u503C\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; set mo 14
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>get key \u83B7\u53D6\u6307\u5B9A key \u7684\u503C\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; getset mo 16
&quot;14&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>getrange key start end \u8FD4\u56DE key \u4E2D\u5B57\u7B26\u4E32\u7684\u5B50\u5B57\u7B26\u4E32\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; set mo &quot;314dsafdaga&quot;
OK                                  
&gt; getrange mo 0 7
&quot;314dsafd&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getset key value \u5C06\u6307\u5B9A key \u7684\u503C\u8BBE\u7F6E\u4E3A value\uFF0C\u5E76\u8FD4\u56DE key \u7684\u65E7\u503C\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; getset mo 1
&quot;314dsafdaga&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>mset key value [key value] \u8BBE\u7F6E\u4E00\u4E2A\u6216\u591A\u4E2A key-value \u5BF9\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; mset mo 12 de 12
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>mget key1 [key2] \u83B7\u53D6\u4E00\u4E2A\u6216\u591A\u4E2A key \u7684\u503C\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; mget mo de
1) &quot;12&quot;
2) &quot;12&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setnx key value \u53EA\u6709 key \u4E0D\u5B58\u5728\u65F6\u624D\u4F1A\u8BBE\u7F6E value\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; setnx mo 10
(integer) 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>strlen key \u8FD4\u56DE key \u6240\u50A8\u5B58\u7684\u5B57\u7B26\u4E32\u503C\u7684\u957F\u5EA6\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; strlen mo
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>msetnx key value [key value] \u7ED9\u4E00\u4E2A\u6216\u591A\u4E2A key \u8BBE\u7F6E value\uFF0C\u5F53\u4E14\u4EC5\u5F53\u6240\u6709 key \u90FD\u4E0D\u5B58\u5728\u65F6\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; msetnx mo 100
(integer) 0
&gt; del mo
(integer) 1
&gt; msetnx mo 100 de 12
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>incr key \u5C06 key \u4E2D\u5B58\u50A8\u7684\u6570\u5B57\u503C\u589E\u52A0 1\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; incr mo
(integer) 101
&gt; set mo &quot;1a&quot;
OK
&gt; incr mo
(error) ERR value is not an integer or out of range
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>incrby key increment \u5C06 key \u4E2D\u7684\u6570\u5B57\u503C\u589E\u52A0 increment\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; set mo 11
OK
&gt; incrby mo 100
(integer) 111
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>append key value \u5728\u6307\u5B9A key \u7684\u503C\u540E\u8FFD\u52A0 value\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; set mo a
OK
&gt; append mo 12
(integer) 3
&gt; get mo
&quot;a12&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>incrbyfloat key decrement \u5C06 key \u6240\u50A8\u5B58\u7684\u503C\u52A0\u4E0A\u7ED9\u5B9A\u7684\u6D6E\u70B9\u503C\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; set mo 1.3
OK
&gt; INCRBYFLOAT mo 1.2
&quot;2.5&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setex key seconds value \u5C06 key \u7684\u503C\u8BBE\u4E3A value \uFF0C\u5E76\u5C06 key \u7684\u8FC7\u671F\u65F6\u95F4\u8BBE\u4E3A seconds\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; setex mo 15 12
OK
&gt; get mo
&quot;12&quot;
&gt; get mo
(nil)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>psetex key milliseconds value \u5C06\u503C key \u7684\u503C\u8BBE\u4E3A value \uFF0C\u5E76\u5C06 key \u7684\u8FC7\u671F\u65F6\u95F4\u8BBE\u4E3A seconds\uFF08\u5355\u4F4D\uFF1A\u6BEB\u79D2\uFF09\u3002</p><h3 id="\u54C8\u5E0C" tabindex="-1"><a class="header-anchor" href="#\u54C8\u5E0C" aria-hidden="true">#</a> \u54C8\u5E0C</h3><p>\u5E38\u7528\u547D\u4EE4</p><p>hset key field value \u5C06\u6307\u5B9A key \u7684 field \u5C5E\u6027\u8BBE\u7F6E\u4E3A value\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; hset mo age 15
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>hget key field \u83B7\u53D6\u6307\u5B9A key \u7684 field \u5B57\u6BB5\u503C\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; hget mo age
&quot;15&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>hsetnx key field value \u5C06\u6307\u5B9A key \u7684 field \u5C5E\u6027\u8BBE\u7F6E\u4E3A value\uFF0C\u4EC5\u5F53 field \u4E0D\u5B58\u5728\u65F6\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; hsetnx mo age 16
(integer) 0
&gt; hsetnx mo year 1997
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hmget key field1 [field2] \u83B7\u53D6\u6307\u5B9A key \u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u5C5E\u6027\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; hmget mo year age
1) &quot;2007&quot;
2) &quot;16.1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hexists key field \u68C0\u67E5\u6307\u5B9A key \u662F\u5426\u5305\u542B\u6307\u5B9A field\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; hexists mo age
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>hgetall key \u83B7\u53D6\u6307\u5B9A key \u7684\u6240\u6709\u5B57\u6BB5\u548C\u503C\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; hgetall mo
1) &quot;age&quot;
2) &quot;15&quot;
3) &quot;year&quot;
4) &quot;1997&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hincrby key field increment \u7ED9\u6307\u5B9A key \u7684\u6307\u5B9A\u5B57\u6BB5\u589E\u52A0\u4E00\u4E2A\u6574\u6570\u503C increment\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; hincrby mo year 10
(integer) 2007
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>hkeys key \u83B7\u53D6\u6307\u5B9A key \u7684\u6240\u6709\u5C5E\u6027\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; hkeys mo
1) &quot;age&quot;
2) &quot;year&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hlen key \u83B7\u53D6\u6307\u5B9A key \u7684\u5C5E\u6027\u6570\u91CF\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; hlen mo
(integer) 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>hvals key \u83B7\u53D6\u6307\u5B9A key \u7684\u6240\u6709\u5C5E\u6027\u503C\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; hvals mo
1) &quot;16.1&quot;
2) &quot;2007&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hincrbyfloat key field increment \u5C06\u6307\u5B9A key \u7684 field \u5C5E\u6027\u589E\u52A0\u4E00\u4E2A\u6D6E\u70B9\u503C increment\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; hincrbyfloat mo age 1.1
&quot;16.1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>hdel key field [field2] \u5220\u9664\u6307\u5B9A key \u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u5C5E\u6027\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; hdel mo age year
(integer) 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u5217\u8868" aria-hidden="true">#</a> \u5217\u8868</h3><p>\u5E38\u7528\u547D\u4EE4</p><p>lpush key value1 [value2] \u5C06\u4E00\u4E2A\u6216\u591A\u4E2A\u503C\u653E\u5165\u6307\u5B9A\u5217\u8868\u4E2D\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; lpush mo 1 2 3
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>rpop key</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; rpop mo
&quot;1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>blpop key1 [key2] timeout \u4ECE\u5217\u8868\u5934\u90E8\u5F39\u51FA\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u5143\u7D20\u7684\u503C\uFF0C\u5982\u679C\u5217\u8868\u4E3A\u7A7A\u4F1A\u963B\u585E\u81F3\u53EF\u5F39\u51FA\u5143\u7D20\u6216\u8D85\u51FA\u65F6\u95F4\u4E3A\u6B62\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; blpop mo 10
1) &quot;mo&quot;
2) &quot;2&quot;
&gt; blpop mo 10
(nil)
(10.09s)
&gt; blpop mo 10
1) &quot;mo&quot;
2) &quot;1&quot;
(7.90s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>brpop key1 [key2] timeout \u4ECE\u5217\u8868\u5C3E\u90E8\u5F39\u51FA\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u8BE5\u5143\u7D20\u7684\u503C\uFF0C\u5982\u679C\u5217\u8868\u4E3A\u7A7A\u4F1A\u963B\u585E\u81F3\u53EF\u5F39\u51FA\u5143\u7D20\u6216\u8D85\u51FA\u65F6\u95F4\u4E3A\u6B62\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; lpush cv 12
(integer) 1
&gt; llen mo
(integer) 0
&gt; blpop mo cv 3
1) &quot;cv&quot;
2) &quot;12&quot;
&gt; blpop mo cv 3
(nil)
(3.04s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>brpoplpush source destination timeout \u4ECE source \u5217\u8868\u7684\u5C3E\u90E8\u5F39\u51FA\u5143\u7D20\u653E\u7F6E\u5230 destination \u5217\u8868\u7684\u5934\u90E8\uFF0C\u5982\u679C source \u5217\u8868\u4E3A\u7A7A\u4F1A\u963B\u585E\u81F3\u53EF\u5F39\u51FA\u5143\u7D20\u6216\u8D85\u51FA\u65F6\u95F4\u4E3A\u6B62\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; brpoplpush mo cv 3
&quot;1&quot;
&gt; brpoplpush mo cv 3
&quot;2&quot;
&gt; brpoplpush mo cv 3
&quot;3&quot;
&gt; brpoplpush mo cv 3
(nil)
(3.02s)
&gt; brpoplpush mo cv 10
&quot;15&quot;
(4.85s)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>llen key \u83B7\u53D6\u5217\u8868\u957F\u5EA6\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>llen key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>lpop key \u4ECE\u5217\u8868\u5934\u90E8\u5F39\u51FA\u5143\u7D20\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; lpush mo 16 18
(integer) 2
&gt; lpop mo
&quot;18&quot;
&gt; lpop mo
&quot;16&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lindex key index \u83B7\u53D6\u5217\u8868\u6307\u5B9A\u4F4D\u7F6E\u7684\u5143\u7D20\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; lpush mo 16 18
(integer) 2
&gt; lindex mo 0
&quot;18&quot;
&gt; lindex mo 1
&quot;16&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>linsert key before|after pivot value \u5728\u5217\u8868\u7684 pivot \u7684\u524D\u6216\u540E\u63D2\u5165\u5143\u7D20\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; linsert mo before 18 -1
(integer) 3
&gt; lindex mo 0
&quot;-1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lpushx key value \u5C06\u5143\u7D20\u63D2\u5165\u5DF2\u5B58\u5728\u7684\u5217\u8868\u5934\u90E8\uFF0C\u4E0D\u5B58\u5728\u65F6\u65E0\u6CD5\u63D2\u5165\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; lpushx mo 15
(integer) 4
&gt; lpushx a 15
(integer) 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lrange key start stop \u83B7\u53D6\u6307\u5B9A\u8303\u56F4\u5185\u7684\u5217\u8868\u5143\u7D20\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; lrange mo 0 10
1) &quot;15&quot;
2) &quot;-1&quot;
3) &quot;18&quot;
4) &quot;16&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lrem key count value \u4ECE\u5217\u8868\u4E2D\u5220\u9664\u548C value \u76F8\u540C\u7684\u503C\uFF0Ccount \u7684\u503C\u53EF\u4EE5\u662F\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>count &gt; 0 \u4ECE\u5934\u90E8\u5411\u5C3E\u90E8\u641C\u7D22\uFF0C\u5220\u9664 count \u4E2A\u4E0E value \u76F8\u540C\u503C\u7684\u5143\u7D20\u3002</li><li>count &lt; 0 \u4ECE\u5C3E\u90E8\u5411\u5934\u90E8\u641C\u7D22\uFF0C\u5220\u9664 count \u7684\u7EDD\u5BF9\u503C\u4E2A\u4E0E value \u76F8\u540C\u503C\u7684\u5143\u7D20\u3002</li><li>count = 0 \u79FB\u9664\u5217\u8868\u4E2D\u5168\u90E8\u7684\u4E0E value \u76F8\u540C\u503C\u7684\u5143\u7D20\u3002</li></ul><p>\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; lpush mo a b a b a a c c f e g m m m m d
(integer) 16
&gt; lrem mo -2 a
(integer) 2
&gt; lrange mo 0 20
 1) &quot;d&quot;
 2) &quot;m&quot;
 3) &quot;m&quot;
 4) &quot;m&quot;
 5) &quot;m&quot;
 6) &quot;g&quot;
 7) &quot;e&quot;
 8) &quot;f&quot;
 9) &quot;c&quot;
10) &quot;c&quot;
11) &quot;a&quot;
12) &quot;a&quot;
13) &quot;b&quot;
14) &quot;b&quot;
&gt; lrem mo 2 m
(integer) 2
&gt; lrange mo 0 20
 1) &quot;d&quot;
 2) &quot;m&quot;
 3) &quot;m&quot;
 4) &quot;g&quot;
 5) &quot;e&quot;
 6) &quot;f&quot;
 7) &quot;c&quot;
 8) &quot;c&quot;
 9) &quot;a&quot;
10) &quot;a&quot;
11) &quot;b&quot;
12) &quot;b&quot;
&gt; lrem mo 0 a
(integer) 2
&gt; lrange mo 0 20
 1) &quot;d&quot;
 2) &quot;m&quot;
 3) &quot;m&quot;
 4) &quot;g&quot;
 5) &quot;e&quot;
 6) &quot;f&quot;
 7) &quot;c&quot;
 8) &quot;c&quot;
 9) &quot;b&quot;
10) &quot;b&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lset key index value \u901A\u8FC7\u7D22\u5F15\u4FEE\u6539\u6307\u5B9A\u5217\u8868\u7684\u5143\u7D20\u503C\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; lset mo 0 hello
OK
&gt; lrange mo 0 0
1) &quot;hello&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ltrim key start stop \u5C06\u6307\u5B9A\u5217\u8868\u4ECE start \u5230 stop \u8FDB\u884C\u4FEE\u526A\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; lrange mo 0 20
 1) &quot;hello&quot;
 2) &quot;m&quot;
 3) &quot;m&quot;
 4) &quot;g&quot;
 5) &quot;e&quot;
 6) &quot;f&quot;
 7) &quot;c&quot;
 8) &quot;c&quot;
 9) &quot;b&quot;
10) &quot;b&quot;
&gt; ltrim mo 3 5
OK
&gt; lrange mo 0 20
1) &quot;g&quot;
2) &quot;e&quot;
3) &quot;f&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rpoplpush source destination \u5C06 source \u5217\u8868\u7684\u5C3E\u5143\u7D20\u79FB\u51FA\u653E\u7F6E\u5230 destination \u5217\u8868\u7684\u5934\u90E8\u4E2D\u3002</p><p>rpush key value1 [value2] \u5411\u5217\u8868\u7684\u5C3E\u90E8\u6DFB\u52A0\u591A\u4E2A\u5143\u7D20\u3002</p><p>rpushx key value \u5728\u5B58\u5728\u7684\u5217\u8868\u7684\u5C3E\u90E8\u6DFB\u52A0\u5143\u7D20\u3002</p><h3 id="\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u96C6\u5408" aria-hidden="true">#</a> \u96C6\u5408</h3><p>\u5E38\u7528\u547D\u4EE4</p><p>sadd key member1 [member2] \u5411\u96C6\u5408\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; sadd mo 1 2 3
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>scard key \u83B7\u53D6\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u6570\u91CF\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; scard mo
(integer) 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>sdiff key1 [key2] \u8FD4\u56DE\u4E24\u4E2A\u96C6\u5408\u7684\u5DEE\u96C6\uFF0C\u5DEE\u96C6\u4E3A key1 \u96C6\u5408\u7684\u5B50\u96C6\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; sadd mo 1 2 3
(integer) 3
&gt; sadd cv 2 3 9
(integer) 3
&gt; sdiff cv mo
1) &quot;9&quot;
&gt; sdiff mo cv
1) &quot;1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sdiffstore destination key1 [key2] \u5C06\u7ED9\u5B9A\u96C6\u5408\u7684\u5DEE\u96C6\u5B58\u50A8\u5728\u96C6\u5408 destination \u4E2D\uFF0C\u5982\u679C destination \u4E2D\u5DF2\u6709\u6570\u636E\uFF0C\u5219\u4F1A\u88AB\u8986\u76D6\uFF0C\u5DEE\u96C6\u4E3A key1 \u7684\u5B50\u96C6\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; sdiffstore tmp cv mo
(integer) 1
&gt; sadd uv 9 5 7
(integer) 3
&gt; sdiffstore tmp cv mo uv
(integer) 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sismember key member \u5224\u65AD member \u662F\u5426\u5728\u96C6\u5408\u4E2D\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; sismember mo 9
(integer) 0
&gt; sismember mo 2
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>smembers key \u83B7\u53D6\u96C6\u5408\u4E2D\u7684\u5143\u7D20\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; smembers mo
1) &quot;1&quot;
2) &quot;2&quot;
3) &quot;3&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>smove source destination member \u5C06 member \u5143\u7D20\u4ECE source \u96C6\u5408\u79FB\u52A8\u5230 destination \u96C6\u5408\u4E2D\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; smove mo cv 2
(integer) 1
&gt; smembers cv
1) &quot;2&quot;
&gt; smembers mo
1) &quot;1&quot;
2) &quot;3&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>spop key \u79FB\u9664\u5E76\u8FD4\u56DE\u96C6\u5408\u4E2D\u7684\u4E00\u4E2A\u968F\u673A\u5143\u7D20\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; spop mo
&quot;1&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>srandmember key [count] \u8FD4\u56DE\u96C6\u5408\u4E2D\u4E00\u4E2A\u6216\u591A\u4E2A\u968F\u673A\u5143\u7D20\uFF0Ccount \u7684\u503C\u53EF\u4EE5\u662F\u5982\u4E0B\uFF1A</p><ul><li>count \u4E3A\u6B63\u6570\u4E14\u5C0F\u4E8E\u96C6\u5408\u5BB9\u91CF\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B count \u4E2A\u5143\u7D20\u7684\u6570\u7EC4\u3002</li><li>count \u4E3A\u6B63\u6570\u4E14\u5927\u4E8E\u7B49\u4E8E\u96C6\u5408\u5BB9\u91CF\uFF0C\u8FD4\u56DE\u5305\u542B\u96C6\u5408\u5168\u90E8\u5143\u7D20\u7684\u6570\u7EC4\u3002</li><li>count \u4E3A\u8D1F\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5BB9\u91CF\u4E3A count \u7EDD\u5BF9\u503C\u7684\u6570\u7EC4\uFF0C\u4E14\u5143\u7D20\u53EF\u80FD\u91CD\u590D\u3002</li></ul><p>\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; smembers mo
1) &quot;1&quot;
2) &quot;3&quot;
3) &quot;4&quot;
4) &quot;24&quot;
&gt; SRANDMEMBER mo 3
1) &quot;1&quot;
2) &quot;4&quot;
3) &quot;24&quot;
&gt; SRANDMEMBER mo 11
1) &quot;1&quot;
2) &quot;3&quot;
3) &quot;4&quot;
4) &quot;24&quot;
&gt; SRANDMEMBER mo -3
1) &quot;1&quot;
2) &quot;4&quot;
3) &quot;1&quot;
&gt; SRANDMEMBER mo -7
1) &quot;4&quot;
2) &quot;4&quot;
3) &quot;1&quot;
4) &quot;24&quot;
5) &quot;24&quot;
6) &quot;4&quot;
7) &quot;3&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>srem key member1 [member2] \u79FB\u9664\u96C6\u5408\u4E2D\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; srem mo 4 1 24
(integer) 3
&gt; smembers mo
1) &quot;3&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sunion key1 [key2] \u8FD4\u56DE\u7ED9\u5B9A\u96C6\u5408\u7684\u5E76\u96C6\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; smembers mo
1) &quot;3&quot;
&gt; sadd cv 1 9 43 3
(integer) 4
&gt; sunion cv mo
1) &quot;1&quot;
2) &quot;3&quot;
3) &quot;9&quot;
4) &quot;43&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sunionstore destination key1 [key2] \u5C06\u7ED9\u5B9A\u96C6\u5408\u7684\u5E76\u96C6\u4FDD\u5B58\u81F3 destination \u96C6\u5408\u4E2D\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; sunionstore tmp cv mo
(integer) 4
&gt; smembers tmp
1) &quot;1&quot;
2) &quot;3&quot;
3) &quot;9&quot;
4) &quot;43&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6709\u5E8F\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#\u6709\u5E8F\u96C6\u5408" aria-hidden="true">#</a> \u6709\u5E8F\u96C6\u5408</h3><p>\u5E38\u7528\u547D\u4EE4</p><p>zadd key score1 member1 [score2 member2] \u5411\u6709\u5E8F\u96C6\u5408\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u6210\u5458\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zadd mo 1.1 a 12 b
(integer) 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>zcard key \u83B7\u53D6\u6709\u5E8F\u96C6\u5408\u7684\u6210\u5458\u6570\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zcard mo
(integer) 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>zcount key min max \u83B7\u53D6\u6709\u5E8F\u96C6\u5408\u4E2D\u6307\u5B9A\u5206\u6570\u95F4\u7684\u6210\u5458\u6570\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zcount mo 0 2
(integer) 1
&gt; zcount mo 2 20
(integer) 1
&gt; zcount mo 0 20
(integer) 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>zincrby key increment member \u5C06\u6709\u5E8F\u96C6\u5408\u4E2D\u6307\u5B9A\u6210\u5458\u7684\u5206\u6570\u589E\u52A0 increment\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zincrby mo 2.8 a
&quot;3.8999999999999999&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>zscore key member \u8FD4\u56DE\u6709\u5E8F\u96C6\u5408\u4E2D member \u7684\u5206\u6570\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zscore mo b
&quot;12&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>zrevrank key member \u8FD4\u56DE\u6709\u5E8F\u96C6\u5408\u4E2D member \u7684\u6392\u540D\uFF08\u5206\u6570\u7531\u9AD8\u5230\u4F4E\uFF09\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zrevrank mo b
(integer) 0
&gt; zrevrank mo a
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>zrank key member \u8FD4\u56DE\u6709\u5E8F\u96C6\u5408\u4E2D member \u7684\u6392\u540D\uFF08\u5206\u6570\u7531\u4F4E\u5230\u9AD8\uFF09\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zrank mo a
(integer) 0
&gt; zrank mo b
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>zrem key member [member] \u79FB\u9664\u6709\u5E8F\u96C6\u5408\u4E2D\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zrem mo a b
(integer) 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>zlexcount key min max \u8FD4\u56DE\u5206\u6570\u76F8\u540C\u65F6\u6307\u5B9A\u5B57\u5178\u5E8F\u533A\u95F4\u7684\u6210\u5458\u6570\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zadd mo 0 a 0 b 0 c 0 d 0 e
(integer) 5
&gt; zlexcount mo - +
(integer) 5
&gt; zlexcount mo [a (e
(integer) 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>zrangebyscore key min max [withscores] [limit offset count] \u8FD4\u56DE\u6307\u5B9A\u5206\u6570\u8303\u56F4\u5185\u7684\u6709\u5E8F\u96C6\u5408\u5143\u7D20\uFF0C\u6309\u5206\u6570\u4ECE\u5C0F\u5230\u5927\u6392\u5E8F\uFF0C\u6DFB\u52A0 <code>withscores</code> \u53C2\u6570\u4F7F\u7ED3\u679C\u5305\u542B\u5206\u6570\uFF0C<code>limit</code> \u53EF\u4EE5\u83B7\u53D6\u6307\u5B9A\u533A\u95F4\u7684\u7ED3\u679C\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zrangebyscore mo -inf +inf withscores limit 1 2
1) &quot;4&quot;
2) &quot;3.3999999999999999&quot;
3) &quot;2&quot;
4) &quot;13&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>zrevrangebyscore key max min [withscores] \u8FD4\u56DE\u6307\u5B9A\u5206\u6570\u8303\u56F4\u5185\u7684\u6709\u5E8F\u96C6\u5408\u5143\u7D20\uFF0C\u6309\u5206\u6570\u4ECE\u5927\u5230\u5C0F\u6392\u5E8F\uFF0C\u5206\u6570\u4E00\u81F4\u65F6\u6309\u5B57\u5178\u5E8F\u9006\u5E8F\u6392\u5E8F\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zrevrangebyscore mo +inf -inf withscores
 1) &quot;f&quot;
 2) &quot;54&quot;
 3) &quot;m&quot;
 4) &quot;11&quot;
 5) &quot;e&quot;
 6) &quot;0&quot;
 7) &quot;d&quot;
 8) &quot;0&quot;
 9) &quot;c&quot;
10) &quot;0&quot;
11) &quot;b&quot;
12) &quot;0&quot;
13) &quot;a&quot;
14) &quot;0&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>zremrangebylex key min max \u79FB\u9664\u6709\u5E8F\u96C6\u5408\u4E2D\u7ED9\u5B9A\u7684\u5B57\u5178\u533A\u95F4\u7684\u6240\u6709\u6210\u5458\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zremrangebylex mo (a [b
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>zremrangebyrank key start stop \u79FB\u9664\u6709\u5E8F\u96C6\u5408\u4E2D\u7ED9\u5B9A\u7684\u6392\u540D\u533A\u95F4\u7684\u6240\u6709\u6210\u5458\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zremrangebyrank mo 0 1
(integer) 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>zremrangebyscore key min max \u79FB\u9664\u6709\u5E8F\u96C6\u5408\u4E2D\u7ED9\u5B9A\u7684\u5206\u6570\u533A\u95F4\u7684\u6240\u6709\u6210\u5458\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zremrangebyscore mo 10 11
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>zunionstore destination numkeys key [key] \u8BA1\u7B97\u7ED9\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u6709\u5E8F\u96C6\u7684\u5E76\u96C6\uFF0C\u5E76\u4FDD\u5B58\u5230 destination \u4E2D\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zunionstore tmp 2 mo cv
(integer) 4
&gt; zrange tmp 0 20 withscores
1) &quot;b&quot;
2) &quot;2&quot;
3) &quot;a&quot;
4) &quot;4&quot;
5) &quot;c&quot;
6) &quot;7&quot;
7) &quot;m&quot;
8) &quot;18&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>zinterstore destination numkeys key [key] \u8BA1\u7B97\u7ED9\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u6709\u5E8F\u96C6\u7684\u4EA4\u96C6\uFF0C\u5E76\u4FDD\u5B58\u5230 destination \u4E2D\uFF0C\u6267\u884C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; zadd mo 1 a 2 b 3 c
(integer) 3
&gt; zadd cv 3 a 18 m 4 c
(integer) 3
&gt; zinterstore tmp 2 mo cv
(integer) 2
&gt; zrange tmp 0 20 withscores
1) &quot;a&quot;
2) &quot;4&quot;
3) &quot;c&quot;
4) &quot;7&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BA2\u9605\u3001\u4E8B\u52A1\u3001\u7BA1\u9053\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#\u8BA2\u9605\u3001\u4E8B\u52A1\u3001\u7BA1\u9053\u6280\u672F" aria-hidden="true">#</a> \u8BA2\u9605\u3001\u4E8B\u52A1\u3001\u7BA1\u9053\u6280\u672F</h2><h3 id="\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a> \u53D1\u5E03/\u8BA2\u9605\u6A21\u5F0F</h3><p>\u53D1\u5E03\u8005\u53EF\u4EE5\u5728\u9891\u9053\u53D1\u5E03\u6D88\u606F\uFF0C\u8BA2\u9605\u8005\u53EF\u4EE5\u5728\u9891\u9053\u63A5\u53D7\u5230\u6D88\u606F\u3002</p><p>\u53D1\u5E03\u8005\u6D4B\u8BD5\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; PUBLISH chat hello
(integer) 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BA2\u9605\u8005\u6D4B\u8BD5\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; SUBSCRIBE chat 
Reading messages... (press Ctrl-C to quit)
1) &quot;subscribe&quot;
2) &quot;chat&quot;
3) (integer) 1
1) &quot;message&quot;
2) &quot;chat&quot;
3) &quot;hello&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1" aria-hidden="true">#</a> \u4E8B\u52A1</h3><p>Redis \u7684\u4E8B\u52A1\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u4E2A\u6253\u5305\u6279\u91CF\u6267\u884C\u811A\u672C\uFF0C\u6574\u4E2A\u6279\u91CF\u6307\u4EE4\u5E76\u975E\u539F\u5B50\u64CD\u4F5C\uFF0C\u4E2D\u95F4\u7684\u6307\u4EE4\u7684\u5931\u8D25\u4E0D\u4F1A\u5BFC\u81F4\u524D\u9762\u7684\u6307\u4EE4\u56DE\u6EDA\u6216\u662F\u540E\u9762\u6307\u4EE4\u7684\u7EC8\u6B62\u3002</p><p>\u4E00\u4E2A\u4E8B\u52A1\u4ECE\u5F00\u59CB\u5230\u6267\u884C\u4F1A\u7ECF\u5386\u4E09\u4E2A\u9636\u6BB5\uFF1A</p><ul><li>\u5F00\u59CB\u4E8B\u52A1</li><li>\u547D\u4EE4\u5165\u961F</li><li>\u6267\u884C\u4E8B\u52A1</li></ul><p>Redis \u4E8B\u52A1\u5E26\u6709\u4E09\u4E2A\u91CD\u8981\u4FDD\u8BC1\uFF1A</p><ul><li>\u6279\u91CF\u64CD\u4F5C\u5728\u53D1\u9001 EXEC \u547D\u4EE4\u524D\u88AB\u653E\u5165\u961F\u5217\u7F13\u5B58\u3002</li><li>\u6536\u5230 EXEC \u547D\u4EE4\u540E\u8FDB\u5165\u4E8B\u52A1\u6267\u884C\uFF0C\u4E8B\u52A1\u4E2D\u547D\u4EE4\u6267\u884C\u5931\u8D25\uFF0C\u540E\u7EED\u6307\u4EE4\u7EE7\u7EED\u6267\u884C\u3002</li><li>\u4E8B\u52A1\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u5176\u4ED6\u5BA2\u6237\u7AEF\u63D0\u4EA4\u7684\u547D\u4EE4\u4E0D\u4F1A\u63D2\u5165\u5230\u4E8B\u52A1\u6267\u884C\u547D\u4EE4\u5E8F\u5217\u4E2D\u3002</li></ul><p>\u4E8B\u52A1\u6D4B\u8BD5\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; multi
OK
&gt; set mo &quot;alomerry&quot;
QUEUED
&gt; hset mo name &quot;alomerry&quot;
QUEUED
&gt; get mo
QUEUED
&gt; exec
1) OK
2) (error) WRONGTYPE Operation against a key holding the wrong kind of value
3) &quot;alomerry&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u8BBE\u7F6E\u4E86 key \u4E3A mo \u7684\u5B57\u7B26\u4E32\u540E\uFF0C\u53C8\u8BBE\u7F6E\u4E3A\u4E86\u54C8\u5E0C\uFF0C\u6B64\u65F6\u53D1\u751F\u4E86\u9519\u8BEF\uFF0C\u4F46\u662F\u6CA1\u6709\u5F71\u54CD\u7B2C\u4E09\u6761\u6307\u4EE4\u8BFB\u53D6\u5B57\u7B26\u4E32\u5185\u5BB9\u3002</p><h3 id="\u7BA1\u9053" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u9053" aria-hidden="true">#</a> \u7BA1\u9053</h3><p>\u7BA1\u9053\u901A\u8FC7\u5C06\u591A\u6B21\u8BF7\u6C42\u6253\u5305\uFF0C\u51CF\u5C0F\u5BA2\u6237\u7AEF\u4E0E Redis \u7684\u901A\u8BAF\u6B21\u6570\u6765\u5B9E\u73B0\u964D\u4F4E\u5F80\u8FD4\u7684\u5EF6\u65F6\u65F6\u95F4\u3002\u7BA1\u9053\u539F\u7406\u662F\u961F\u5217\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u6570\u636E\u7684\u987A\u5E8F\u6027\u3002\u5982\u4E0B\u7A0B\u5E8F\u53EF\u4EE5\u5BF9\u6BD4\u53D1\u73B0\u4F7F\u7528\u7BA1\u9053\u65F6\u6D88\u8017\u7684\u603B\u65F6\u95F4\u66F4\u5C11\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">withPipline</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> c redis<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	c<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token string">&quot;MULTI&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tmp&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	c<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token string">&quot;EXEC&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">withOutPipline</span><span class="token punctuation">(</span>n <span class="token builtin">int</span><span class="token punctuation">,</span> c redis<span class="token punctuation">.</span>Conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span><span class="token string">&quot;set&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tmp&quot;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Since</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7A0B\u5E8F\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token number">20</span><span class="token punctuation">.</span>746117ms
<span class="token number">935.685</span>\xB5s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,199),l=[t];function d(u,r){return e(),s("div",null,l)}var c=n(i,[["render",d],["__file","2020-07-06-redis-note.html.vue"]]);export{c as default};
