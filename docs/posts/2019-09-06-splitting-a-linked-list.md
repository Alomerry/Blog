**B Splitting A Linked List (25 分)**

Given a singly linked list, you are supposed to rearrange its elements so that all the negative values appear before all of the non-negatives, and all the values in [0, K] appear before all those greater than K. The order of the elements inside each class must not be changed. For example, given the list being 18→7→-4→0→5→-6→10→11→-2 and K being 10, you must output -4→-6→-2→7→0→5→10→18→11.

#### Input Specification:
Each input file contains one test case. For each case, the first line contains the address of the first node, a positive N (≤10<sup>5</sup>) which is the total number of nodes, and a positive K (≤10<sup>3</sup>). The address of a node is a 5-digit nonnegative integer, and NULL is represented by −1.

Then N lines follow, each describes a node in the format:

`Address Data Next`
where `Address` is the position of the node, `Data` is an integer in [−10<sup>5</sup>,10<sup>​5</sup>], and `Next` is the position of the next node. It is guaranteed that the list is not empty.

#### Output Specification:
For each case, output in order (from beginning to the end of the list) the resulting linked list. Each node occupies a line, and is printed in the same format as in the input.

#### Sample Input:
```
00100 9 10
23333 10 27777
00000 0 99999
00100 18 12309
68237 -6 23333
33218 -4 00000
48652 -2 -1
99999 5 68237
27777 11 48652
12309 7 33218
```
#### Sample Output:
```
33218 -4 68237
68237 -6 48652
48652 -2 12309
12309 7 00000
00000 0 99999
99999 5 23333
23333 10 00100
00100 18 27777
27777 11 -1
```

i> 题意
给你一张链表、首地址以及K。将负数按照原来的先后顺序重新放置在链表最前端，其次放置大小在[0,k]的数字，最后放置大于K的数字

i> 思路
用map保存链表。然后对map进行三次遍历，依次读取负数、[0,k]以及大于K的数即可。因为我用的unordered_map所以耗时过了，不然可以优化一下，遍历完后删除不需要遍历的。

```
#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
using namespace std;
int n, k;
string first;
struct Node
{
    string add, next;
    int data;
};
int main()
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);
    cin >> first >> n >> k;
    Node tmp;
    unordered_map<string, Node> linklist;
    vector<Node> out;
    for (int i = 0; i < n; i++)
    {
        cin >> tmp.add >> tmp.data >> tmp.next;
        linklist.insert(make_pair(tmp.add, tmp));
    }
    tmp = linklist.find(first)->second;
    while (true)
    {
        if (tmp.data < 0)
            out.push_back(tmp);
        if (tmp.next == "-1")
            break;
        tmp = linklist.find(tmp.next)->second;
    }
    tmp = linklist.find(first)->second;
    while (true)
    {
        if (tmp.data <= k && tmp.data >= 0)
            out.push_back(tmp);
        if (tmp.next == "-1")
            break;
        tmp = linklist.find(tmp.next)->second;
    }

    /* tmp = linklist.find(first)->second;
    while (true)
    {
        if (tmp.data == k)
        {
            out.push_back(tmp);
            break;
        }
        if (tmp.next == "-1")
            break;
        tmp = linklist.find(tmp.next)->second;
    } */
    tmp = linklist.find(first)->second;
    while (true)
    {
        if (tmp.data > k)
            out.push_back(tmp);
        if (tmp.next == "-1")
            break;
        tmp = linklist.find(tmp.next)->second;
    }
    int len = out.size() - 1;
    for (int i = 0; i < len; i++)
        cout << out[i].add << " " << out[i].data << " " << out[i + 1].add << endl;
    cout << out[len].add << " " << out[len].data << " -1" << endl;

    return 0;
}
```
![PAT（甲级）2017年秋季考试 B Splitting A Linked List.png][1]


[1]: http://alomerry.com/usr/uploads/2020/01/3444521249.png