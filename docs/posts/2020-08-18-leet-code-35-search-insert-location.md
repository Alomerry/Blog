---
layout: Post
title: LeetCode 35 搜索插入位置
subtitle: 
author: Alomerry Wu
date: 2020-08-18
headerImage: /img/in-post/2020-08-18/header.png
catalog: true
tags:
- Y2020
- LeetCode
---

<!-- Description. -->

<!-- more -->

## 题目 <Badge type="tip" text="easy" vertical="top" />

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

```text
输入: [1,3,5,6], 5
输出: 2
```

示例 2:

```text
输入: [1,3,5,6], 2
输出: 1
```

示例 3:

```text
输入: [1,3,5,6], 7
输出: 4
```

示例 4:

```text
输入: [1,3,5,6], 0
输出: 0
```

## 思路

二分查找

## 代码

```cpp
int binarySearch(vector<int> nums, int left, int right, int target) {
    if (target < nums[left])
        return left;
    if (target > nums[right])
        return right + 1;
    if (left >= right) {
        if (target <= nums[left]) {
            return left;
        } else {
            return left + 1;
        }
    }
    int middle = left + (right - left) / 2;
    if (target == nums[middle])return middle;
    else if (target < nums[middle]) {
        return binarySearch(nums, left, middle, target);
    } else {
        return binarySearch(nums, middle + 1, right, target);
    }
}

int searchInsert(vector<int> &nums, int target) {
     return binarySearch(nums, 0, nums.size() - 1, target);
}
```