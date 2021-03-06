---
layout: Post
title: MongoDB Note
subtitle:
author: Alomerry Wu
date: 2021-05-22
update: 2022-07-02
useHeaderImage: true
catalog: true
headerMask: rgba(40, 57, 101, .5)
headerImage: https://cdn.alomerry.com/blog/img/in-post/header-image?max=59
tags:

- Y2021
- U2022
- MongoDB
- TODO

---

## TODO 

使用稀疏索引提高 exists 的性能 https://www.mongodb.com/docs/manual/reference/operator/query/exists/#use-a-sparse-index-to-improve--exists-performance

Mongodb 中文文档 https://www.docs4dev.com/docs/zh/mongodb/v3.6/reference/tutorial-update-documents.html

行为 https://docs.mongoing.com/can-kao/yun-suan-fu/aggregation-pipeline-operators/convert-aggregation

日期转换为时间戳 https://www.cainiaojc.com/note/qa03ld.html

MongoDB学习笔记(八)——操作汇总运算符、修饰符、聚合管道  https://blog.csdn.net/qq_33206732/article/details/79957983

毫秒级时间修改为秒级时间 https://blog.csdn.net/qq_38148394/article/details/87881128

type值 https://xuexiyuan.cn/article/detail/107.html

加减乘除  https://www.cnblogs.com/xuliuzai/p/10321650.html

mongoDB if else https://www.it1352.com/1017448.html

### shell case

```js
db.runCommand(
    {
        update: "scoreHistory",
        updates: [
            {
                q: {
                    accountId: ObjectId("5e7872a773ee1200fb1bec32"),
                    "changeType": "increase",
                    "remainingScore": { "$gt": 0 },
                    "weight": { "$exists": false },
                    createdAt: {
                        "$gt": ISODate("2022-06-12T09:23:04.728+0000"),
                        "$lt": ISODate("2022-07-12T09:23:04.728+0000")
                    },
                },
                u: [
                    {
                        $set: {
                            "weight": {
                                "$concat": [
                                    { 
                                        "$cond": { 
                                            if: { 
                                                "subBrief": { "$eq": "retail_score" },
                                            }, 
                                            then: "1", 
                                            else: {
                                                "$cond": { 
                                                    if: { 
                                                        "subBrief": { "$eq": "birthday_score" },
                                                    }, 
                                                    then: "2", 
                                                    else: {
                                                        "$cond": { 
                                                            if: { 
                                                                "subBrief": { "$eq": "campaign_score" },
                                                            }, 
                                                            then: "3", 
                                                            else: {
                                                                "$cond": { 
                                                                    if: { 
                                                                        "subBrief": { "$eq": "welcome_score" },
                                                                    }, 
                                                                    then: "4", 
                                                                    else: "5"
                                                                }
                                                            } 
                                                        }
                                                    } 
                                                }
                                            } 
                                        }
                                },
                                    {
                                        "$convert": {
                                            "input": {
                                                "$toLong": {
                                                    "$subtract": [
                                                        {
                                                        "$toLong": {
                                                                "$multiply": [
                                                                    {
                                                                        "$toLong": '$createdAt'
                                                                    }, 0.001
                                                                ]
                                                            }
                                                        },
                                                        1546272000
                                                    ]
                                                }
                                            },
                                            "to": "string"
                                        }
                                    },
                                ]
                            }
                        }
                    },
                ],
            multi: true
            }
        ]
    }
)

```


```js
db.runCommand(
    {
        update: "scoreHistory",
        updates: [
            {
                q: {
                    accountId: ObjectId("6180ea32e0df4b1472704228"),
                    changeType: "increase",
                    weight: {
                        "$exists": true
                    },
                    expireAt: {
                        "$exists": true
                    },
                },
                u: [
                    {
                        $set: {
                            priority: {
                                "$concat": [
                                    {
                                        "$convert": {
                                            "input": {
                                                "$toLong": {
                                                    "$multiply": [
                                                        {
                                                            "$toLong": '$expireAt'
                                                        }, 0.001
                                                    ]
                                                }
                                            },
                                            "to": "string"
                                        }
                                    },
                                    "_",
                                    {
                                        "$convert": {
                                            "input": "$weight",
                                            "to": "string"
                                        }
                                    },
                                    "_",
                                    {
                                        "$convert": {
                                            "input": "$_id",
                                            "to": "string"
                                        }
                                    },
                                ]
                            }
                        }
                    },
                ],
                multi: true
            }
        ]
    }
)

```

```js
var session = db.getMongo().startSession()
var sessionId = session.getSessionId().id

var cursor = session.getDatabase("shared").getCollection("member").find({accountId: ObjectId("xxx"), "birth" : NumberLong(0), "isDeleted" : false, "properties.name" : "会员编号"}).limit(1).noCursorTimeout()
var refreshTimestamp = new Date() // take note of time at operation start

while (cursor.hasNext()) {

  if ( (new Date()-refreshTimestamp)/1000 > 300 ) {
    print("refreshing session")
    db.adminCommand({"refreshSessions" : [sessionId]})
    refreshTimestamp = new Date()
  }

  var doc = cursor.next();
  var props = doc.properties;
    var propItem = props.filter((prop) => {
        return prop.name == "编号";
    });

    var syMemberId = propItem[0].value;

    print(`${doc._id}, ${syMemberId}`);
}
```

## Transacation 4.2

- 暂时无法在事务中创建集合
- 事务中不能使用不同 client

## [Install mongodb 4.2](https://docs.mongodb.com/v4.2/tutorial/install-mongodb-on-ubuntu/)

### Ubuntu 18.04

#### 卸载

`sudo apt-get purge mongodb-org*`

#### 停止

`sudo service mongod stop`

#### 删除数据

`sudo rm -r /var/log/mongodb`
`sudo rm -r /var/lib/mongodb`

#### 安装

##### Import the public key used by the package management system

- 添加 MongoDB public GPG：

`wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -`

- 安装 gnupg 及其依赖库

`sudo apt-get install gnupg`

- 安装后重新导入密钥

`wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -`

##### Create a list file for MongoDB

- Create the `/etc/apt/sources.list.d/mongodb-org-4.2.list` file for Ubuntu 18.04 (Bionic):

`echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list`

- Reload local package database.

`sudo apt-get update`

- Install the MongoDB packages.

`sudo apt-get install -y mongodb-org=4.4.1 mongodb-org-server=4.4.1 mongodb-org-shell=4.4.1 mongodb-org-mongos=4.4.1 mongodb-org-tools=4.4.1`

#### 启动

`sudo service mongod start`

#### 查看状态

`sudo service mongod status`

##### 创建账号

`db.createUser({user:"admin", pwd:"admin111", roles:[{role:"root", db:"admin"}]})`

##### 远程连接

```shell
vim /etc/mongod.conf

net:
  port: 27017  # 端口
  bindIp: 0.0.0.0  # 允许访问的地址，0.0.0.0表示所有

security:
  authorization: enabled
```

## export And import

https://docs.mongodb.com/v4.2/reference/program/mongoimport/
https://www.mongodb.org.cn/manual/197.html
`/exportMongodbData --collection=<collectionName> --pretty --query='{ "\_id" : {"$oid":"xxxx"}, "isDeleted": false ,"createdAt" : {"$gt":{"$date":"2021-01-01T01:09:28.810Z"}}}' --type=json <dbName>`

## go-mongodb-driver (2020/09/30)

### ClientOptions

#### AppName

> AppName specifies an application name that is sent to the server when creating new connections. It is used by the
> server to log connection and profiling information (e.g. slow query logs). This can also be set through the "appName"
> URI option (e.g appName=example_application"). The default is empty, meaning no app name will be sent.

#### Auth

> Auth specifies a Credential containing options for configuring authentication. See the options.Credential
> documentation for more information about Credential fields. The default is an empty Credential, meaning no
> authentication will be configured.

#### Compressors

> Compressors sets the compressors that can be used when communicating with a server. Valid values are:
>
> 1. "snappy" - requires server version >= 3.4
> 2. "zlib" - requires server version >= 3.6
> 3. "zstd" - requires server version >= 4.2, and driver version >= 1.2.0 with cgo support enabled or driver version >=
     1.3.0 without cgo
>
> If this option is specified, the driver will perform a negotiation with the server to determine a common list of of
> compressors and will use the first one in that list when performing operations.
> See https://docs.mongodb.com/manual/reference/program/mongod/#cmdoption-mongod-networkmessagecompressors for more
> information about configuring compression on the server and the server-side defaults. This can also be set through the "
> compressors" URI option (e.g. "compressors=zstd,zlib,snappy"). The default is an empty slice, meaning no compression
> will be enabled.

#### ConnectTimeout

> ConnectTimeout specifies a timeout that is used for creating connections to the server. If a custom Dialer is
> specified through SetDialer, this option must not be used. This can be set through ApplyURI with the "
> connectTimeoutMS" (e.g "connectTimeoutMS=30") option. If set to 0, no timeout will be used. The default is 30 seconds.

#### Dialer

> Dialer specifies a custom ContextDialer to be used to create new connections to the server. The default is a
> net.Dialer with the Timeout field set to ConnectTimeout. See https://golang.org/pkg/net/#Dialer for more information
> about the net.Dialer type.

#### Direct

> Direct specifies whether or not a direct connect should be made. If set to true, the driver will only connect to the
> host provided in the URI and will not discover other hosts in the cluster. This can also be set through the "
> directConnection" URI option. This option cannot be set to true if multiple hosts are specified, either through ApplyURI
> or SetHosts, or an SRV URI is used.
> As of driver version 1.4, the "connect" URI option has been deprecated and replaced with "directConnection". The "
> connect" URI option has two values:
>
> 1. "connect=direct" for direct connections. This corresponds to "directConnection=true".
> 2. "connect=automatic" for automatic discovery. This corresponds to "directConnection=false"
>
> If the "connect" and "directConnection" URI options are both specified in the connection string, their values must not
> conflict. Direct connections are not valid if multiple hosts are specified or an SRV URI is used. The default value for
> this option is false.

#### HeartbeatInterval

> HeartbeatInterval specifies the amount of time to wait between periodic background server checks. This can also be set
> through the "heartbeatIntervalMS" URI option (e.g. "heartbeatIntervalMS=10000"). The default is 10 seconds.

#### Hosts

> Hosts specifies a list of host names or IP addresses for servers in a cluster. Both IPv4 and IPv6 addresses are
> supported. IPv6 literals must be enclosed in '[]' following RFC-2732 syntax.
> Hosts can also be specified as a comma-separated list in a URI. For example, to include "localhost:27017" and "
> localhost:27018", a URI could be "mongodb://localhost:27017,localhost:27018". The default is ["localhost:27017"]

#### LocalThreshold

> LocalThreshold specifies the width of the 'latency window': when choosing between multiple suitable servers for an
> operation, this is the acceptable non-negative delta between shortest and longest average round-trip times. A server
> within the latency window is selected randomly. This can also be set through the "localThresholdMS" URI option (e.g. "
> localThresholdMS=15000"). The default is 15 milliseconds.

#### MaxConnIdleTime

> MaxConnIdleTime specifies the maximum amount of time that a connection will remain idle in a connection pool before it
> is removed from the pool and closed. This can also be set through the "maxIdleTimeMS" URI option (e.g. "
> maxIdleTimeMS=10000"). The default is 0, meaning a connection can remain unused indefinitely.

#### MaxPoolSize

> MaxPoolSize specifies that maximum number of connections allowed in the driver's connection pool to each
> server.Requests to a server will block if this maximum is reached. This can also be set through the "maxPoolSize" URI
> option (e.g. "maxPoolSize=100"). The default is 100. If this is 0, it will be set to math.MaxInt64.

#### MinPoolSize

> MinPoolSize specifies the minimum number of connections allowed in the driver's connection pool to each server. If
> this is non-zero, each server's pool will be maintained in the background to ensure that the size does not fall below
> the minimum. This can also be set through the "minPoolSize" URI option (e.g. "minPoolSize=100").

#### PoolMonitor

> PoolMonitor specifies a PoolMonitor to receive connection pool events. See the event.PoolMonitor documentation for
> more information about the structure of the monitor and events that can be received.

#### Monitor

> Monitor specifies a CommandMonitor to receive command events. See the event.CommandMonitor documentation for more
> information about the structure of the monitor and events that can be received.

#### ReadConcern

> ReadConcern specifies the read concern to use for read operations. A read concern level can also be set through the "
> readConcernLevel" URI option (e.g. "readConcernLevel=majority"). The default is nil, meaning the server will use its
> configured default.

#### ReadPreference

> ReadPreference specifies the read preference to use for read operations. This can also be set through the following
> URI options:
>
> 1. "readPreference" - Specifiy the read preference mode (e.g. "readPreference=primary").
> 2. "readPreferenceTags": Specify one or more read preference tags (e.g. "readPreferenceTags=region:south,datacenter:
     A").
> 3. "maxStalenessSeconds" (or "maxStaleness"): Specify a maximum replication lag for reads from secondaries in a
     replica set (e.g. "maxStalenessSeconds=10").
>
> The default is readpref.Primary(). See https://docs.mongodb.com/manual/core/read-preference/#read-preference for more
> information about read preferences.

#### Registry

> Registry specifies the BSON registry to use for BSON marshalling/unmarshalling operations. The default is
> bson.DefaultRegistry.

#### ReplicaSet

> ReplicaSet specifies the replica set name for the cluster. If specified, the cluster will be treated as a replica set
> and the driver will automatically discover all servers in the set, starting with the nodes specified through ApplyURI or
> SetHosts. All nodes in the replica set must have the same replica set name, or they will not be considered as part of
> the set by the Client. This can also be set through the "replicaSet" URI option (e.g. "replicaSet=replset"). The default
> is empty.

#### RetryWrites

> RetryWrites specifies whether supported write operations should be retried once on certain errors, such as network
> errors.
> Supported operations are InsertOne, UpdateOne, ReplaceOne, DeleteOne, FindOneAndDelete, FindOneAndReplace,
> FindOneAndDelete, InsertMany, and BulkWrite. Note that BulkWrite requests must not include UpdateManyModel or
> DeleteManyModel instances to be considered retryable. Unacknowledged writes will not be retried, even if this option is
> set to true.
> This option requires server version >= 3.6 and a replica set or sharded cluster and will be ignored for any other
> cluster type. This can also be set through the "retryWrites" URI option (e.g. "retryWrites=true"). The default is true.

#### RetryReads

> RetryReads specifies whether supported read operations should be retried once on certain errors, such as network
> errors.
> Supported operations are Find, FindOne, Aggregate without a $out stage, Distinct, CountDocuments,
> EstimatedDocumentCount, Watch (for Client, Database, and Collection), ListCollections, and ListDatabases. Note that
> operations run through RunCommand are not retried.
> This option requires server version >= 3.6 and driver version >= 1.1.0. The default is true.

#### ServerSelectionTimeout

> ServerSelectionTimeout specifies how long the driver will wait to find an available, suitable server to execute an
> operation. This can also be set through the "serverSelectionTimeoutMS" URI option (e.g. "
> serverSelectionTimeoutMS=30000"). The default value is 30 seconds.

#### SocketTimeout

> SocketTimeout specifies how long the driver will wait for a socket read or write to return before returning a network
> error. This can also be set through the "socketTimeoutMS" URI option (e.g. "socketTimeoutMS=1000"). The default value is
> 0, meaning no timeout is used and socket operations can block indefinitely.

#### TLSConfig

> TLSConfig specifies a tls.Config instance to use use to configure TLS on all connections created to the cluster.
> This can also be set through the following URI options:
>
> 1. "tls" (or "ssl"): Specify if TLS should be used (e.g. "tls=true").
> 2. Either "tlsCertificateKeyFile" (or "sslClientCertificateKeyFile") or a combination of "tlsCertificateFile" and "
     tlsPrivateKeyFile". The "tlsCertificateKeyFile" option specifies a path to the client certificate and private key,
     which must be concatenated into one file. The "tlsCertificateFile" and "tlsPrivateKey" combination specifies
     separate paths to the client certificate and private key, respectively. Note that if "tlsCertificateKeyFile" is
     used, the other two options must not be specified.
> 3. "tlsCertificateKeyFilePassword" (or "sslClientCertificateKeyPassword"): Specify the password to decrypt the client
     private key file (e.g. "tlsCertificateKeyFilePassword=password").
> 4. "tlsCaFile" (or "sslCertificateAuthorityFile"): Specify the path to a single or bundle of certificate authorities
     to be considered trusted when making a TLS connection (e.g. "tlsCaFile=/path/to/caFile").
> 5. "tlsInsecure" (or "sslInsecure"): Specifies whether or not certificates and hostnames received from the server
     should be validated. If true (e.g. "tlsInsecure=true"), the TLS library will accept any certificate presented by
     the server and any host name in that certificate. Note that setting this to true makes TLS susceptible to
     man-in-the-middle attacks and should only be done for testing.
     >    The default is nil, meaning no TLS will be enabled.

#### WriteConcern

> WriteConcern specifies the write concern to use to for write operations. This can also be set through the following
> URI options:
>
> 1. "w": Specify the number of nodes in the cluster that must acknowledge write operations before the operation returns
     or "majority" to specify that a majority of the nodes must acknowledge writes. This can either be an integer (
     e.g. "w=10") or the string "majority" (e.g. "w=majority").
> 2. "wTimeoutMS": Specify how long write operations should wait for the correct number of nodes to acknowledge the
     operation (e.g. "wTimeoutMS=1000").
> 3. "journal": Specifies whether or not write operations should be written to an on-disk journal on the server before
     returning (e.g. "journal=true").
     >    The default is nil, meaning the server will use its configured default.

#### ZlibLevel

> specifies the level for the zlib compressor. This option is ignored if zlib is not specified as a compressor through
> ApplyURI or SetCompressors. Supported values are -1 through 9, inclusive. -1 tells the zlib library to use its default,
> 0 means no compression, 1 means best speed, and 9 means best compression.
> This can also be set through the "zlibCompressionLevel" URI option (e.g. "zlibCompressionLevel=-1"). Defaults to -1.

#### ZstdLevel

> ZstdLevel sets the level for the zstd compressor. This option is ignored if zstd is not specified as a compressor
> through ApplyURI or SetCompressors. Supported values are 1 through 20, inclusive. 1 means best speed and 20 means best
> compression. This can also be set through the "zstdCompressionLevel" URI option. Defaults to 6.

#### AutoEncryptionOptions

> AutoEncryptionOptions specifies an AutoEncryptionOptions instance to automatically encrypt and decrypt commands and
> their results. See the options.AutoEncryptionOptions documentation for more information about the supported options.

#### DisableOCSPEndpointCheck

> DisableOCSPEndpointCheck specifies whether or not the driver should reach out to OCSP responders to verify the
> certificate status for certificates presented by the server that contain a list of OCSP responders.
> If set to true, the driver will verify the status of the certificate using a response stapled by the server, if there
> // is one, but will not send an HTTP request to any responders if there is no staple. In this case, the driver will
> continue the connection even though the certificate status is not known.
> This can also be set through the tlsDisableOCSPEndpointCheck URI option. Both this URI option and tlsInsecure must not
> be set at the same time and will error if they are. The default value is false.

## 常用命令

### Ubuntu 使用 Systemctl 命令强制密码验证登录

```shell
vim /lib/systemd/system/mongod.service

systemctl daemon-reload
systemctl restart mongod
```

### 预定义角色

- **数据库用户角色（所有数据库都有）**

  - read 用户可以读取当前数据库的数据
  - readWrite 用户可以读写当前数据库的数据

- **数据库管理角色（所有数据库都有）**
  - dbAdmin 管理员用户但不能对用户和角色管理授权
  - dbOwner 数据库所有者可进行任何管理任务
  - userAdmin 可以管理当前数据的用户和角色
- **集群管理角色（admin 数据库可用）**
  - clusterAdmin 集群所有管理权限，是 clusterManager、clusterMonitor、hostManager 合集
  - clusterManager 集群管理和监控
  - clusterMonitor 集群监控，只读的
  - hostManager 监控和管理服务器
- **备份和恢复角色（admin 数据库可用）**
  - backup
  - restore
- **所有数据库角色（admin 数据库可用）**
  - readAnyDatabase 读取所有数据库
  - readWriteAnyDatabase 读写所有数据库
  - userAdminAnyDatabase 所有数据库的 userAdmin 权限
  - dbAdminAnyDatabase 所有数据库的 dbAdmin 权限
- **超级角色（admin 数据库可用）**
  - root 超级用户
- **内部角色**
  - \_\_system 所有操作权限

更多预定义角色信息见文档 [https://docs.mongodb.com/manual/core/security-built-in-roles/](https://docs.mongodb.com/manual/core/security-built-in-roles/)

## 索引

[索引](https://blog.csdn.net/weixin_33446857/article/details/83085018)

https://www.cnblogs.com/duhuo/articles/4762933.html

https://zhuanlan.zhihu.com/p/102895029

https://blog.csdn.net/u013066244/article/details/78961602

https://www.cnblogs.com/c-abc/p/6023824.html

https://blog.csdn.net/chigua1760/article/details/100642249

## Bulk

[Bulk](https://docs.mongodb.com/manual/core/bulk-write-operations/)

## mongodb 执行 dropDatabase 报错"not authorized on xxx to execute command { dropDatabase：1.0，$db:"xxx"}"解决办法

https://www.jianshu.com/u/8eb1d4237939

2020.11.02 11:38:40 字数 44 阅读 40

此错误是因为没有授权给 admin 用户对 system 数据库执行命令的权限，解决方法如下:

db.grantRolesToUser ( "root", [ { role: "__system", db: "admin" } ] )

## mongodb shell script

```
var needToUpdate = []
var needToDelete = []
db.getCollection('ec.storeMemberHistory').aggregate([
    {
        "$match": { "accountId" : ObjectId("5964866695ee5651741a91a2")}
    },
    {
        "$lookup": { "from" : "member", "localField": "memberId", "foreignField": "_id", "as": "member"}
    },
    {
        "$match": {"$or":[{"member.isDeleted":true},{"member":{"$size":0}}]}
    }
]).forEach(function(history){
    var hasMergeHistory = false;
    db.getCollection('memberMergeHistory').aggregate([
        {
            "$match": { "accountId" : ObjectId("5964866695ee5651741a91a2"),"mergedMemberIds" : {"$in":[history.memberId]} }
        },
    ]).forEach(function(mergeHistory){
        hasMergeHistory = true;
        db.getCollection('ec.storeMemberHistory').find({
                "accountId" : ObjectId("5964866695ee5651741a91a2"),
                "memberId": history.memberId
        }).forEach(function(doc){
             db.getCollection('ec.storeMemberHistory').update({_id:doc._id},{"$set": { "memberId" : mergeHistory.mainMemberId}})
        })
    })
    if (hasMergeHistory){
        needToUpdate.push(history.memberId);
    } else{
        needToDelete.push(history.memberId);
    }
})
needToDelete.forEach(function(memberId){
    db.getCollection('ec.storeMemberHistory').remove({
        "accountId" : ObjectId("5964866695ee5651741a91a2"),
        "memberId" : memberId
    })
})
print("need update count:" + needToUpdate.length)
print("need delete count:" + needToDelete.length)
```

```
var needToUpdate = []
var needToDelete = []
db.getCollection('ec.storeMember').aggregate([
    {
        "$match": { "accountId" : ObjectId("5964866695ee5651741a91a2"), "isDeleted": false }
    },
    {
        "$lookup": { "from" : "member", "localField": "memberId", "foreignField": "_id", "as": "member"}
    },
    {
        "$match": {"$or":[{"member.isDeleted":true},{"member":{"$size":0}}]}
    }
]).forEach(function(storeMember){
    var hasMergeHistory = false;
    db.getCollection('memberMergeHistory').aggregate([
        {
            "$match": { "accountId" : ObjectId("5964866695ee5651741a91a2"),"mergedMemberIds" : {"$in":[storeMember.memberId]} }
        },
    ]).forEach(function(mergeHistory){
        hasMergeHistory = true;
        db.getCollection('ec.storeMember').find({
                "accountId" : ObjectId("5964866695ee5651741a91a2"),
                "memberId": storeMember.memberId,
                "isDeleted": false
        }).forEach(function(doc){
             db.getCollection('ec.storeMember').update({_id:doc._id},{"$set": { "memberId" : mergeHistory.mainMemberId}})
        })
    })
    if (hasMergeHistory){
        needToUpdate.push(storeMember.memberId);
    } else{
        needToDelete.push(storeMember.memberId);
    }
})
needToDelete.forEach(function(memberId){
    db.getCollection('ec.storeMember').update({
        "accountId" : ObjectId("5964866695ee5651741a91a2"),
        "memberId" : memberId
    },{"$set": { "isDeleted" : true}})
})

print("update count:" + needToUpdate.length)
print("delete count:" + needToDelete.length)
```

```
db.getCollection('ec.storeMemberHistory').aggregate([
    { "$match": { "accountId": ObjectId('5e7872a773ee1200fb1bec32'), "relation": "bound" } },
    { "$sort": { "createdAt": -1 } },
    { "$group": {
        "_id": { "storeId": "$storeId", "staffId": "$staffId", "memberId": "$memberId" },
        "createdAt": { "$first": "$createdAt" },
      },
    },
  ]).forEach(function (history) {
    db.getCollection('ec.storeMember').update(
      {
        "accountId": ObjectId('5e7872a773ee1200fb1bec32'),
        "memberId": history._id.memberId,
        "isDeleted": false,
        "stores": { "$elemMatch": { "staffId": history._id.staffId, "storeId": history._id.storeId } },
      },
      { "$set": { "stores.$.boundAt": history.createdAt } }
    );
  });
```

```
db.getCollection('ec.storeMember').aggregate([
    {"$match":{"accountId": ObjectId("5e7872a773ee1200fb1bec32")}},
    {
        "$redact":{
            "$cond":{
                "if":{
                    "$or":[
                        "$stores",
                        {
                            "$and":[
                                {"$in":["$relation",["touched","served"]]},
                                {"$lt":["$updatedAt",ISODate("2021-05-20T08:26:26.773Z")]},
                                {"$gt":["$updatedAt",ISODate("2021-04-20T08:26:26.773Z")]}
                            ]
                        }
                    ]
                },
                "then":"$$DESCEND",
                "else":"$$PRUNE",
            }
        }
    },
    {"$match":{"stores":{"$ne":[]}}}
])
```

/exportMongodbData --collection=ec.storeMember --pretty --query='{ "accountId" : {"$oid":"601b460bc2d05c5b770b04e8"}, "
isDeleted": false ,"createdAt" : {"$gt":{"$date":"2021-01-01T01:09:28.810Z"}}}' --type=json portal-tenants-tongrentang

## 副本集

### 特点

- 主节点唯一：主节点唯一，但是不固定（不确定的原因是：主节点挂了的话，会重新选举出一个主节点）
- 大多数原则：大多数原则，即1/2原则，一个复制集集群中，如果有大于等于1/2的节点不可用的话，那么整个进群将不可写，只可读
- 从库无法写入
- 副本集可以自动进行容灾

### 搭建

#### 前置

- 系统 Ubuntu Server 18.04
- 版本 mongodb 4.2.15
- 角色分配

  | xxx | xxx | xxx|
  | :-: | :-: | :-: |
  | Primary   | \<host1>:27017 | 主节点 负责读写                                              |
  | Secondary | \<host2>:27017 | 从节点,负责容灾,主节点挂掉,则从节点成为主节点|
  | Arbiter   | \<host1>:27017 | 投票节点,不负责数据的存储读写,存在的意义是,遵循下mongo复制集的1/2原则 |

#### 安装

配置

```text
storage:
  dbPath: /var/lib/mongodb #mongo 数据目录
  journal:
    enabled: true
systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log #日志目录
net:
  port: 27017
  bindIp: 0.0.0.0
processManagement:
  timeZoneInfo: /usr/share/zoneinfo
security:
  keyFile: /var/lib/mongodb/auth.key
  authorization: enabled
replication:
  replSetName: rs0
```

dockerfile

```
FROM mongo:4.2.17-bionic

COPY config/auth.key /app/auth.key
RUN chown -R mongodb:mongodb /app/auth.key
RUN chmod 600 /app/auth.key #必须设置秘钥文件权限
```

docker-compose.yml

```
version: '3'
services:
  alomerry-mongodb-rs1:
    image: mongo-replset-4.2.17-bionic
    volumes:
      - /home/ubuntu/document/mongodb/db/rs1:/var/lib/mongodb:rw
      - /home/ubuntu/document/mongodb/log/rs1:/var/log/mongodb:rw
      - /home/ubuntu/document/mongodb/config:/var/lib/mongodb/config:ro
    command: --keyFile /app/auth.key --replSet rs0 --dbpath /var/lib/mongodb
    ports:
      - 27018:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: alomerry
      MONGO_INITDB_ROOT_PASSWORD: WjC120211
    logging:
      driver: json-file
      options:
        max-file: '2'
        max-size: 100m
  alomerry-mongodb-rs2:
    image: mongo-replset-4.2.17-bionic
    volumes:
      - /home/ubuntu/document/mongodb/db/rs2:/var/lib/mongodb:rw
      - /home/ubuntu/document/mongodb/log/rs1:/var/log/mongodb:rw
      - /home/ubuntu/document/mongodb/config:/var/lib/mongodb/config:ro
    command: --keyFile /app/auth.key --replSet rs0 --dbpath /var/lib/mongodb --auth
    ports:
      - 27019:27017
    environment:
      MONGO_INITDB_ROOT_USERNAME: alomerry
      MONGO_INITDB_ROOT_PASSWORD: WjC120211
    logging:
      driver: json-file
      options:
        max-file: '2'
        max-size: 100m
```

### 添加
