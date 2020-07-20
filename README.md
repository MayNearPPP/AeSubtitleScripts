# AeSubtitleRelatedScripts

[![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)](https://travis-ci.org/dwyl/esta)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

简单的 Ae 字幕效果脚本，主要针对 Vtuber 搬运组的字幕效果制作工作。

## 目录

- [背景](#背景)
- [安装](#安装)
- [项目介绍](#项目介绍)
- [相关仓库](#相关仓库)
- [维护者](#维护者)
- [致谢](#致谢)
- [使用许可](#使用许可)

## 背景

生活所迫，被迫写代码 XD。  
脚本灵感来源基本取自各 Vtuber 视频，其中大部分为[花鋏キョウ](https://zh.moegirl.org/zh-hant/%E8%8A%B1%E9%93%97%E9%95%9C)的视频。（\单推/\单推/\单推/）  
[`Twitter`](https://twitter.com/Kyo_Hanabasami)[`Youtube`](https://www.youtube.com/channel/UC4OeUf_KfYRrwksschtRYow)[`Bilibili`](https://space.bilibili.com/482515504)

## 安装

已经完成的插件均在[finishedJSX](./finishedJSX)中。只需下载对应\*.jsx 文件，并将其放入下述文件夹即可。

```
.../Adobe After Effect CC XXXX/Scripts/ScriptUI Panels
```

## 项目介绍

0. **效率工具**

   - ImportText  
      从 Ae 外部导入 TXT 文件，并根据 TXT 内容创建文本层。  
      可以选择`逐行导入`或`隔行导入`。  
      | 类型 | 解释 |
     |:------------:|:---------------|
     | 逐行导入 | 根据 TXT 文件中的每一行创建文字层。 |
     | 隔行导入 | 从 TXT 文件的第二行开始，隔行创建文字层，适用于一行原文一行翻译的情况。 |

     目前仅支持 TXT 文件导入。

   - SplitText  
     切分文字层，并将分割后的文字层绑定在一个空物体上。  
     效果已经初步达成，不过仍有些许 Bug。比如中文会有小幅度的偏移，以及部分字体的 j 会不准确。

1. **【歌ってみた】とても素敵な六月でした / Covered by 花鋏キョウ**

   > 效果预览：https://www.bilibili.com/video/BV1Mz411v7J7

   暂时没有 UI 界面。（懒）  
   使用前需先将文字层拆分为单字图层。（后续大概会改进 大概）

## 相关仓库

- [TypeScript types for Adobe Products](https://github.com/pravdomil/Types-for-Adobe) — 配置开发环境所需文件

## 维护者

[@MayNearPPP](https://github.com/MayNearPPP)[`Bilibili`](https://space.bilibili.com/1907810)

## 致谢

**【转行从这里开始】从 0 开始的 AE 脚本制作方法 from Maiiiiiid**

> URL:https://www.bilibili.com/video/BV1f7411k7A6

## 使用许可

[MIT](LICENSE) © Richard Littauer
