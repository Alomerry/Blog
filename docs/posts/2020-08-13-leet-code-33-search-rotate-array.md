---
layout: Post
title: LeetCode 33
subtitle: 
author: Alomerry Wu
date: 2020-08-13
headerImage: /img/in-post/2020-08-13/header.jpg
catalog: true
tags:
- Y2020
- LeetCode
---

<!-- Description. -->

<!-- more -->

[tag type="warning"]中等[/tag]

## 题目

假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 `[0,1,2,4,5,6,7]` 可能变为 `[4,5,6,7,0,1,2]`)。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 `-1` 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log<sup>n</sup>) 级别。

示例 1:

```text
输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
```

示例 2:

```text
输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1
```

## 思路

## 代码

 ```cpp
int result = -1;

void binarySearch(vector<int> &nums, int left, int right, int target) {
    if (left >= right) {
        if (target == nums[left]) {
            result = left;
        }
        return;
    }
    int middle = left + (right - left) / 2;
    binarySearch(nums, left, middle, target);
    binarySearch(nums, middle + 1, right, target);
}

int search(vector<int> &nums, int target) {
    if(nums.size()==0)
        return -1;
    binarySearch(nums, 0, nums.size() - 1, target);
    return result;
}
```

![leetcode-CN-33-binarySearch.png][1]


[1]: http://alomerry.com/usr/uploads/2020/08/3232021104.png