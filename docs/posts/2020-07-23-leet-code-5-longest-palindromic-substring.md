---
layout: Post
title: LeetCode 5
subtitle: 
author: Alomerry Wu
date: 2020-07-23
headerImage: /img/in-post/2020-07-23/header.jpg
catalog: true
tags:
- Y2020
- LeetCode
---

<!-- Description. -->

<!-- more -->

[tag type="warning"]中等[/tag]

## 题目

给定一个字符串 `s`，找到 `s` 中最长的回文子串。你可以假设 `s` 的最大长度为 1000。

示例 1：

```text
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

示例 2：

```text
输入: "cbbd"
输出: "bb"
```

## 代码

### 动态规划

 ```cpp
bool dp[1000][1000];

string longestPalindrome(string s) {
    int max = -1, a = 0, b = 1, j = 0, size = s.size();
    for (int l = 0; l < size; ++l) {
        for (int i = 0; i + l < size; ++i) {
            j = i + l;
            if (l == 0)
                dp[i][j] = true;
            else if (l == 1) {
                dp[i][j] = s[i] == s[j];
            } else {
                dp[i][j] = s[i] == s[j] && dp[i + 1][j - 1];
            }
            if (dp[i][j] && max < l+1) {
                max = l+1;
                a = i;
                b = l+1;
            }
        }
    }
    return s.substr(a, b);
}
```

![leetcode-5-dp.png][1]

todo

### 中心拓展法

### 马拉车法

[1]: http://alomerry.com/usr/uploads/2020/07/3191030596.png