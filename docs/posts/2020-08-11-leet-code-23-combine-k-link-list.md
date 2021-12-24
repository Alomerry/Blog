---
layout: Post
title: LeetCode 23
subtitle: 
author: Alomerry Wu
date: 2020-08-11
headerImage: /img/in-post/2020-08-11/header.jpg
catalog: true
tags:
- Y2020
- LeetCode
---

<!-- Description. -->

<!-- more -->

[tag type='danger']困难[/tag]

## 题目

合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

```text
输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6
```

## 思路

将每个链表的头部记录在 set 中，并做好 head 的值与 链表 index 的映射。每次从 set 取出链表中最小的头部 value，去 map 中查询出等值的链表 index（使用 queue 保存），依次将链表元素取出。边界是当
set 中不存在元素时所有链表取完。

## 代码

 ```cpp
struct ListNode {
    int val;
    ListNode *next;

    ListNode(int x) : val(x), next(NULL) {}
};

set<int> miniSet;
map<int, queue<int>> valueIndexMapper;

ListNode *mergeKLists(vector<ListNode *> &lists) {
    ListNode *head = new ListNode(0), *tmp = head;
    for (int i = 0; i < lists.size(); ++i) {
        if (lists[i] != nullptr) {
            valueIndexMapper[lists[i]->val].push(i);
            miniSet.insert(lists[i]->val);
        }
    }
    while (miniSet.size() > 0) {
        int miniNow = *miniSet.begin();
        queue<int> q = valueIndexMapper[miniNow];
        while (!q.empty()) {
            int index = q.front();
            ListNode *item = lists[index];
            lists[index] = lists[index]->next;
            tmp->next = item;
            tmp = tmp->next;
            while (item->next != NULL && item->next->val == miniNow) {
                item = lists[index];
                lists[index] = lists[index]->next;
                tmp->next = item;
                tmp = tmp->next;
            }
            if(item->next != NULL){
                miniSet.insert(item->next->val);
                valueIndexMapper[item->next->val].push(q.front());
            }
            q.pop();
        }
        miniSet.erase(miniNow);
    }
    return head->next;
}
```

![leetcode-cn-23.png][1]


[1]: http://alomerry.com/usr/uploads/2020/08/3354624359.png