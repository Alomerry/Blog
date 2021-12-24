**7-1 Sexy Primes (20 分)**

Sexy primes are pairs of primes of the form (p, p+6), so-named since "sex" is the Latin word for "six". (Quoted from [http://mathworld.wolfram.com/SexyPrimes.html](http://mathworld.wolfram.com/SexyPrimes.html))

Now given an integer, you are supposed to tell if it is a sexy prime.

#### Input Specification:
Each input file contains one test case. Each case gives a positive integer N (≤10<sup>8</sup>).

Output Specification:
For each case, print in a line `Yes` if N is a sexy prime, then print in the next line the other sexy prime paired with N (if the answer is not unique, output the smaller number). Or if N is not a sexy prime, print `No` instead, then print in the next line the smallest sexy prime which is larger than N.

#### Sample Input 1:
```
47
```
#### Sample Output 1:
```
Yes
41
```
#### Sample Input 2:
```
21
```
#### Sample Output 2:
```
No
23
```

i> 题意
sexy primes表示以（p，p+6）格式的两个质数。
给你一个数，你判断该数是否能形成sexy primes，如果不能，求出第一个比该数大的能形成sexy primes的数

i> 思路
判断给出的数是否是和加减六两个数是否是质数，若不是一次增加1计算能否满足即可。

```
#include <iostream>
#include <algorithm>
#include <math.h>
#define maxsize 505
#define INF 0x3ffffff
using namespace std;
int n;
bool isPrime(int v)
{
    if (v <= 2)
        return false;
    for (int i = 2; i <= sqrt(v); i++)
        if (v % i == 0)
            return false;
    return true;
}
int main()
{
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);
    cin >> n;
    if (isPrime(n))
    {
        if (isPrime(n - 6))
        {
            cout << "Yes" << endl
                 << n - 6;
            return 0;
        }
        else if (isPrime(n + 6))
        {
            cout << "Yes" << endl
                 << n + 6;
            return 0;
        }
    }
    int i = n + 1;
    while (!(isPrime(i) && (isPrime(i - 6) || isPrime(i + 6))))
        i++;
    cout << "No" << endl
         << i;
    return 0;
}
```

![PAT（甲级）2019年春季考试 7-1 Sexy Primes .png][1]


[1]: http://alomerry.com/usr/uploads/2020/01/1934945324.png