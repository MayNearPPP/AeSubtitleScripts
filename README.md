# AeSubtitleRelatedScripts

[![Build Status](https://travis-ci.org/dwyl/esta.svg?branch=master)](https://travis-ci.org/dwyl/esta)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

简单的 Ae 效果字幕脚本，主要针对 Vtuber 搬运组的字幕效果制作工作。

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

1. **【歌ってみた】とても素敵な六月でした / Covered by 花鋏キョウ**

   > 效果预览：https://www.bilibili.com/video/BV1Mz411v7J7

## 相关仓库

- [TypeScript types for Adobe Products](https://github.com/pravdomil/Types-for-Adobe) — 配置开发环境所需文件

## 维护者

[@MayNearPPP](https://github.com/MayNearPPP)

## 致谢

## 使用许可

[MIT](LICENSE) © Richard Littauer

## 0. ImportText

导入歌词，创建文字层。
目前仅支持 TXT 文件的导入，可以选择逐行导入或隔行导入（从第二行开始，2468 行导入）。

## 1.【歌ってみた】とても素敵な六月でした / Covered by 花鋏キョウ

> URL：https://www.bilibili.com/video/BV1Mz411v7J7

## Thanks

### Types-for-Adobe from pravdomil

> URL:https://github.com/pravdomil/Types-for-Adobe

### 【转行从这里开始】从 0 开始的 AE 脚本制作方法 from Maiiiiiid

> URL:https://www.bilibili.com/video/BV1f7411k7A6

## 背景

`标准 Readme` 最开始因为 [@maxogden](https://github.com/maxogden) 在项目 [feross/standard](https://github.com/feross/standard) 的[这个 Issue](https://github.com/feross/standard/issues/141) 中提出，是否标准化 README 会有助于帮助大家。很多人在仓库 [zcei's standard-readme](https://github.com/zcei/standard-readme/issues/1) 就这个想法进行了讨论。在我维护仓库 [IPFS](https://github.com/ipfs) 的时候，我需要在这个组织中推广标准化的 Readme，因此这个项目也就从这开始了。

> 如果你的文档是完整的，那么使用你代码的人就不用再去看代码了。这非常的重要。它使得你可以分离接口文档与具体实现。它意味着你可修改实现的代码而保持接口与文档不变。

> 请记住：是文档而非代码，定义了一个模块的功能。

—— [Ken Williams, Perl Hackers](http://mathforum.org/ken/perl_modules.html#document)

写 README 从某种程度上来说相当不易，一直维护下去更是难能可贵。如果可以减少这个过程，则可以让写代码与修改代码更容易，使得是否在说明中指明一处需改有无必要更加清楚，你可以花费更少的时间来考虑是否你最初的文档是否需要更新，你可以分配更多的时间来写代码而非维护文档。

同时，标准化在某些别的地方也有好处。有了标准化，用户就可以花费更少的时间来搜索他们需要的信息，他们同时可以做一个工具来从描述中搜集信息，自动跑示例代码，检查授权协议等等。

这个仓库的目标是：

1. 一个定义良好的**规范**。在仓库中的位置是 [spec.md](spec.md)。它是一个一直在持续优化的文档，欢迎您提 Issue 讨论其中的变化。
2. 一个**示例 README**。这个 Readme 完全遵从 Standard-readme，而且在 `example-readmes` 文件夹里有更多的示例。
3. 一个**语法提示器**用来提示在 Readme 中的语法错误。请参考 [tracking issue](https://github.com/RichardLitt/standard-readme/issues/5)。
4. 一个**生成器**用来快速搭建新的 README 的框架。请参考 [generator-standard-readme](https://github.com/RichardLitt/generator-standard-readme)。
5. 一个**标识准守规范的徽章**。请参考[徽章](#徽章)。

## 安装

这个项目使用 [node](http://nodejs.org) 和 [npm](https://npmjs.com)。请确保你本地安装了它们。

```sh
$ npm install --global standard-readme-spec
```

## 使用说明

这只是一个文档包，你可以打印出 [spec.md](spec.md) 到输出窗口。

```sh
$ standard-readme-spec
# Prints out the standard-readme spec
```

### 生成器

想要使用生成器的话，请看 [generator-standard-readme](https://github.com/RichardLitt/generator-standard-readme)。
有一个全局的可执行文件来运行包里的生成器，生成器的别名叫 `standard-readme`。

## 徽章

如果你的项目遵循 Standard-Readme 而且项目位于 Github 上，非常希望你能把这个徽章加入你的项目。它可以更多的人访问到这个项目，而且采纳 Stand-README。 加入徽章**并非强制的**。

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

为了加入徽章到 Markdown 文本里面，可以使用以下代码：

```
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
```

## 示例

想了解我们建议的规范是如何被应用的，请参考 [example-readmes](example-readmes/)。

## 相关仓库

- [Art of Readme](https://github.com/noffle/art-of-readme) — 💌 写高质量 README 的艺术。
- [open-source-template](https://github.com/davidbgk/open-source-template/) — 一个鼓励参与开源的 README 模板。

## 维护者

[@RichardLitt](https://github.com/RichardLitt)。

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/RichardLitt/standard-readme/issues/new) 或者提交一个 Pull Request。

标准 Readme 遵循 [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/) 行为规范。

### 贡献者

感谢以下参与项目的人：
<a href="graphs/contributors"><img src="https://opencollective.com/standard-readme/contributors.svg?width=890&button=false" /></a>

## 使用许可

[MIT](LICENSE) © Richard Littauer
