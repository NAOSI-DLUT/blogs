# NAOSI Blogroll

收集大工人们的博客友链！

## 如何添加

1. Fork 本仓库
2. 在 `src/content/blogroll` 目录下新建一个 Markdown 文件，文件名为你的博客名字（使用 kebab-case，就像 `my-blog.md` 一样），内容如下：

   ```markdown
   ---
   title: 博客名字
   link: https://your.blog.link
   description: 博客描述
   rss: https://your.blog.link/feed.xml # 可选
   avatar: https://your.blog.link/avatar.jpg # 可选
   ---

   想要展示的额外信息，比如博客的一些特色、你的一些话，等等。支持 Markdown 语法。
   ```

   > [!IMPORTANT]
   > 如果不想提供 RSS 或头像链接，请删除对应字段，而不是留空。否则会导致类型检查不通过！

3. 提交 PR，等待并入仓库ヾ(≧▽≦\\\*)o

> [!TIP]
> 不会的话也可以直接提 Issue，并附带以上信息，我会帮你添加的！

## 推荐参阅

- [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)
- [十年之约](https://www.foreverblog.cn/)
