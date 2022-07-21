import{_ as s,o as n,c as e,a}from"./app.1f640783.js";const o={},i=a(`<h2 id="vscode-web-\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#vscode-web-\u642D\u5EFA" aria-hidden="true">#</a> VSCode Web \u642D\u5EFA</h2><h3 id="\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u539F\u56E0" aria-hidden="true">#</a> \u539F\u56E0</h3><ul><li>\u5728\u4E0D\u652F\u6301\u5B89\u88C5 VS Code \u684C\u9762\u7248\u7684\u673A\u5668\u4E0A\u8FDB\u884C\u5F00\u53D1\uFF0C\u4F8B\u5982 iPad<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> / \u5E73\u677F\u7535\u8111</li><li>\u5728\u5404\u4E2A\u73AF\u5883\u5F00\u53D1\u65F6\u9700\u8981\u5B89\u88C5\u5BF9\u5E94\u4F9D\u8D56\uFF0C\u6548\u7387\u4F4E\u4E0B\uFF0C\u4E0D\u80FD\u5F00\u7BB1\u5373\u7528</li><li>\u5728\u7B14\u8BB0\u672C\u5916\u51FA\u529E\u516C\u65F6\uFF0C\u9700\u8981\u672C\u5730\u8FD0\u884C\uFF0C\u6D88\u8017\u7535\u91CF\uFF08\u4E5F\u6709\u7F3A\u70B9\uFF09</li></ul><h3 id="\u5236\u4F5C-docker-\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5236\u4F5C-docker-\u955C\u50CF" aria-hidden="true">#</a> \u5236\u4F5C docker \u955C\u50CF</h3><p>\u57FA\u4E8E phusion/baseimage-docker<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup> \u955C\u50CF\u5236\u4F5C\u3002shell \u7684\u8BDD\u4E00\u76F4\u4E60\u60EF\u7528 zsh\uFF0C\u6240\u4EE5\u5728\u955C\u50CF\u4E2D\u76F4\u63A5\u5B89\u88C5\u4E86 oh-my-zsh\uFF0C\u5B89\u88C5\u540E\u53D1\u73B0\u6267\u884C <code>chsh</code> \u5207\u6362 shell \u9700\u8981 root \u5BC6\u7801\uFF0C\u6267\u884C <code>passwd</code> \u521D\u59CB\u5316 root \u7528\u6237\u5BC6\u7801\uFF0C\u518D\u6B21\u6267\u884C <code>chsh</code> \u540E\u8F93\u5165\u6B63\u786E\u5BC6\u7801\u540E\u63D0\u793A <code>PAM: Authentication failure</code>\uFF0C\u641C\u7D22\u8D44\u6599\u540E\u53D1\u73B0\u53EF\u4EE5\u4E0D\u9A8C\u8BC1\u5BC6\u7801<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup>\uFF0C\u7F16\u8F91 <code>/etc/pam.d/chsh</code> \u6587\u4EF6\uFF0C\u628A <code>auth required pam_shells.so</code> \u6539\u6210 <code>auth sufficient pam_shells.so</code> \u540E\u6267\u884C <code>chsh -s /bin/zsh</code> \u5373\u53EF\u3002</p><p>\u6DFB\u52A0 zsh-autosuggestions\u3001zsh-syntax-highlighting\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> ~/.zshrc
<span class="token assign-left variable">plugins</span><span class="token operator">=</span><span class="token punctuation">(</span>
    <span class="token comment"># other plugins...</span>
    zsh-autosuggestions
    zsh-syntax-highlighting
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F Dockerfile</p><details class="custom-container details"><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> phusion/baseimage:focal-1.1.0</span>

<span class="token instruction"><span class="token keyword">ENV</span> DEBIAN_FRONTEND noninteractive</span>
<span class="token instruction"><span class="token keyword">ENV</span> HOME /root</span>
<span class="token instruction"><span class="token keyword">ENV</span> LANG en_US.UTF-8</span>
<span class="token instruction"><span class="token keyword">ENV</span> LANGUAGE en_US:en</span>
<span class="token instruction"><span class="token keyword">ENV</span> LC_ALL en_US.UTF-8</span>

<span class="token instruction"><span class="token keyword">RUN</span> apt-get update</span>
<span class="token instruction"><span class="token keyword">RUN</span> DEBIAN_FRONTEND=<span class="token string">&quot;noninteractive&quot;</span> apt-get install --no-install-recommends -y <span class="token operator">\\</span>
    build-essential <span class="token operator">\\</span>
    ruby-full <span class="token operator">\\</span>
    git <span class="token operator">\\</span>
    g++ <span class="token operator">\\</span>
    libx11-dev <span class="token operator">\\</span>
    libxkbfile-dev <span class="token operator">\\</span>
    libsecret-1-dev <span class="token operator">\\</span>
    python-is-python3 <span class="token operator">\\</span>
    make <span class="token operator">\\</span>
    gcc <span class="token operator">\\</span>
    net-tools <span class="token operator">\\</span>
    wget <span class="token operator">\\</span>
    zsh</span>

<span class="token instruction"><span class="token keyword">RUN</span> apt-get clean &amp;&amp; rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*</span>

<span class="token comment"># install on-my-zsh and plugs</span>
<span class="token instruction"><span class="token keyword">RUN</span> REMOTE=https://gitee.com/mirrors/oh-my-zsh.git sh -c <span class="token string">&quot;$(curl -fsSL https://gitee.com/mirrors/oh-my-zsh/raw/master/tools/install.sh)&quot;</span></span>
<span class="token instruction"><span class="token keyword">RUN</span> git clone https://github.com/zsh-users/zsh-autosuggestions <span class="token variable">\${ZSH_CUSTOM:-~/.oh-my-zsh/custom}</span>/plugins/zsh-autosuggestions</span>
<span class="token instruction"><span class="token keyword">RUN</span> git clone https://github.com/zsh-users/zsh-syntax-highlighting.git <span class="token variable">\${ZSH_CUSTOM:-~/.oh-my-zsh/custom}</span>/plugins/zsh-syntax-highlighting</span>

<span class="token comment"># config git</span>
<span class="token instruction"><span class="token keyword">RUN</span> git config --global user.email <span class="token string">&quot;alomerry.wu@gmail.com&quot;</span> &amp;&amp; git config --global user.name <span class="token string">&quot;Alomerry Wu&quot;</span></span>

<span class="token comment"># install nvm and node.js</span>
<span class="token instruction"><span class="token keyword">ENV</span> NVM_DIR /root/.nvm</span>
<span class="token instruction"><span class="token keyword">RUN</span> curl -s https://cdn.alomerry.com/packages/nvm/install.sh | bash</span>
<span class="token instruction"><span class="token keyword">RUN</span> . <span class="token variable">\${NVM_DIR}</span>/nvm.sh &amp;&amp; nvm install 16.16.0 &amp;&amp; nvm alias default 16.16.0</span>

<span class="token instruction"><span class="token keyword">ENV</span> NODE_PATH <span class="token variable">$NVM_DIR</span>/versions/node/v16.16.0/lib/node_modules</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">$NVM_DIR</span>/versions/node/v16.16.0/bin:<span class="token variable">$PATH</span></span>

<span class="token instruction"><span class="token keyword">RUN</span> npm config set registry https://registry.npm.taobao.org <span class="token operator">\\</span>
    &amp;&amp; npm install -g yarn <span class="token operator">\\</span>
    &amp;&amp; yarn config set registry https://registry.npmmirror.com</span>

<span class="token instruction"><span class="token keyword">RUN</span> gem sources --remove https://rubygems.org/</span>
<span class="token instruction"><span class="token keyword">RUN</span> gem sources -a https://gems.ruby-china.com</span>
<span class="token instruction"><span class="token keyword">RUN</span> gem install bundler jekyll</span>
<span class="token instruction"><span class="token keyword">RUN</span> bundle config mirror.https://rubygems.org https://gems.ruby-china.com</span>

<span class="token instruction"><span class="token keyword">RUN</span> git config --global user.email <span class="token string">&quot;you@example.com&quot;</span></span>
<span class="token instruction"><span class="token keyword">RUN</span> git config --global user.name <span class="token string">&quot;Your Name&quot;</span></span>
<span class="token instruction"><span class="token keyword">RUN</span> rm -rf /etc/cron.daily/apt <span class="token operator">\\</span>
    &amp;&amp; sed -i <span class="token string">&#39;s/#force_color_prompt/force_color_prompt/&#39;</span> /root/.bashrc</span>

<span class="token instruction"><span class="token keyword">VOLUME</span> /root/workspace</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /root/app</span>
<span class="token instruction"><span class="token keyword">RUN</span> wget https://update.code.visualstudio.com/latest/server-linux-x64-web/stable</span>
<span class="token instruction"><span class="token keyword">RUN</span> tar -xf stable</span>

<span class="token instruction"><span class="token keyword">ENV</span> VSCODE_TOKEN=&lt;your token&gt;</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> vscode-server-linux-x64-web</span>
<span class="token instruction"><span class="token keyword">RUN</span> wget http://cdn.alomerry.com/vscode/web/server.sh</span>
<span class="token instruction"><span class="token keyword">RUN</span> chmod +x ./server.sh</span>
<span class="token comment"># if want no token, use \`--without-connection-token\`</span>
<span class="token instruction"><span class="token keyword">CMD</span> ./server.sh --accept-server-license-terms --host 0.0.0.0 --connection-token <span class="token variable">\${VSCODE_TOKEN}</span></span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8000</span>

<span class="token comment"># ioi \u5F00\u53D1\u9700\u6267\u884C cd docs &amp;&amp; npm install &amp;&amp; bundle install &amp;&amp; npm run build</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --rm -d -p <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>:8000 -v /home/user/workspace:/root/workspace/ -v /var/run/docker.sock:/var/run/docker.sock alomerry/vscode-we
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u9047\u5230\u4E00\u4E9B\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u9047\u5230\u4E00\u4E9B\u95EE\u9898" aria-hidden="true">#</a> \u9047\u5230\u4E00\u4E9B\u95EE\u9898</h3><p><strong>VSCode Web \u5B89\u5168\u95EE\u9898</strong></p><p>docker \u542F\u52A8 VSCode Web \u4F1A\u8F93\u51FA\u4E00\u4E2A\u643A\u5E26 token \u7684 url\uFF0C\u8FD9\u4E2A token \u5E94\u8BE5\u662F VSCode Web \u7684\u552F\u4E00\u4E00\u4E2A\u9A8C\u8BC1\uFF0C\u7531\u4E8E\u672C\u673A\u5B89\u88C5\u4E86 <a href="https://github.com/amir20/dozzle" target="_blank" rel="noopener noreferrer">amir/dozzle</a> \u5E76\u4F1A\u8F93\u51FA docker \u5BB9\u5668\u65E5\u5FD7\uFF0C\u6240\u4EE5\u9996\u5148\u7ED9 <a href="https://dozzle.alomerry.com" target="_blank" rel="noopener noreferrer">https://dozzle.alomerry.com</a> \u914D\u7F6E\u4E86\u52A0\u5BC6\u8BBF\u95EE\u4EE5\u4FDD\u8BC1\u65E5\u5FD7\u4E2D\u7684 token \u4E0D\u4F1A\u6CC4\u9732\u3002\u7B2C\u4E8C\u6B65\u9700\u8981\u4FDD\u8BC1\u5728 token \u6CC4\u9732\u7684\u60C5\u51B5\u4E0B\u8BBF\u95EE VSCode Web \u4E5F\u662F\u6709\u9650\u5236\u7684\uFF0C\u6211\u9009\u62E9\u4F7F\u7528 Nginx \u7684 base_auth<sup class="footnote-ref"><a href="#fn4" id="fnref4">[4]</a></sup>\uFF0C\u4F46\u662F\u7531\u4E8E\u6211\u53CD\u5411\u4EE3\u7406\u4E86 docker \u670D\u52A1\u5668\uFF0C\u5728\u4EE3\u7406\u670D\u52A1\u5668\u914D\u7F6E\u4E86 base_auth \u65E0\u6CD5\u5BF9 wesocket \u751F\u6548\uFF0C\u800C VSCode Web \u4F1A\u4F7F\u7528 wesocket \u6765\u4FDD\u6301\u8FDE\u63A5\uFF0C\u6240\u4EE5\u9700\u8981\u5728\u53CD\u5411\u4EE3\u7406\u7684\u914D\u7F6E\u5904\u6DFB\u52A0\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>proxy_set_header Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>
proxy_set_header Connection <span class="token string">&quot;Upgrade&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u8BBE\u7F6E" aria-hidden="true">#</a> \u5E38\u7528\u8BBE\u7F6E</h2><p><code>&quot;terminal.integrated.defaultProfile.linux&quot;: &quot;zsh&quot;</code></p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://www.v2ex.com/t/761391" target="_blank" rel="noopener noreferrer">\u7528 iPad pro \u8BBF\u95EE vscode \u7F51\u9875\u7248\u5199\u4EE3\u7801</a> <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="fn2" class="footnote-item"><p><a href="https://sourcegraph.com/github.com/phusion/baseimage-docker/-/blob/README_ZH_cn_.md" target="_blank" rel="noopener noreferrer">phusion/baseimage-docker README</a> <a href="#fnref2" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="fn3" class="footnote-item"><p><a href="https://askubuntu.com/questions/812420/chsh-always-asking-a-password-and-get-pam-authentication-failure" target="_blank" rel="noopener noreferrer">chsh-always-asking-a-password-and-get-pam-authentication-failure</a> <a href="#fnref3" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="fn4" class="footnote-item"><p><a href="https://hyperzsb.io/posts/nginx-auth-basic/" target="_blank" rel="noopener noreferrer">\u914D\u7F6E Nginx auth_basic \u8EAB\u4EFD\u9A8C\u8BC1</a> <a href="#fnref4" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,20),t=[i];function r(l,c){return n(),e("div",null,t)}var d=s(o,[["render",r],["__file","2022-07-18-vscode.html.vue"]]);export{d as default};
