---
layout: post
title: 初识树莓派
description: 树莓派，是一款基于Linux的单片机计算机。
category: note
---

# [{{ page.title }}][1]
2017-03-18 By {{ site.author_info }}

## 树莓派简介

树莓派（Raspberry Pi），是一款基于Linux的单片机计算机，由英国的树莓派基金会开发，目的是以低价的硬件和自由软件促进学校的基本计算机科学教育。

树莓派只有银行卡大小，还没有一个巴掌大啊。但麻雀虽小，五脏俱全啊！就像一台普通的台式机一样，CPU，GPU，内存，以太网，Wi-Fi，蓝牙，USB……等等，比一般的台式机还多了个人Wi-Fi啊。（当然我说的是树莓派3B）。相信树莓派的参数指标大家网上一查便搜到了。

更重要的是它的功耗只有4W，7x24小时开机一个春秋，也花不了几度电啊！

目前我已用树莓派实现了如下一些基本功能：

* 视频机顶盒

这也是当初说服老婆给我买树莓派做生日礼物的原因：以后咱家多了个视频机顶盒。经测试，在线播放搜狐视频超清720P很是流畅！（优酷暂时播放不了，好在可以把视频下载下来看）。

* 远程操作

白天在公司的时候，可以远程家里的小派进行一些下载任务。（白天家里的网速超级快）

* 视频下载器

使用you-get可以下载各大视频网站的视频。

* 百度盘

使用bypy可以进行百度网盘同步。

* 远程迅雷

迅雷下载。这个用的少。

* 私有云同步

使用Resilio Sync搭建了一个同步服务器。不需要公网IP，即可与公司电脑、手机进行文件同步。私密的文件不用担心在某云上被和谐了。

## 树莓派的操作系统

请参考官方网站<https://www.raspberrypi.org/>。

我是直接下载的Raspbian Jessie Lite。然后根据文档，写入到SD卡中的。

## 开机前的准备-远程登录

如果你的小派没有连接显示器和键鼠（像我一样），那你一定要考虑一下远程登录的问题了。

在Jessie中，默认是没能ssh登录的。需要在SD卡中新建一个名字为`ssh`的文件，空文件即可。开机后，你可以在`/boot`中找到它。

Raspbian默认是通过DHCP获取动态IP的，如果你无法知道它的动态IP地址，可以修改SD卡根目录的`cmdline.txt`，在最前面加上`ip=xxx.xxx.xxx.xxx`，为它分配一个静态的IP。

## 首次运行的一些推荐工作

### 扩展空间

使用命令：

```
$sudo raspi-config
```

即可进入小派的配置界面，扩展使用整个SD卡空间请选择"Advanced Options" ->
"Expand Filesystem"。


### 切换国内源

小派默认使用官方远，服务器在国外，速度可能有点儿慢。可以修改为国内源。

通过树莓派官方提供个镜像列表：<http://www.raspbian.org/RaspbianMirrors>，选择你喜欢的源。
也可以直接在此页面搜索“China”找到中国的源。

```
$sudo cp /etc/apt/sources.list /etc/apt/sources.list.ori
$sudo nano /etc/apt/sources.list
```

### 连接Wi-Fi

默认情况下，直接修改`/etc/wpa_supplicant/wpa_supplicant.conf`配置文件即可。
在文件的最下方添加Wi-Fi的相关信息，例如：

```
network={
  ssid="my wifi ssid"
  psk="wifi password"
}
```

可以添加多条Wi-Fi的相关信息。

[XiaoGuo]: http://guozs.com "XiaoGuo"
[1]: {{ page.url }} ({{ page.title }})
