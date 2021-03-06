---
layout: Post
title: Docker Note
subtitle:
author: Alomerry Wu
date: 2022-04-26
useHeaderImage: true
catalog: true
headerMask: rgba(40, 57, 101, .5)
headerImage: https://cdn.alomerry.com/blog/img/in-post/header-image?max=59
tags:

- Y2022
- Docker
- U2022

---

## TODO

https://vuepress.mirror.docker-practice.com/

practice https://github.com/yeasy/docker_practice

https://blog.csdn.net/mar_ljh/article/details/109011822

build https://yeasy.gitbook.io/docker_practice/image/build

https://yeasy.gitbook.io/docker_practice/

docker -t build alomerry/xxx  .
docker login
docker push


https://yeasy.gitbook.io/docker_practice/image/multistage-builds/laravel

## Docker

### [Install](https://docs.docker.com/engine/install/ubuntu/)

- `sudo apt-get remove docker docker-engine docker.io containerd runc`
- `sudo apt-get update`
- `sudo apt-get install ca-certificates curl gnupg lsb-release`
- `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`
- `echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`
- `sudo apt-get update`
- `sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin`
- `sudo docker run hello-world`

- [设置阿里云镜像加速服务]((https://help.aliyun.com/document_detail/60750.html))

## Docker Compose

## Install

https://docs.docker.com/compose/install/

## Docker Remote / Docker Context

- https://medium.com/@ssmak/how-to-enable-docker-remote-api-on-docker-host-7b73bd3278c6#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImZjYmQ3ZjQ4MWE4MjVkMTEzZTBkMDNkZDk0ZTYwYjY5ZmYxNjY1YTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NTIxMDg0NzEsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMTMyMDE5MjA0ODQ2NTAxMjE3NSIsImVtYWlsIjoibW9yaXp1bnpodUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMjE2Mjk2MDM1ODM0LWsxazZxZTA2MHMydHAyYTJqYW00bGpkY21zMDBzdHRnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6Iua4heasoiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaWR5Zlg5bk1TQ21nVDlDVUlnVFU1TVU4U0l2N1ZoTVJmbmx6ZFE9czk2LWMiLCJnaXZlbl9uYW1lIjoi5qyiIiwiZmFtaWx5X25hbWUiOiLmuIUiLCJpYXQiOjE2NTIxMDg3NzEsImV4cCI6MTY1MjExMjM3MSwianRpIjoiYzllMGJiZmUwODcyNmRmZmU4N2QzYmQxOTM1MjJjZDU5Njg1ZTY0NiJ9.BJRDLMedLlM5Lw4723iiyYUf_ytHHoaDktIC53v4dmFSYmqnqSWQaLT1YrB3z8qKury5-FfyRZLqPQ000ynOIu_rD0FkQepIj0wO0sIMHpdCzkRnOZRRuBkcggv0RKhTvRUn00m5-hobPpEHXFEPpAS3DfXbkmcOu6SjUIm7LqcfX0_8O-MrZYdjis4JCUGXP7jFrdUyhpEqaNIV8oXGZX1Zjy5r4t3JXLVem0TnZVcsJIpEOF7nLF9U8UzEZ72DuSK6RKFMwRbXDoQqEpSlXeE0r8X5ZFVGlUjD6vql_u2rX95Oj8mxCjHSTkFE9mng5_tUpzgSP1md2FK4ff9WbQ
- https://blog.csdn.net/u013670453/article/details/115971259
- https://www.docker.com/blog/how-to-deploy-on-remote-docker-hosts-with-docker-compose/

## 常用

### docker 避免一直 sudo

- `sudo groupadd docker`创建 组
- `sudo gpasswd -a ${USER} docker`将用户添加到该 组，例如 xxx 用户
- `sudo systemctl restart docker`重启 docker-daemon
  newgrp docker

### 拷贝容器文件到宿主机

`docker cp <containerId>:<fileName> <hostPath>`

## Reference

- [[^aliyun-docker-register]]