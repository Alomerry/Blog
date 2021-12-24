---
layout: Post
title: LeetCode 14
subtitle: 
author: Alomerry Wu
date: 2020-08-07
headerImage: /img/in-post/2020-08-07/header.jpg
catalog: true
tags:
- Y2020
- LeetCode
---

<!-- Description. -->

<!-- more -->

简单

## 题目

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

```text
输入: ["flower","flow","flight"]
输出: "fl"
```

示例 2:

```text
输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```

说明:

所有输入只包含小写字母 `a-z`。

## 分而治之

## 代码

 ```cpp
string getMaxPrefix(string a, string b) {
    int i;
    for (i = 0; i < a.size() && i < b.size(); ++i) {
        if (a[i] != b[i]) {
            break;
        }
    }
    return a.substr(0, i);
}

string dp(vector<string> strs, int left, int right) {
    if (left >= right) {
        return strs[left];
    }
    int middle = left + (right - left) / 2;
    string leftStr = dp(strs, left, middle);
    string rightStr = dp(strs, middle + 1, right);
    return getMaxPrefix(leftStr, rightStr);
}

string longestCommonPrefix(vector<string> &strs) {
    if (strs.size() > 0) {
        return dp(strs, 0, strs.size() - 1);
    }
    return "";
}
```

![leetcode-cn-14.png][1]


[1]: http://alomerry.com/usr/uploads/2020/08/2566550619.png