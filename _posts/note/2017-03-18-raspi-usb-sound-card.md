---
layout: post
title: 树莓派设置默认声卡
description: 将树莓派的默认输出声卡切换至USB声卡。
category: note
---

# [{{ page.title }}][1]
2017-03-18 By {{ site.author_info }}

## 问题

树莓派的3.5mm声音输出窗口，在连接到音箱后，有较小的杂音。虽然不太影响播放，但沙沙的还是有点不舒服。

使用kodi的时候，可以使用在设置中选择默认的声卡。但使用omxplayer播放视频，却只有local和hdmi这两种选择。

所以我们要把小派的默认声音输出，设置为USB声卡。

## 解决方案

### 1. 首先，确定USB声卡的序列号：

```
$ aplay -l
```

将得到如下的输出：

```
**** List of PLAYBACK Hardware Devices ****
card 0: ALSA [bcm2835 ALSA], device 0: bcm2835 ALSA [bcm2835 ALSA]
  Subdevices: 8/8
  Subdevice #0: subdevice #0
  Subdevice #1: subdevice #1
  Subdevice #2: subdevice #2
  Subdevice #3: subdevice #3
  Subdevice #4: subdevice #4
  Subdevice #5: subdevice #5
  Subdevice #6: subdevice #6
  Subdevice #7: subdevice #7
card 0: ALSA [bcm2835 ALSA], device 1: bcm2835 ALSA [bcm2835 IEC958/HDMI]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: Set [C-Media USB Headphone Set], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```
带有`card 1: ... USB Audio ...`字样的，即是USB声卡，记住这个序号“1”。

### 2. 修改Alsa配置文件中的声卡序号

提升权限打开Alsa配置文件`alsa.conf`，修改声卡的序号：

```
$sudo nano /usr/share/alsa/alsa.conf

#defaults.ctl.card 0
#defaults.pcm.card 0
defaults.ctl.card 1
defaults.pcm.card 1
```

### 3. 重启系统生效

重新启动系统，测试通过USB声卡能否听到声音：

```
speaker-test -c2 -twav
```

在终端下调节音量可使用：

```
$alsamixer
```

## 未解决方案

参考网上的解决方案，我并没有找到`/etc/modprobe.d/alsa-base.conf`这个文件。

参考网上的解决方案，我并没有找到`~/.asoundrc`这个文件。

参考网上的解决方案，修改`/lib/modprobe.d/aliases.conf`这个文件后，重启小派，找不到声卡。


[XiaoGuo]: http://guozs.com "XiaoGuo"
[1]: {{ page.url }} ({{ page.title }})
