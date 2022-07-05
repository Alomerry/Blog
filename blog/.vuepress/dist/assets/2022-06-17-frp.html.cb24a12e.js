import{_ as a,o as n,c as s,a as e}from"./app.a324704d.js";const t={},p=e(`<h2 id="\u8D77\u56E0" tabindex="-1"><a class="header-anchor" href="#\u8D77\u56E0" aria-hidden="true">#</a> \u8D77\u56E0</h2><p>\u539F\u6765\u4F4F\u5904\u7684\u5BBD\u5E26\u662F\u6709 IPv6 \u7684\uFF0C\u4F7F\u7528 ddns \u670D\u52A1\u4E3B\u52A8\u8BF7\u6C42\u963F\u91CC\u4E91\u89E3\u6790 API \u6620\u5C04 AAAA \u8BB0\u5F55\u5230\u4F4F\u5904\u7684 IPv6 \u5730\u5740\u4E0A\uFF0CIPv6 \u914D\u4E0A moonlight \u9AD8\u7801\u7387\u8FDC\u63A7\u4F53\u9A8C\u51FA\u5947\u7684\u597D\u3002</p><p>\u4F46\u662F\u7531\u4E8E\u516D\u6708\u4EFD\u7684\u65F6\u5019\u6362\u4E86\u5730\u65B9\uFF0C\u5BBD\u5E26\u6CA1\u6709 IPv6 \u4E86\u4E4B\u540E\u5C1D\u8BD5 frp \u4E4B\u540E\u8BB0\u5F55\u4E00\u4E0B\u8FC7\u7A0B\uFF0C\u8FD9\u6B21\u4EC5\u4F7F\u7528 TCP \u7684\u65B9\u5F0F</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="server-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#server-\u914D\u7F6E" aria-hidden="true">#</a> server \u914D\u7F6E</h3><p>frps.ini</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">bind_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>
<span class="token key attr-name">bind_udp_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>
<span class="token key attr-name">dashboard_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7500</span>
<span class="token key attr-name">dashboard_user</span> <span class="token punctuation">=</span> <span class="token value attr-value">******</span>
<span class="token key attr-name">dashboard_pwd</span> <span class="token punctuation">=</span> <span class="token value attr-value">******</span>
<span class="token key attr-name">token</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;\u81EA\u5B9A\u4E49\u7B7E\u540D&gt;</span>
<span class="token key attr-name">subdomain_host</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;\u670D\u52A1\u5668\u57DF\u540D&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="client-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#client-\u914D\u7F6E" aria-hidden="true">#</a> client \u914D\u7F6E</h3><p>frpc.ini</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">token</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;\u81EA\u5B9A\u4E49\u7B7E\u540D&gt;</span>
<span class="token key attr-name">server_addr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;\u670D\u52A1\u5668 IP&gt;</span>
<span class="token key attr-name">server_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>
<span class="token key attr-name">admin_addr</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">admin_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7400</span>
<span class="token key attr-name">admin_user</span> <span class="token punctuation">=</span> <span class="token value attr-value">******</span>
<span class="token key attr-name">admin_pwd</span> <span class="token punctuation">=</span> <span class="token value attr-value">******</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">ssh</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">tcp</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;local_port&gt;</span>
<span class="token key attr-name">remote_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;remote_port&gt;</span>
<span class="token key attr-name">use_encryption</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">use_compression</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">rocket.chat</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">tcp</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;local_port&gt;</span>
<span class="token key attr-name">remote_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;remote_port&gt;</span>
<span class="token key attr-name">use_encryption</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">use_compression</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">dozzle</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">tcp</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;local_port&gt;</span>
<span class="token key attr-name">remote_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;remote_port&gt;</span>
<span class="token key attr-name">use_encryption</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">use_compression</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">admin</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">tcp</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;local_port&gt;</span>
<span class="token key attr-name">remote_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;remote_port&gt;</span>
<span class="token key attr-name">use_encryption</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">use_compression</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">ward</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">tcp</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;local_port&gt;</span>
<span class="token key attr-name">remote_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;remote_port&gt;</span>
<span class="token key attr-name">use_encryption</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">use_compression</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">jenkins</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">tcp</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;local_port&gt;</span>
<span class="token key attr-name">remote_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">&lt;remote_port&gt;</span>
<span class="token key attr-name">use_encryption</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
<span class="token key attr-name">use_compression</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ul><li><a href="https://gofrp.org/docs/examples/xtcp/" target="_blank" rel="noopener noreferrer">frp \u6587\u6863</a></li><li><a href="https://github.com/fatedier/frp/blob/dev/README_zh.md" target="_blank" rel="noopener noreferrer">frp \u6E90\u7801</a></li><li><a href="https://juejin.cn/post/6972566180896702477" target="_blank" rel="noopener noreferrer"></a></li><li><a href="https://xinyuehtx.github.io/post/%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F%E7%A5%9E%E5%99%A8frp.html" target="_blank" rel="noopener noreferrer"></a></li><li><a href="https://xinyuehtx.github.io/post/%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F%E7%A5%9E%E5%99%A8frp%E4%B9%8B%E8%BF%9B%E9%98%B6%E9%85%8D%E7%BD%AE.html" target="_blank" rel="noopener noreferrer"></a></li></ul>`,12),l=[p];function c(o,i){return n(),s("div",null,l)}var u=a(t,[["render",c],["__file","2022-06-17-frp.html.vue"]]);export{u as default};