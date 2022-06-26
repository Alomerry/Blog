import{_ as i,o as n,c as l,a as e}from"./app.c3e71323.js";const s={},d=e(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;algorithm&gt;
&gt;\`max_element\`

&gt;\`min_element\`

&gt;\`min\`,\`max\`\u51FD\u6570

&gt;\`lower_bound\`
\u51FD\u6570\u539F\u578B\uFF1A
\`lower_bound(int* first,int* last,val)\`;
\u4F5C\u7528\uFF1A\u67E5\u627E\u6709\u5E8F\u533A\u95F4[first\uFF0Clast]\u4E2D\u7B2C\u4E00\u4E2A\u5927\u4E8E\u7B49\u4E8Ex\u7684\u4F4D\u7F6E

&gt;\`upper_bound\`
\u4F5C\u7528\uFF1A\u5927\u81F4\u548Clower_bound()\u76F8\u540C\uFF0C\u4E0D\u8FC7\u67E5\u627E\u7684\u662F\u6709\u5E8F\u533A\u95F4[first\uFF0Clast]\u4E2D\u7B2C\u4E00\u4E2A


&gt;\`Sort\`
\u51FD\u6570\u539F\u578B\uFF1A
\`void sort(RanIt first, RanIt last, Pred pr);\`
\u53C2\u6570\u89E3\u91CA
first	\u6307\u5411\u5BB9\u5668\u9996\u5730\u5740\u7684\u6307\u9488\uFF08\u6570\u7EC4\u540D\uFF09
last	\u6307\u5411\u5BB9\u5668\u5C3E\u5730\u5740\u7684\u6307\u9488\uFF08\u6570\u7EC4\u540D+\u6570\u7EC4\u957F\u5EA6\uFF09
pr	\u6BD4\u8F83\u65B9\u6CD5\uFF08\u9ED8\u8BA4\u4E3A\u5347\u5E8F\uFF09

&gt;\`fill\`
\u51FD\u6570\u539F\u578B\uFF1A
\`void fill(first,last,val); \`
\u53C2\u6570\u89E3\u91CA
first	\u8D77\u59CB\u5730\u5740
last	\u672B\u5C3E\u5730\u5740
val	\u5C06\u8981\u66FF\u6362\u7684\u503C


&gt;#include&lt;stdlib.h&gt;
atoi
atof \u5B57\u7B26\u4E32\u8F6C\u6362\u4E3Adouble


&gt;#include string
&gt;getline

&gt;
&lt;ctype.h&gt;
tolower()/toupper() //\u503C\u5E76\u6CA1\u6709\u6539\u53D8
isalpha
isalnum
isdigit\uFF08\uFF09\uFF0Cisprint\uFF08\uFF09
isalpha \uFF08\u5B57\u6BCD\uFF0C\u5305\u62EC\u5927\u5199\u3001\u5C0F\u5199\uFF09
islower\uFF08\u5C0F\u5199\u5B57\u6BCD\uFF09
isupper\uFF08\u5927\u5199\u5B57\u6BCD\uFF09
isalnum\uFF08\u5B57\u6BCD\u5927\u5199\u5C0F\u5199+\u6570\u5B57\uFF09
isblank\uFF08space\u548C\\t\uFF09
isspace\uFF08space\u3001\\t\u3001\\r\u3001\\n\uFF09


&gt;
&lt;math.h&gt;
1.pow()
\u51FD\u6570\u539F\u578B\uFF1Adouble pow(double x, double y)

\u4F5C\u7528\uFF1A\u8FD4\u56DEx\u7684y\u6B21\u65B9

2.floor()
\u51FD\u6570\u539F\u578B\uFF1Adouble floor\uFF08double x\uFF09\uFF1B

3.atan()
fabs(double) \u53D6double\u7684\u7EDD\u5BF9\u503C\uFF1B
abs(int) \u53D6int\u7684\u7EDD\u5BF9\u503C\uFF1B
round(double) \u5BF9double\u7C7B\u578B\u8FDB\u884C\u56DB\u820D\u4E94\u5165\uFF1B
sqrt(double) \u8FD4\u56DEdouble\u7684\u7B97\u672F\u5E73\u65B9\u6839\uFF1B

\u5173\u4E8E\u5404\u4E2A\u7C7B\u578B\u7684\u8F6C\u6362
\u53EF\u4EE5\u4F7F\u7528stringstream
eg:

#include &lt;sstream&gt;
stringstream ss;
string a=&quot;12&quot;;
int b;
ss&lt;&lt;a;
ss&gt;&gt;b;

\u6700\u5927\u516C\u7EA6\u6570
//\u516C\u500D\u6570 \u4E24\u6570\u76F8\u4E58  \u9664\u4EE5\u516C\u7EA6\u6570
#include&lt;bits/stdc++.h&gt;
using namespace std;
int a[40] = {1,2};
int main()
{
    cout &lt;&lt; __gcd(12,6);
    //cout &lt;&lt; __INT32_MAX__ &lt;&lt; endl;
}

accumulate\u6C42\u548C
#include&lt;numeric&gt;
#include&lt;iostream&gt;
#include&lt;vector&gt;
using namespace std;
int main()
{
    vector&lt;int&gt; v;
    v.push_back(3);
    v.push_back(5);
    v.push_back(9);
    cout &lt;&lt; accumulate(v.begin(),v.end(),0);  //0\u662F\u7D2F\u52A0\u7684\u521D\u503C
}


bitset
\u53EF\u5B9E\u73B0\u5341\u8FDB\u5236\u548C\u4E8C\u8FDB\u5236\u7684\u4E92\u6362

#include&lt;iostream&gt;
#include&lt;bitset&gt;
using namespace std;
int main()
{
    bitset&lt;32&gt; a(8);
    cout &lt;&lt; a[1] &lt;&lt; endl;
    int b;
    b = a.to_ullong();
    cout &lt;&lt;a &lt;&lt; &quot; &quot; &lt;&lt; b &lt;&lt;endl;
}

count
/*
count(begin,end, int)  \u5927\u4E8Eint\u578B\u7684\u6570
count_if(begin,end,fun)  \u81EA\u5B9A\u4E49\u51FD\u6570
*/

#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
template &lt;class T&gt;
void print(T x)
{
    cout &lt;&lt; x &lt;&lt; endl;
}

int main()
{
    int a[10] = {1,2,3,4,5,5,7,8,9,10};
    cout &lt;&lt; count(a,a+10,10);
    //for_each(a,a+9,print&lt;int&gt;) ;
}

copy
/*
copy(begin,end,begin)
\u5C06\u7B2C\u4E00\u4E2A\u6570\u7EC4\u7684begin\u81F3end   \u8D4B\u503C\u5230\u7B2C\u4E8C\u4E2A\u5BB9\u5668begin\u5F00\u59CB
*/
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
template &lt;class T&gt;
void print(T x)
{
    cout &lt;&lt; x &lt;&lt; endl;
}
int main()
{
    int a[] = {1,2,3,4,5,6,7,8,9} ;
    int b[] = {9,8,7,6,5,4,3,2,1} ;  //
    copy(a,a+5,b);  //\u590D\u5236\u524D\u4E94\u4E2A
    for_each(b,b+9,print&lt;int&gt;);
}


find_if()
/*
find_if(begin,end,greatThree)
\u627E\u5230\u5927\u4E8E\u4E09\u7684\u6240\u4EE5\u6240\u6709\u6570\uFF0Creturn \u9996\u5730\u5740   \u5C31\u662F\u4E00\u4E2A\u6570\u7EC4
*/

#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
bool greatThree(int x)
{
    if(x &gt; 3)
        return true;
    else
        return false;
}
template &lt;class T&gt;
void print(T x)
{
    cout &lt;&lt; x &lt;&lt; endl;
}

int main()
{
    int a[10] = {1,2,3,4,5,6,7,8,9,10};
    int *p = find_if(a,a+10,greatThree) ;
    for (int i = 0;i &lt; 7;i++)
        cout &lt;&lt; *p++ &lt;&lt;endl;

	//for_each(a,a+9,print&lt;int&gt;) ;
}



find
/*
find\u8FD4\u56DE\u627E\u5230\u5143\u7D20\u7684\u5730\u5740
*/

#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
template &lt;class T&gt;
void print(T x)
{
    cout &lt;&lt; x &lt;&lt; endl;
}

int main()
{
    int a[10] = {1,2,3,4,5,6,7,8,9,10};
    cout &lt;&lt; find(a,a+10,6);
}



for_each()
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
template &lt;class T&gt;
void print(T x)
{
    cout &lt;&lt; x &lt;&lt; endl;
}

int main()
{
    int a[10] = {1,2,3,4,5,6,7,8,9,10};
    for_each(a,a+10,print&lt;int&gt;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>...\u5F85\u66F4\u65B0</p>`,2),v=[d];function a(u,r){return n(),l("div",null,v)}var t=i(s,[["render",a],["__file","2019-08-02-useful-cpp-lib.html.vue"]]);export{t as default};
