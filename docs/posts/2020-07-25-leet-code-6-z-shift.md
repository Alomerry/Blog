---
layout: Post
title: LeetCode 6
subtitle:
author: Alomerry Wu
date: 2020-07-25
headerImage: /img/in-post/2020-07-25/header.jpg
catalog: true
tags:
- Y2020
- LeetCode
---

<!-- Description. -->

<!-- more -->

[tag type="warning"]中等[/tag]

## 题目

将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 `"LEETCODEISHIRING"` 行数为 3 时，排列如下：

```
L   C   I   R
E T O E S I I G
E   D   H   N
```

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：`"LCIRETOESIIGEDHN"`。

请你实现这个将字符串进行指定行数变换的函数：

`string convert(string s, int numRows);`

示例 1:

```
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
```

示例 2:

```
输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"

解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G
```

## 代码

 ```cpp
string convert(string s, int numRows) {
    string res = "";
    if (numRows == 1)
        return s;
    vector<char> list[numRows];
    int index = 0, flag = 1;
    for (int i = 0; i < s.size(); ++i) {
        list[index].push_back(s[i]);
        index += flag;
        if (index == numRows - 1) {
            flag = -1;
        } else if (index == 0) {
            flag = 1;
        }
    }
    for (int i = 0; i < numRows; ++i) {
        for (int j = 0; j < list[i].size(); ++j) {
            res.push_back(list[i][j]);
        }
    }
    return res;
}
```

![leetcode-6-z.png][1]


[1]: http://alomerry.com/usr/uploads/2020/07/3375983807.png