import{_ as n,o as s,c as a,a as e}from"./app.a324704d.js";const t={},i=e(`<h2 id="\u5B89\u88C5\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u73AF\u5883" aria-hidden="true">#</a> \u5B89\u88C5\u73AF\u5883</h2><ul><li>\u5B89\u88C5 nginx\u3001\u914D\u7F6E\u57DF\u540D\u3001\u89E3\u6790\u57DF\u540D</li><li>\u5B89\u88C5 vcore</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -O https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh
<span class="token function">bash</span> install-release.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u65E5\u5FD7\uFF0C\u5176\u4E2D\u5305\u542B\u4E00\u4E9B v2ray \u7684\u914D\u7F6E\u3001\u65E5\u5FD7\u4F4D\u7F6E\uFF0C\u5728\u6B64\u8BB0\u5F55\u4E00\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>info: Installing V2Ray v4.45.2 <span class="token keyword">for</span> x86_64
warning: The following are the actual parameters <span class="token keyword">for</span> the v2ray <span class="token function">service</span> startup.
warning: Please <span class="token function">make</span> sure the configuration <span class="token function">file</span> path is correctly set.
<span class="token comment"># /etc/systemd/system/v2ray.service</span>

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>V2Ray Service
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>https://www.v2fly.org/
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target nss-lookup.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">User</span><span class="token operator">=</span>nobody
<span class="token assign-left variable">CapabilityBoundingSet</span><span class="token operator">=</span>CAP_NET_ADMIN CAP_NET_BIND_SERVICE
<span class="token assign-left variable">AmbientCapabilities</span><span class="token operator">=</span>CAP_NET_ADMIN CAP_NET_BIND_SERVICE
<span class="token assign-left variable">NoNewPrivileges</span><span class="token operator">=</span>true
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/v2ray -config /usr/local/etc/v2ray/config.json
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartPreventExitStatus</span><span class="token operator">=</span><span class="token number">23</span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target

<span class="token comment"># /etc/systemd/system/v2ray.service.d/10-donot_touch_single_conf.conf</span>
<span class="token comment"># In case you have a good reason to do so, duplicate this file in the same directory and make your customizes there.</span>
<span class="token comment"># Or all changes you made will be lost!  # Refer: https://www.freedesktop.org/software/systemd/man/systemd.unit.html</span>
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/v2ray -config /usr/local/etc/v2ray/config.json

installed: /usr/local/bin/v2ray
installed: /usr/local/bin/v2ctl
installed: /usr/local/share/v2ray/geoip.dat
installed: /usr/local/share/v2ray/geosite.dat
installed: /usr/local/etc/v2ray/config.json
installed: /var/log/v2ray/
installed: /var/log/v2ray/access.log
installed: /var/log/v2ray/error.log
installed: /etc/systemd/system/v2ray.service
installed: /etc/systemd/system/v2ray@.service
removed: /tmp/tmp.YE0nM3uAkr
info: V2Ray v4.45.2 is installed.
You may need to execute a <span class="token builtin class-name">command</span> to remove dependent software: <span class="token function">apt</span> purge <span class="token function">curl</span> <span class="token function">unzip</span>
Please execute the command: systemctl <span class="token builtin class-name">enable</span> v2ray<span class="token punctuation">;</span> systemctl start v2ray
\u25CF v2ray.service - V2Ray Service
Loaded: loaded <span class="token punctuation">(</span>/etc/systemd/system/v2ray.service<span class="token punctuation">;</span> disabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>
Drop-In: /etc/systemd/system/v2ray.service.d
\u2514\u250010-donot_touch_single_conf.conf
Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Wed <span class="token number">2022</span>-06-22 04:04:45 UTC<span class="token punctuation">;</span> 5s ago
Docs: https://www.v2fly.org/
Main PID: <span class="token number">2555854</span> <span class="token punctuation">(</span>v2ray<span class="token punctuation">)</span>
Tasks: <span class="token number">7</span> <span class="token punctuation">(</span>limit: <span class="token number">1075</span><span class="token punctuation">)</span>
Memory: <span class="token number">5</span>.1M
CGroup: /system.slice/v2ray.service
\u2514\u25002555854 /usr/local/bin/v2ray -config /usr/local/etc/v2ray/config.json

Jun <span class="token number">22</span> 04:04:45 C20210629188207 v2ray: V2Ray <span class="token number">4.45</span>.2 <span class="token punctuation">(</span>V2Fly, a community-driven edition of V2Ray.<span class="token punctuation">)</span> Custom <span class="token punctuation">(</span>go1.18.3
linux/amd64<span class="token punctuation">)</span>
Jun <span class="token number">22</span> 04:04:45 C20210629188207 v2ray: A unified platform <span class="token keyword">for</span> anti-censorship.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="vless-websocket-tls" tabindex="-1"><a class="header-anchor" href="#vless-websocket-tls" aria-hidden="true">#</a> VLESS Websocket tls</h3><p>nginx \u57DF\u540D\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>location /<span class="token operator">&lt;</span>\u4F2A\u88C5\u8DEF\u5F84<span class="token operator">&gt;</span>/ <span class="token punctuation">{</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$http_upgrade</span> <span class="token operator">!=</span> <span class="token string">&quot;websocket&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token builtin class-name">return</span> <span class="token number">404</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    proxy_redirect off<span class="token punctuation">;</span>
    proxy_pass http://127.0.0.1:<span class="token operator">&lt;</span>\u914D\u7F6E\u7AEF\u53E3<span class="token operator">&gt;</span><span class="token punctuation">;</span> 
    proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
    proxy_set_header Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>
    proxy_set_header Connection <span class="token string">&quot;upgrade&quot;</span><span class="token punctuation">;</span>
    proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
    <span class="token comment"># Show real IP in v2ray access.log</span>
    proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5B8C\u6BD5\u4EE5\u540E\uFF0C\u4FEE\u6539\u6587\u4EF6 <code>/usr/local/etc/v2ray/config.json</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;inbounds&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;port&quot;</span><span class="token builtin class-name">:</span> <span class="token operator">&lt;</span>\u914D\u7F6E\u7AEF\u53E3<span class="token operator">&gt;</span>,
      <span class="token string">&quot;listen&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;127.0.0.1&quot;</span>,
      <span class="token string">&quot;protocol&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vless&quot;</span>,
      <span class="token string">&quot;settings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;decryption&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;none&quot;</span>,
        <span class="token string">&quot;clients&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;uuid&gt;&quot;</span>,
            <span class="token string">&quot;level&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;streamSettings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;network&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ws&quot;</span>,
        <span class="token string">&quot;wsSettings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/&lt;\u4F2A\u88C5\u8DEF\u5F84&gt;/&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>,
  <span class="token string">&quot;outbounds&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;protocol&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;freedom&quot;</span>,
      <span class="token string">&quot;settings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u542F\u670D\u52A1 systemctl restart v2ray</p><h3 id="vless-tcp-xtl" tabindex="-1"><a class="header-anchor" href="#vless-tcp-xtl" aria-hidden="true">#</a> VLESS TCP xtl</h3><p>vcore \u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
    <span class="token string">&quot;inbounds&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;port&quot;</span><span class="token builtin class-name">:</span> <span class="token operator">&lt;</span>\u914D\u7F6E\u7AEF\u53E3<span class="token operator">&gt;</span>,
            <span class="token string">&quot;protocol&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vless&quot;</span>,
            <span class="token string">&quot;settings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;decryption&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;none&quot;</span>,
                <span class="token string">&quot;clients&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;uuid&gt;&quot;</span>,
                        <span class="token string">&quot;flow&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;xtls-rprx-direct&quot;</span>,
                        <span class="token string">&quot;level&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>,
                <span class="token string">&quot;fallbacks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token string">&quot;dest&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;80&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;streamSettings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;network&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;tcp&quot;</span>,
                <span class="token string">&quot;security&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;xtls&quot;</span>,
                <span class="token string">&quot;xtlsSettings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;alpn&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;http/1.1&quot;</span>
                    <span class="token punctuation">]</span>,
                    <span class="token string">&quot;certificates&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token string">&quot;certificateFile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/www/server/panel/vhost/cert/&lt;\u57DF\u540D&gt;/fullchain.pem&quot;</span>,
                            <span class="token string">&quot;keyFile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/www/server/panel/vhost/cert/&lt;\u57DF\u540D&gt;/privkey.pem&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;outbounds&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;protocol&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;freedom&quot;</span>,
            <span class="token string">&quot;settings&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ul><li><a href="https://www.v2fly.org/config/protocols/vless.html" target="_blank" rel="noopener noreferrer">V2Fly.org</a></li><li><a href="https://v2xtls.org/xray%E6%95%99%E7%A8%8B" target="_blank" rel="noopener noreferrer">xray \u6559\u7A0B</a></li><li><a href="https://www.chinagfw.org/2020/11/v2rayvless.html" target="_blank" rel="noopener noreferrer">V2ray\u7684 VLESS \u534F\u8BAE\u4ECB\u7ECD\u548C\u4F7F\u7528\u6559\u7A0B</a></li></ul>`,17),l=[i];function o(p,c){return s(),a("div",null,l)}var r=n(t,[["render",o],["__file","2022-06-19-v2ray-server.html.vue"]]);export{r as default};
