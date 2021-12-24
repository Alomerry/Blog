---
layout: Post
title: LeetCode 7
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

[tag type="success"]简单[/tag]

## 题目

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

```text
输入: 123
输出: 321
```

示例 2:

```text
输入: -123
输出: -321
```

示例 3:

```text
输入: 120
输出: 21
```

注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2<sup>31</sup>, 2<sup>31</sup> − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

## 代码

 ```cpp
int reverse(int x) {
    if (x > 2147483647 || x < -2147483648){
        return 0;
    }
    bool isPositive = x >= 0;
    if (!isPositive) {
        if (x < -2147483647 || x >2147483648){
            return 0;
        }
        x = abs(x);
    }
    long res = 0;
    while (x > 0) {
        res = res * 10 + x % 10;
        if (res > 2147483647 || res < -2147483648){
            return 0;
        }
        x /= 10;

    }
    return isPositive ? res : -1 * res;
}
```

![leetcode-7.png][1]


[1]: http://alomerry.com/usr/uploads/2020/07/628488588.png