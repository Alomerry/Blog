---
layout: Post
title: LeetCode 1
subtitle: 
author: Alomerry Wu
date: 2020-07-16
headerImage: /img/in-post/2020-07-16/header.jpg
catalog: true
tags:
- Y2020
- LeetCode
---

<!-- Description. -->

<!-- more -->

[tag type="success"]简单[/tag]

## 题目

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:

```text
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

[collapse status="false" title="提示"]
[tabs]
[tab name="提示1" active="true"]
A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's
best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can
come up with optimizations.
[/tab]
[tab name="提示2"]
So, if we fix one of the numbers, say `x`, we have to scan the entire array to find the next number `y` which
is `value - x` where value is the input parameter. Can we change our array somehow so that this search becomes faster?
[/tab]
[tab name="提示3"]
The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map
to speed up the search?
[/tab]
[/tabs]
[/collapse]

## 代码

### 暴力法

 ```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
      vector<int> res;
        for(int i = 0;i<nums.size();i++){
            for (int j = i+1;j< nums.size();j++){
                if(nums[j]+nums[i]!=target){
                    continue;
                }else{
                    res.push_back(i);
                    res.push_back(j);
                    break;
                }
            }
        }
        return res;
    }
};
```

![暴力法耗时耗内存.png][1]

按照提示 1 中说的,暴力搜索所有可能的数字对能确保完整,但是太慢了,需要优化,下面是剪枝版.

### 暴力剪枝法

 ```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
    vector<int> res;
    int tmp=10e8;
    for(int i = 0;i<nums.size();i++){
        for (int j = i+1;j< nums.size();j++){
            if(abs(nums[j]+nums[i]-target)>tmp){
                break;
            }else{
                tmp = abs(tmp-target);
            }
            if(nums[j]+nums[i]!=target){
                continue;
            }else{
                res.push_back(i);
                res.push_back(j);
                break;
            }
        }
    }
    return res;
    }
};
```

![暴力剪枝版.png][2]

可以看到时间复杂度得到了很好的优化.

根据最后一个提示,使用哈希表减小时间复杂度.

### 哈希法

 ```cpp
vector<int> twoSum(vector<int> &nums, int target)
{
    vector<int> result;
    map<int, int> tmp, count;
    for (int i = 0; i < nums.size(); i++)
    {
        tmp[nums[i]] = i;
        ++count[nums[i]];
    }
    for (int i = 0; i < nums.size(); i++)
    {
        map<int, int>::iterator res = tmp.find(target - nums[i]);
        if (res != tmp.end())
        {
            if (res->first == nums[i] && count[nums[i]] <= 1)
            {
                continue;
            }
            else
            {
                result.push_back(i);
                result.push_back(res->second);
                break;
            }
        }
    }
    return result;
}
```

![哈希表优化.png][3]

[1]: http://alomerry.com/usr/uploads/2020/07/2761686745.png

[2]: http://alomerry.com/usr/uploads/2020/07/2591605471.png

[3]: http://alomerry.com/usr/uploads/2020/07/3985275830.png