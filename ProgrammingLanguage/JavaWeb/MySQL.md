# MySQL

## 数据库

1.数据库（DataBase）简称DB

2.数据库概念

- 用于存储和管理数据的仓库

3.数据库的特点

- 1.持久化存储数据的，其实数据库就是一个文件系统
- 2.方便存储和管理数据
- 3.使用统一的方式操作数据库------SQL

## MySQL数据目录

- 几个概念
  - 数据库：文件夹
  - 表：文件
  - 数据：数据



# SQL

## SQL概念

Structred Query Language：结构化查询语言

其实就是定义了操作所有关系型数据库的规则

每一种数据库操作的方式存在不一样的地方，称为“方言”

## SQL通用语法

1.SQL语句可以单行或者多行进行书写，以分号结尾。

2.可以使用空格和缩进来增加语句的可读性

3.Mysql数据库的SQL语句不区分大小写，关键字建议使用大写

4.3种注释

​	单行注释：--注释内容 或 # 注释内容（mysql 特有） 

​	多行注释：/* 注释 */

## SQL分类

- DDL（Data Definition Language）数据定义语言
  - 用来定义数据库对象：数据库，表，列等。关键字：create，drop，alter等
- DML（Data Manipulation Language）数据操作语言
  - 用来对数据库中表的数据进行增删改。关键字：insert，detele，update等
- DQL（Data Query Language）数据查询语言
  - 用来查询数据库中表的记录（数据）。关键字：select，where等
- DCL（Data Control Language）数据控制语言
  - 用来定义数据库的访问权限和安全级别，及创建用户。关键字：GRANT，REVOKE等

# DDL：操作数据库、表

## 操作数据库：CRUD

1.C（Create）：创建

- 创建数据库
  - create database 数据库名称
- 创建数据库，判断是否存在
  - create database if not exists 数据库名称；
- 创建数据库，并且指定字符集
  - create database 数据库名称 character set 字符集名；

- 综合：创建db4数据库，判断是否存在，并判断字符集为gbk
  - create database if not exists db4 character set gbk；

2.R（Retrieve）：查询

- 查询所有数据库名称：
  - show databases；
- 查询某个数据库的字符集：查看某个数据库的创建语句
  - show create database 数据库名字；

3.U（Update）：修改

- 修改数据库的字符集
  - alter database 数据库名称 character set 字符集名称

4.D（Detele）：删除

- 删除数据库
  - drop database 数据库名称；
- 判断数据库是否存在，存在再删除
  - drop database if exists 数据库名称；

5.使用数据库

- 查询当前正在使用的数据库名称
  - select database（）；
- 使用数据库
  - use 数据库名称；

s