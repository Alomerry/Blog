---
layout: Post
title: LeetCode 4
subtitle: 
author: Alomerry Wu
date: 2020-07-22
headerImage: /img/in-post/2020-07-22/header.jpg
catalog: true
tags:
- Y2020
- LeetCode
---

<!-- Description. -->

<!-- more -->

[tag type="danger"]困难[/tag]

## 题目

给定两个大小为 m 和 n 的正序（从小到大）数组 `nums1` 和 `nums2`。

请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 `nums1` 和 `nums2` 不会同时为空。


示例 1:

```text
nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
```

示例 2:

```
nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
```

## 思路

要取得中位数，只需要将两条数组合并并排序，如果数组长度为偶数，则去中间两个取平均值，否则去中间的数即可。

## 代码

`algorithm` 库中默认排序，底层是红黑树实现。

 ```cpp
double findMedianSortedArrays(vector<int> &nums1, vector<int> &nums2)
{
    for (int i = 0; i < nums2.size(); i++)
        nums1.push_back(nums2[i]);
    sort(nums1.begin(), nums1.end());
    if (nums1.size() % 2 == 0)
        return 1.0 * (nums1[nums1.size() / 2 - 1] + nums1[nums1.size() / 2]) / 2.0;
    else
        return 1.0 * nums1[nums1.size() / 2];
}
```

![leetcode-4-librarySort.png][1]

### 冒泡排序

 ```cpp
void bubbleSort(vector<int> &nums)
{
    int temp = 0;
    for (int i = 0; i < nums.size() - 1; i++)
    {
        for (int j = 0; j < nums.size() - 1-i; j++)
        {
            if (nums[j] > nums[j + 1])
            {
                temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
}
double findMedianSortedArrays(vector<int> &nums1, vector<int> &nums2)
{
    for (int i = 0; i < nums2.size(); i++)
        nums1.push_back(nums2[i]);
    bubbleSort(nums1);
    if (nums1.size() % 2 == 0)
        return 1.0 * (nums1[nums1.size() / 2 - 1] + nums1[nums1.size() / 2]) / 2.0;
    else
        return 1.0 * nums1[nums1.size() / 2];
}
```

![leetcode-4-bubbleSort.png][2]

### 快速排序

 ```cpp
void quickSort(vector<int> &nums, int left, int right) {
    if (left >= right)
        return;
    int i = left + 1, j = right, z, tmp = nums[left];
    while (i != j) {
        while (nums[j] >= tmp && i < j) {
            j--;
        }
        while (nums[i] <= tmp && i < j) {
            i++;
        }
        z = nums[i];
        nums[i] = nums[j];
        nums[j] = z;
    }
    if (tmp > nums[i]) {
        z = nums[i];
        nums[i] = tmp;
        nums[left] = z;
    }
    quickSort(nums, left, i - 1);
    quickSort(nums, j , right);
}
```

![leetcode-CN-4-quickSort.png][3]

### 其它排序


[1]: http://alomerry.com/usr/uploads/2020/07/829587068.png
[2]: http://alomerry.com/usr/uploads/2020/07/587943394.png
[3]: http://alomerry.com/usr/uploads/2020/07/2808056521.png