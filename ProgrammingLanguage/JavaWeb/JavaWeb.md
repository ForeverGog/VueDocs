# Junit单元测试

## 测试分类

1.黑盒测试：不需要写代码，给输入值，看程序是否能够输出期望的值

2.白盒测试：需要写代码，关注程序的具体执行流程。

## Junit使用

Junit使用：白盒测试

步骤：

1.定义一个测试类（测试用例）建议 被测试的类名＋一个Test

2.定义测试方法 可以独立运行 建议 被测试的方法名+一个Test，返回值建议void，参数列表建议空参

3.给方法加一个@test

4.导入junit依赖环境

- 判定结果：
  - 红色：失败
  - 绿色：成功
  - 一般用断言来处理操作
    - Asset.assertEquals（期望的结果，运算的结果）

## @Before / @After

- @Before：
  - 修饰的方法会在测试方法之前被自动执行
- @After
  - 修饰的方法会在测试方法执行之后自动被执行

# 反射

## 反射概念

反射：框架设计的灵魂

- 框架：半成品软件，可以在框架的基础上进行软件开发，简化编码
- 反射：将类的各个组成部分封装为其它对象，这就是反射机制
  - 好处：
  - 1.在程序运行过程中，操作对象
    2.可以解耦，提高程序的可拓展性

## 获取class对象的方式

1.Class.forName("全类名")：将字节码文件加载进内存，返回Class对象

* 多用于配置文件，将类名定义在配置文件中，读取文件，加载类

2.类名.class：类名的属性class来获取

- 多用于参数的传递

3.对象.getClass()：getClass()方法在Object类中定义着

- 多用于对象的获取字节码的方式

结论：同一个字节码文件（*.class）在一次程序运行中，只会被加载一起，无论通过哪种方式获取的Class对象都是同一个

```java
//        1.Class.forName("全类名")：将字节码文件加载进内存，返回Class对象
        Class cls1 = Class.forName ("cn.itcast.domain.Person");
        System.out.println (cls1);
//        2.类名.class：类名的属性class来获取
        Class cls2 = Person.class;
        System.out.println (cls2);
//        3.对象.getClass()：getClass()方法在Object类中定义着
        Person p = new Person ();
        Class cls3 = p.getClass ();
        System.out.println (cls3);

// == 比较三个对象
System.out.println (cls1==cls2);//比的是内存地址
System.out.println (cls1==cls3);//比的是内存地址
```



## Class对象功能：

- 获取功能：

  1.获取成员变量们

  ​	 Field[ ] getFields( ) ：用来获取所有public修饰的成员变量

  ​	 Field getField（String name）：用来获取指定名称的public修饰的成员变量

  

  ​	 Field[ ] getDeclaredFields( )：不考虑访问权限修饰符，获取所有成员变量

  ​     Field getDeclaredField(String name )

  

  2.获取构造方法们

  ​	 Constructor<?>[ ] getConstructors( ) 获取所有的成员变量，不考虑修饰符

  ​	 Constructor<T> getConstructor(<类<?>... parameterTypes）

  

  ​	 Constructor<T> getDeclaredConstructor(类<?>... parameterTypes)

  ​     Constructor<?>[ ] getDeclaredConstuctor( ）

  3.获取成员方法们

  ​	 Method[ ] getMethods( )

  ​	 Method[ ] getMethod(String name , 类<?>... parameterTypes)

  

  ​	 Method[ ] getDeclaredMethods( )

  ​	 Method[ ] getDeclaredMethod(String name , 类<?>... parameterTypes)

  ​	 

  4.获取类名

  ​	 String getName( )

- Field：成员变量
  - 操作：
    - 1.设置值
      - void set（Object obj , Object value）
    - 2.获取值
      - get(Object obj)
    - 3.暴力反射，忽略访问权限修饰符的安全检查
      - setAccessible(true)
- Constructor：构造方法
  - 创建对象：
    - T newInstance（Object......initargs）

# 注解