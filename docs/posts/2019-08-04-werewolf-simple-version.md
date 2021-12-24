**7-1 Werewolf - Simple Version (20 分)**


Werewolf（狼人杀） is a game in which the players are partitioned into two parties: the werewolves and the human beings. Suppose that in a game,

+ player #1 said: "Player #2 is a werewolf.";
+ player #2 said: "Player #3 is a human.";
+ player #3 said: "Player #4 is a werewolf.";
+ player #4 said: "Player #5 is a human."; and
+ player #5 said: "Player #4 is a human.".

Given that there were 2 werewolves among them, at least one but not all the werewolves were lying, and there were exactly 2 liars. Can you point out the werewolves?

Now you are asked to solve a harder version of this problem: given that there were N players, with 2 werewolves among them, at least one but not all the werewolves were lying, and there were exactly 2 liars. You are supposed to point out the werewolves.

#### Input Specification:
Each input file contains one test case. For each case, the first line gives a positive integer N (5≤N≤100). Then N lines follow and the i-th line gives the statement of the i-th player (1≤i≤N), which is represented by the index of the player with a positive sign for a human and a negative sign for a werewolf.

#### Output Specification:
If a solution exists, print in a line in ascending order the indices of the two werewolves. The numbers must be separated by exactly one space with no extra spaces at the beginning or the end of the line. If there are more than one solution, you must output the smallest solution sequence -- that is, for two sequences A=a[1],...,a[M] and B=b[1],...,b[M], if there exists 0≤k<M such that a[i]=b[i] (i≤k) and a[k+1]<b[k+1], then A is said to be smaller than B. In case there is no solution, simply print `No Solution`.

#### Sample Input 1:
```
5
-2
+3
-4
+5
+4
```
#### Sample Output 1:
```
1 4
```
#### Sample Input 2:
```
6
+6
+3
+1
-5
-2
+4
```
#### Sample Output 2 (the solution is not unique):
```
1 5
```
#### Sample Input 3:
```
5
-2
-3
-4
-5
-1
```
#### Sample Output 3:
```
No Solution
```

>感觉就是枚举暴力题。。不过我第一个点老不过，后来阅读了一边题目。意思是一个狼人撒谎和一个人撒谎，我理解成了一个狼人一人撒谎或者两个狼人撒谎，那个at least应该被我错误理解了。

>思路
二重循环，第一层循环记i为狼人，第二层循环记j为狼人，然后在内循环判断一下当前状态是否满足n个人的陈述，可以的话就打印不然最后就输出不存在

```
#include <iostream>
#include <math.h>
#define maxsize 105
using namespace std;
int n, seq[maxsize];
bool wolves[maxsize] = {false};
bool validate(int wolfa, int wolfb)
{
    int z, truen = 0, falsen = 0, wolfly = 0;
    for (z = 1; z <= n; z++)
    {
        if ((abs(seq[z]) == wolfa || abs(seq[z]) == wolfb) == (seq[z] < 0))
            truen++;
        else
        {
            falsen++;
            if (z == wolfa || z == wolfb)
                wolfly++;
        }
    }
    return falsen == 2 && wolfly == 1;
}
int main()
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);
    cin >> n;
    for (int i = 1; i <= n; i++)
        cin >> seq[i];
    for (int i = 1; i <= n; i++)
        for (int j = i + 1; j <= n; j++)
            if (validate(i, j))
            {
                int tmps = 0;
                for (int m = 1; m <= n; m++)
                    if ((m == i || m == j) && tmps == 0)
                    {
                        cout << m;
                        tmps++;
                    }
                    else if ((m == i || m == j) && tmps != 0)
                        cout << " " << m;
                return 0;
            }
    cout << "No Solution";
    return 0;
}
```
![PAT（甲级）2018年秋季考试 7-1 Werewolf - Simple Version .png][1]


[1]: http://alomerry.com/usr/uploads/2020/01/817319507.png