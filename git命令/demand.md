# git相关  

## git与svn的区别
· svn是集中式版本控制，所有版本存储在svn服务器中
· 必须要联网到svn服务器才可以进行版本的回退、更新等操作
· git是分布式版本控制，每个电脑都有完整的版本号和日志信息
· 没有网络的时候，git可以把代码提交到本地，等有网的时候提交到远程git仓库，就算哪天git服务器坏了也没事，本地仓库保存了完整的版本。
## 如何建立自己的本地仓库，并将代码同步到github等上
·首先，在github上创建新仓库
·可使用git clone直接拉下远程代码或本地使用git init创建新仓库
·git remote add 远程仓库地址-关联远程仓库
·git push -u origin master-将本地仓库同步到远程  

## 常用命令注解
· git remote add origin address
· git remote rm origin
· git remote -v 查看origin的配置

## 解决git问题的终极方法就是用报错去百度，再去分析解决办法与实际问题的相关性