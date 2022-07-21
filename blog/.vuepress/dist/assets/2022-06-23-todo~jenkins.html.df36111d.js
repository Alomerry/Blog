import{_ as n,o as s,c as a,a as e}from"./app.1f640783.js";const i={},t=e(`<h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h2><p>https://www.k8stech.net/jenkins-docs/pipelineintegrated/chapter03/</p><p>https://www.jenkins.io/zh/doc/book/pipeline/multibranch/ https://blog.csdn.net/qq_22648091/article/details/116424237 https://www.mafeifan.com/DevOps/Jenkins/Jenkins2-%E5%AD%A6%E4%B9%A0%E7%B3%BB%E5%88%9727----pipeline-%E4%B8%AD-Docker-%E6%93%8D%E4%BD%9C.html https://segmentfault.com/a/1190000020687343 https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#handling-credentials https://blog.csdn.net/sleetdream/article/details/121900624 https://www.jenkins.io/zh/doc/tutorials/build-a-multibranch-pipeline-project/ https://www.jenkins.io/zh/doc/book/pipeline/syntax/ https://plugins.jenkins.io/credentials/ https://github.com/jenkinsci/ssh-steps-plugin https://www.jenkins.io/zh/doc/book/pipeline/docker/ https://blog.csdn.net/weixin_42357472/article/details/120848450</p><p>https://mirrors.jenkins.io/war/</p><p>docker run -u root --rm -d -p 880:8080 -v /home/alomerry/apps/jenkins:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean</p><h2 id="case" tabindex="-1"><a class="header-anchor" href="#case" aria-hidden="true">#</a> Case</h2><h2 id="\u90E8\u7F72-blog" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72-blog" aria-hidden="true">#</a> \u90E8\u7F72 Blog</h2><p>\u7531\u4E8E\u4FEE\u6539\u4E86\u4E00\u70B9 node_modules \u7684\u5185\u5BB9\uFF0C\u6240\u4EE5 dist \u6587\u4EF6\u662F\u5728\u672C\u5730 build \u4E4B\u540E push \u5230 github \u4E2D\uFF0C\u8FD9\u4E2A case \u4E3B\u8981\u8BB0\u5F55\u5C06 github \u7684\u4EE3\u7801\u4E2D\u7684 dist \u6587\u4EF6 publish \u5230\u670D\u52A1\u5668\u7684\u914D\u7F6E</p><h2 id="\u90E8\u7F72-ioi-\u9898\u89E3-blog" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72-ioi-\u9898\u89E3-blog" aria-hidden="true">#</a> \u90E8\u7F72 IOI \u9898\u89E3 Blog</h2><p>\u4EE5\u524D\u5237\u8FC7\u4E00\u6BB5\u65F6\u95F4\u7684 PAT\uFF0C\u6709\u4E00\u4E9B\u7ECF\u5178\u9898\u76EE\u8BB0\u5F55\u4E86\u4E0B\u6765\uFF0C\u540E\u7EED\u4E5F\u4F1A\u62BD\u7A7A\u5237 LeetCode\uFF0C\u6240\u4EE5\u4F7F\u7528 jekyll \u642D\u5EFA\u4E86\u4E00\u4E2A IOI \u9898\u89E3\u7684 blog\uFF0C\u9700\u8981\u4E00\u4E9B\u73AF\u5883\uFF0C\u8FD9\u4E2A case \u4E3B\u8981\u8BB0\u5F55\u5C06 github \u4E2D\u7684\u4EE3\u7801 build \u5E76\u53D1\u5E03\u5230\u670D\u52A1\u5668\u3002</p><p>\u7531\u4E8E jekyll \u9700\u8981\u4E00\u4E9B\u73AF\u5883\uFF0C\u6240\u4EE5\u6211\u5C31\u505A\u4E86\u4E00\u4E2A\u7528\u4E8E build site \u7684 docker image\uFF08\u5F88\u7B80\u964B\uFF0C\u540E\u9762\u4F1A\u4F18\u5316\u4E00\u4E0B\uFF09\uFF1A</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> phusion/baseimage:focal-1.1.0</span>

<span class="token instruction"><span class="token keyword">ENV</span> DEBIAN_FRONTEND noninteractive</span>
<span class="token instruction"><span class="token keyword">ENV</span> HOME /root</span>
<span class="token instruction"><span class="token keyword">ENV</span> LANG en_US.UTF-8</span>
<span class="token instruction"><span class="token keyword">ENV</span> LANGUAGE en_US:en</span>
<span class="token instruction"><span class="token keyword">ENV</span> LC_ALL en_US.UTF-8</span>

<span class="token comment"># COPY conf/aptSources.list /etc/apt/sources.list</span>

<span class="token instruction"><span class="token keyword">RUN</span> apt-get update</span>
<span class="token instruction"><span class="token keyword">RUN</span> DEBIAN_FRONTEND=<span class="token string">&quot;noninteractive&quot;</span> apt-get install --no-install-recommends -y <span class="token operator">\\</span>
    ruby-full <span class="token operator">\\</span>
    nodejs <span class="token operator">\\</span>
    build-essential <span class="token operator">\\</span>
    git <span class="token operator">\\</span>
    net-tools <span class="token operator">\\</span>
    wget</span>

<span class="token instruction"><span class="token keyword">RUN</span> apt-get clean</span>
<span class="token instruction"><span class="token keyword">RUN</span> rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/*</span>

<span class="token instruction"><span class="token keyword">RUN</span> curl -s https://cdn.alomerry.com/packages/nvm/install.sh | bash</span>
<span class="token instruction"><span class="token keyword">ENV</span> NVM_DIR /root/.nvm</span>
<span class="token instruction"><span class="token keyword">RUN</span> . <span class="token variable">\${NVM_DIR}</span>/nvm.sh &amp;&amp; nvm install 16.16.0 &amp;&amp; nvm alias default 16.16.0</span>

<span class="token instruction"><span class="token keyword">ENV</span> NODE_PATH <span class="token variable">$NVM_DIR</span>/versions/node/v16.16.0/lib/node_modules</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">$NVM_DIR</span>/versions/node/v16.16.0/bin:<span class="token variable">$PATH</span></span>

<span class="token instruction"><span class="token keyword">RUN</span> npm config set registry https://registry.npm.taobao.org</span>

<span class="token instruction"><span class="token keyword">RUN</span> rm -rf /etc/cron.daily/apt</span>
<span class="token instruction"><span class="token keyword">RUN</span> sed -i <span class="token string">&#39;s/#force_color_prompt/force_color_prompt/&#39;</span> /root/.bashrc</span>

<span class="token instruction"><span class="token keyword">RUN</span> gem sources --remove https://rubygems.org/</span>
<span class="token instruction"><span class="token keyword">RUN</span> gem sources -a https://gems.ruby-china.com</span>
<span class="token instruction"><span class="token keyword">RUN</span> gem install bundler jekyll</span>
<span class="token instruction"><span class="token keyword">RUN</span> bundle config mirror.https://rubygems.org https://gems.ruby-china.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5347\u7EA7-jenkins" tabindex="-1"><a class="header-anchor" href="#\u5347\u7EA7-jenkins" aria-hidden="true">#</a> \u5347\u7EA7 Jenkins</h2><ul><li>\u517C\u5BB9\u7684\u60C5\u51B5\u4E0B\u5220\u9664 docker image \u91CD\u65B0 run</li><li>\u66F4\u65B0 docker \u5BB9\u5668\u4E2D\u7684 jenkins war \u5305</li></ul><h2 id="case-1" tabindex="-1"><a class="header-anchor" href="#case-1" aria-hidden="true">#</a> Case</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
    // \u8BBE\u7F6E\u5168\u5C40\u73AF\u5883\u53D8\u91CF
    environment <span class="token punctuation">{</span>
        url <span class="token operator">=</span> <span class="token string">&#39;https://github.com/alomerry/algorithm.git&#39;</span>
    <span class="token punctuation">}</span>
    agent <span class="token punctuation">{</span>
        <span class="token function">docker</span> <span class="token punctuation">{</span>
            image <span class="token string">&#39;registry.cn-hangzhou.aliyuncs.com/alomerry/algorithm&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;pull code&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                retry<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    // \u62C9\u53D6\u4EE3\u7801
                    git<span class="token punctuation">(</span>url: env.url, branch: <span class="token string">&#39;master&#39;</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;install and build&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                // \u6784\u5EFA
                <span class="token function">sh</span> <span class="token string">&#39;cd docs &amp;&amp; npm install &amp;&amp; bundle install &amp;&amp; npm run build&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;publish&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token function">sh</span> <span class="token string">&#39;&#39;</span>&#39;
                    <span class="token builtin class-name">cd</span> /var/jenkins_home/workspace/algorithm/docs/_site
                    <span class="token function">tar</span> -zcvf algorithm.tar.gz *
                    <span class="token string">&#39;&#39;</span>&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage<span class="token punctuation">(</span><span class="token string">&#39;ssh&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                script <span class="token punctuation">{</span>
                    def remote <span class="token operator">=</span> <span class="token punctuation">[</span>:<span class="token punctuation">]</span>
                    remote.name <span class="token operator">=</span> <span class="token string">&#39;root&#39;</span>
                    remote.logLevel <span class="token operator">=</span> <span class="token string">&#39;FINEST&#39;</span>
  	                remote.host <span class="token operator">=</span> <span class="token string">&#39;bt.alomerry.com&#39;</span>
                    remote.allowAnyHosts <span class="token operator">=</span> <span class="token boolean">true</span>
                    withCredentials<span class="token punctuation">(</span><span class="token punctuation">[</span>usernamePassword<span class="token punctuation">(</span>credentialsId: <span class="token string">&#39;tencent-ubuntu-root&#39;</span>, passwordVariable: <span class="token string">&#39;password&#39;</span>, usernameVariable: <span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        remote.user <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">\${username}</span>&quot;</span>
                        remote.password <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">\${password}</span>&quot;</span>
                    <span class="token punctuation">}</span>
                    sshCommand remote: remote, command: <span class="token string">&#39;&#39;</span>&#39;<span class="token comment">#!/bin/bash</span>
                        <span class="token builtin class-name">cd</span> /www/wwwroot/io.alomerry.com/
                        <span class="token builtin class-name">shopt</span> -s extglob
                        <span class="token function">rm</span> -rf <span class="token operator">!</span><span class="token punctuation">(</span>.htaccess<span class="token operator">|</span>.user.ini<span class="token operator">|</span>.well-known<span class="token operator">|</span>favicon.ico<span class="token operator">|</span>algorithm.tar.gz<span class="token punctuation">)</span>
                        <span class="token string">&#39;&#39;</span>&#39;
                    sshPut remote: remote, from: <span class="token string">&#39;/var/jenkins_home/workspace/algorithm/docs/_site/algorithm.tar.gz&#39;</span>, into: <span class="token string">&#39;/www/wwwroot/io.alomerry.com/&#39;</span>
                    sshCommand remote: remote, command: <span class="token string">&quot;cd /www/wwwroot/io.alomerry.com &amp;&amp; tar -xvf algorithm.tar.gz&quot;</span>
                    sshRemove remote: remote, path: <span class="token string">&#39;rm /www/wwwroot/io.alomerry.com/algorithm.tar.gz&#39;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jenkins-\u90E8\u7F72\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#jenkins-\u90E8\u7F72\u670D\u52A1" aria-hidden="true">#</a> Jenkins \u90E8\u7F72\u670D\u52A1</h3><ul><li><a href="https://blog.csdn.net/qq_22648091/article/details/116424237" target="_blank" rel="noopener noreferrer"></a></li><li><a href="https://www.mafeifan.com/DevOps/Jenkins/Jenkins2-%E5%AD%A6%E4%B9%A0%E7%B3%BB%E5%88%9727----pipeline-%E4%B8%AD-Docker-%E6%93%8D%E4%BD%9C.html" target="_blank" rel="noopener noreferrer"></a></li></ul><p>https://wiki.eryajf.net/pages/639.html#%E8%A1%A5%E5%85%85%E4%BA%8C-%E6%96%B0%E9%81%87%E5%88%B0%E7%9A%84%E4%B8%80%E4%B8%AA%E5%9D%91%E3%80%82</p><p>gem bundle \u5207\u6362\u6E90</p><ul><li>https://www.twle.cn/l/yufei/ruby/ruby-basic-gem-mirrors.html</li><li>https://www.jianshu.com/p/4ff1a3b52dff bundle config mirror.https://rubygems.org https://gems.ruby-china.com</li></ul>`,21),o=[t];function l(p,c){return s(),a("div",null,o)}var d=n(i,[["render",l],["__file","2022-06-23-todo~jenkins.html.vue"]]);export{d as default};
