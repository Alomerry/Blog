---
layout: Post
title: LeetCode 2
subtitle: 
author: Alomerry Wu
date: 2020-07-21
headerImage: /img/in-post/2020-07-21/header.jpg
catalog: true
tags:
- Y2020
- LeetCode
---

<!-- Description. -->

<!-- more -->

[tag type="warning"]中等[/tag]

给出两个 **非空** 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 **逆序** 的方式存储的，并且它们的每个节点只能存储 **一位** 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

```text
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```


## 代码

### 暴力法

 ```cpp
#include <iostream>
using namespace std;

struct ListNode
{
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};
ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
{
    int carry = 0;
    ListNode *result = new ListNode(0);
    ListNode *l = result;
    while (l1 != NULL || l2 != NULL)
    {
        int temp = 0;
        if (l1 != NULL)
        {
            temp = l1->val;
            l1 = l1->next;
        }
        if (l2 != NULL)
        {
            temp += l2->val;
            l2 = l2->next;
        }
        temp += carry;
        carry = temp / 10;
        temp %= 10;
        l->next = new ListNode(temp);
        l = l->next;
    }
    if (carry != 0)
    {
        l->next = new ListNode(carry);
        l->next->next = NULL;
    }
    return result->next;
}
```

![leetcode-cn-2-violence.png][1]


[1]: http://alomerry.com/usr/uploads/2020/07/3806540430.png