---
layout: post
title: Linux挂载硬盘
description: 为树莓派挂载USB硬盘，因为小派里现在跑的是Raspbian，所以也适用于其他的Linux发行版。
category: note
---

# [{{ page.title }}][1]
2017-03-19 By {{ site.author_info }}

## 挂载方法

### 1. 查看硬盘是否被识别

使用下面的命令，查看是否将硬盘或U盘识别出来，例如相比原来，多出来/dev/sda或/dev/sdb等。

```
$sudo fdisk -l
```

### 2. 进行分区

使用`fisk`命令或`parted`对新硬盘进行分区。
执行后的分区将为`/dev/sdb1`、`/dev/sdb2`等。

```
$sudo fdisk /dev/sdb
```

### 3. 格式化分区

将分区格式化为你喜欢的类型，每个分区都可以设置成不同的类型，例如ext4、ext3、ntfs等等。

```
$sudo mkfs -t ext4 /dev/sdb1
$sudo mkfs -t ext3 /dev/sdb2
```

### 4. 挂载到指定目录下

将分区挂载到你喜欢的目录下，便可以使用啦：

```
$sudo mkdir /media/diskb1
$sudo mount /dev/sdb1 /media/diskb1
$df -h  # 使用df命令查看是否挂载成功
```

### 5. 设置开机自动挂载

修改`/etc/fstab`，新增一条，设置我们的分区在开机里自动挂载。

## 没有权限

如果挂载后，必须使用root权限才能写入数据，则可以使用`sudo chown 用户名:用户组
-R 挂载点`，来修改权限。

[XiaoGuo]: http://guozs.com "XiaoGuo"
[1]: {{ page.url }} ({{ page.title }})
