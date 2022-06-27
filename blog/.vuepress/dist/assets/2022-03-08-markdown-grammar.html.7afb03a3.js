import{_ as v,r as e,o as i,c as o,b as n,e as s,w as l,a as t,d as a}from"./app.c3e71323.js";const m={},h=t(`<h2 id="basic-syntax" tabindex="-1"><a class="header-anchor" href="#basic-syntax" aria-hidden="true">#</a> Basic Syntax<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></h2><h3 id="horizontal-rules" tabindex="-1"><a class="header-anchor" href="#horizontal-rules" aria-hidden="true">#</a> horizontal-rules</h3><p><strong>Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>***

---

_________________
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><p><strong>Output</strong></p><hr><h2 id="vuepress-s-syntax-extensions" tabindex="-1"><a class="header-anchor" href="#vuepress-s-syntax-extensions" aria-hidden="true">#</a> VuePress&#39;s Syntax Extensions<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup></h2><h3 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> Emoji</h3><p>You can add emoji to your Markdown content by typing :EMOJICODE:.</p><p>For a full list of available emoji and codes, check out emoji-cheat-sheet.</p><p><strong>Input</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VuePress 2 is out :tada: !
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Output</strong></p><p>VuePress 2 is out \u{1F389} !</p><h3 id="code-blocks" tabindex="-1"><a class="header-anchor" href="#code-blocks" aria-hidden="true">#</a> Code Blocks</h3><h4 id="line-highlighting" tabindex="-1"><a class="header-anchor" href="#line-highlighting" aria-hidden="true">#</a> Line Highlighting</h4><p>You can highlight specified lines of your code blocks by adding line ranges mark in your fenced code blocks:</p><p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js {1-2,4}</span>
<span class="token code-block language-js language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Highlighted!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;Highlighted!&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Examples for line ranges mark:</p><ul><li>Line ranges: <code>{5-8}</code></li><li>Multiple single lines: <code>{4,7,9}</code></li><li>Combined: <code>{4,7-13,16,23-27,40}</code></li></ul><h3 id="custom-containers" tabindex="-1"><a class="header-anchor" href="#custom-containers" aria-hidden="true">#</a> Custom Containers</h3><ul><li>Usage</li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span> [title]
[content]
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>type</code> is required, and the <code>title</code> and <code>content</code> are optional.</p><p>Supported <code>type</code> :</p><ul><li><p>tip</p></li><li><p>warning</p></li><li><p>danger</p></li><li><p>details</p></li><li><p>Alias of CodeGroup and CodeGroupItem:</p><ul><li>code-group</li><li>code-group-item</li></ul></li><li><p>Example</p></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: tip
\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A
:::

::: warning
\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A
:::

::: danger \u5371\u9669
\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u8B66\u544A
:::

::: details
\u8FD9\u662F\u4E00\u4E2A\u8BE6\u60C5\u5757
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),k={class:"custom-container tip"},g={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},b=n("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),f=n("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),_=[b,f],x=n("p",{class:"custom-container-title"},"TIP",-1),y=n("p",null,"\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A",-1),w={class:"custom-container warning"},q={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},C=n("path",{d:"M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z",style:{fill:"#f3cc2e","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.18)"},null,-1),j=[C],B=n("p",{class:"custom-container-title"},"WARNING",-1),V=n("p",null,"\u8FD9\u662F\u4E00\u4E2A\u8B66\u544A",-1),P={class:"custom-container danger"},I={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},M=n("path",{d:"M297.64 123.31C133.55 123.31 0 256.83 0 420.94c0 164.11 133.55 297.64 297.64 297.64 164.09 0 297.64-133.52 297.64-297.64 0-164.12-133.55-297.63-297.64-297.63Zm107.8 333.25H189.83c-19.541 0-35.62-16.079-35.62-35.62 0-19.541 16.079-35.62 35.62-35.62h215.61c19.541 0 35.62 16.079 35.62 35.62 0 19.541-16.079 35.62-35.62 35.62Z",style:{fill:"#f55","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.179)"},null,-1),G=[M],E=n("p",{class:"custom-container-title"},"\u5371\u9669",-1),T=n("p",null,"\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u8B66\u544A",-1),Z=n("details",{class:"custom-container details"},[n("p",null,"\u8FD9\u662F\u4E00\u4E2A\u8BE6\u60C5\u5757")],-1),O=n("p",null,"description",-1),S=t(`<h2 id="vuepress-s-built-in-components" tabindex="-1"><a class="header-anchor" href="#vuepress-s-built-in-components" aria-hidden="true">#</a> VuePress&#39;s Built-in Components<sup class="footnote-ref"><a href="#fn3" id="fnref3">[3]</a></sup></h2><h3 id="badge" tabindex="-1"><a class="header-anchor" href="#badge" aria-hidden="true">#</a> Badge</h3><ul><li>Props <ul><li>type <ul><li>Type: <code>&#39;tip&#39; | &#39;warning&#39; | &#39;danger&#39;</code></li><li>Default: <code>&#39;tip&#39;</code></li></ul></li><li>text <ul><li>Type: <code>string</code></li><li>Default: <code>&#39;&#39;</code></li></ul></li><li>vertical <ul><li>Type: <code>&#39;top&#39; | &#39;middle&#39; | &#39;bottom&#39; | undefined</code></li><li>Default: <code>undefined</code></li></ul></li></ul></li></ul><p><strong>Example</strong></p><p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tip<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>top<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>middle<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token list punctuation">-</span> VuePress - <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>v2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">vertical</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,7),z=a("VuePress - "),D=a("VuePress - "),N=a("VuePress - "),R=t(`<h3 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup" aria-hidden="true">#</a> CodeGroup</h3><ul><li><p>Props</p><ul><li>title <ul><li>Type: <code>string</code></li><li>Required: <code>true</code></li></ul></li><li>active <ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul></li></ul></li><li><p>Details:</p><p>This component must be placed inside a CodeGroup component.</p><p>Use the active prop to set the initial active item, or the first item will be activated by default.</p></li></ul><p><strong>Example</strong></p><p><strong>Input</strong></p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>:::: code-group
::: code-group-item yarn

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash:no-line-numbers</span>
<span class="token code-block language-bash language-bash"><span class="token function">yarn</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
::: code-group-item npm

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">bash:no-line-numbers</span>
<span class="token code-block language-bash language-bash"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,6),Y=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),a(`
`)])])],-1),H=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),a(),n("span",{class:"token function"},"install"),a(`
`)])])],-1),L=t(`<h2 id="gungnir-s-markdown-syntax" tabindex="-1"><a class="header-anchor" href="#gungnir-s-markdown-syntax" aria-hidden="true">#</a> Gungnir&#39;s Markdown Syntax<sup class="footnote-ref"><a href="#fn4" id="fnref4">[4]</a></sup></h2><h3 id="chart-js" tabindex="-1"><a class="header-anchor" href="#chart-js" aria-hidden="true">#</a> Chart.js</h3><p>Use JavaScript charting library <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">Chart.js</a> in Markdown via <a href="https://v2-vuepress-theme-gungnir.vercel.app/docs/plugins/chart/" target="_blank" rel="noopener noreferrer">plugin-chart</a>:</p><p><strong>Input</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>\`\`\`chart
<span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;doughnut&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;datasets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;rgba(255, 99, 132)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;rgba(255, 206, 86)&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;rgba(54, 162, 235)&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;labels&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Red&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Yellow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Blue&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,6),U=t(`<h3 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> Mark</h3><p>Mark important information: &quot;Excuse me. Can you tell me how much the shirt is?&quot; &quot;Yes, it&#39;s =<mark>nine fifteen</mark>=.&quot;</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>Yes, it&#39;s ==nine fifteen==.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="fn1" class="footnote-item"><p><a href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noopener noreferrer">Basic Syntax</a> <a href="#fnref1" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="fn2" class="footnote-item"><p><a href="https://v2.vuepress.vuejs.org/guide/markdown.html#syntax-extensions" target="_blank" rel="noopener noreferrer">VuePress</a> <a href="#fnref2" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="fn3" class="footnote-item"><p><a href="https://v2.vuepress.vuejs.org/reference/default-theme/components.html#built-in-components" target="_blank" rel="noopener noreferrer">VuePress&#39;s Built-in Components</a> <a href="#fnref3" class="footnote-backref">\u21A9\uFE0E</a></p></li><li id="fn4" class="footnote-item"><p><a href="https://v2-vuepress-theme-gungnir.vercel.app/docs/basic/intro.html" target="_blank" rel="noopener noreferrer">VuePress theme Gungnir</a> <a href="#fnref4" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section>`,6);function A(J,F){const r=e("LinkCard"),p=e("Badge"),c=e("CodeGroupItem"),u=e("CodeGroup"),d=e("Chart");return i(),o("div",null,[h,n("div",k,[(i(),o("svg",g,_)),x,y]),n("div",w,[(i(),o("svg",q,j)),B,V]),n("div",P,[(i(),o("svg",I,G)),E,T]),Z,s(r,{title:"title",link:"url",icon:"Icon Name | Image URL",image:"",siteDomain:"true"},{default:l(()=>[O]),_:1}),S,n("ul",null,[n("li",null,[z,s(p,{type:"tip",text:"v2",vertical:"top"})]),n("li",null,[D,s(p,{type:"warning",text:"v2",vertical:"middle"})]),n("li",null,[N,s(p,{type:"danger",text:"v2",vertical:"bottom"})])]),R,s(u,null,{default:l(()=>[s(c,{title:"yarn"},{default:l(()=>[Y]),_:1}),s(c,{title:"npm"},{default:l(()=>[H]),_:1})]),_:1}),L,s(d,{id:"chart_64a560e0","data-code":`{
  "type": "doughnut",
  "data": {
    "datasets": [{
      "data": [10, 20, 30],
      "backgroundColor": [
        "rgba(255, 99, 132)",
        "rgba(255, 206, 86)",
        "rgba(54, 162, 235)"
      ]
    }],
    "labels": ["Red", "Yellow", "Blue"]
  }
}`}),U])}var K=v(m,[["render",A],["__file","2022-03-08-markdown-grammar.html.vue"]]);export{K as default};