---
sidebar_position: 3
sidebar_label: 'HTML-Part 3st'
---

## 本文由以下元素组成

- HTML 表格
- HTML 列表
- HTML 区块
- HTML 表单和输入

------

## HTML 表格

### 表格

```html
表格由 <table> 标签来定义。每个表格均有若干行（由 <tr> 标签定义），每行被分割为若干单元格（由 <td> 标签定义）。字母 td 指表格数据（table data），即数据单元格的内容。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。
```

### 实例

```html
<table border="1">
    <tr>
        <td>row 1, cell 1</td>
        <td>row 1, cell 2</td>
    </tr>
    <tr>
        <td>row 2, cell 1</td>
        <td>row 2, cell 2</td>
    </tr>
</table>
```

在浏览器显示如下：:

![](1.png)

### 表格和边框属性

如果不定义边框属性，表格将不显示边框。有时这很有用，但是大多数时候，我们希望显示边框。

使用边框属性来显示一个带有边框的表格：

```html
<table border="1">
    <tr>
        <td>Row 1, cell 1</td>
        <td>Row 1, cell 2</td>
    </tr>
</table>
```

### 表格表头

```html
表格的表头使用 <th> 标签进行定义。
```

大多数浏览器会把表头显示为粗体居中的文本：

### 实例

```html
<table border="1">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>row 1, cell 1</td>
        <td>row 1, cell 2</td>
    </tr>
    <tr>
        <td>row 2, cell 1</td>
        <td>row 2, cell 2</td>
    </tr>
</table>
```

在浏览器显示如下：

![](2.png)

```html
HTML 表格标签
标签	描述
<table>	定义表格
<th>	定义表格的表头
<tr>	定义表格的行
<td>	定义表格单元
<caption>	定义表格标题
<colgroup>	定义表格列的组
<col>	定义用于表格列的属性
<thead>	定义表格的页眉
<tbody>	定义表格的主体
<tfoot>	定义表格的页脚
```

## HTML 列表

HTML 支持有序、无序和定义列表

### 无序列表

无序列表是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记。

```html
无序列表使用 <ul> 标签
```

```html
<ul>
<li>Coffee</li>
<li>Milk</li>
</ul>
```

浏览器显示如下：

- Coffee
- Milk

### 有序列表

```html
同样，有序列表也是一列项目，列表项目使用数字进行标记。 有序列表始于 <ol> 标签。每个列表项始于 <li> 标签。
```

列表项使用数字来标记。

```html
<ol>
<li>Coffee</li>
<li>Milk</li>
</ol>
```

浏览器中显示如下：

1. Coffee
2. Milk

### 自定义列表

自定义列表不仅仅是一列项目，而是项目及其注释的组合。

```html
自定义列表以 <dl> 标签开始。每个自定义列表项以 <dt> 开始。每个自定义列表项的定义以 <dd> 开始。
```

```html
<dl>
<dt>Coffee</dt>
<dd>- black hot drink</dd>
<dt>Milk</dt>
<dd>- white cold drink</dd>
</dl>
```

浏览器显示如下：

- Coffee
  - black hot drink
- Milk
  - white cold drink

### 注意事项 - 有用提示

**提示:** 列表项内部可以使用段落、换行符、图片、链接以及其他列表等等。

```html
HTML 列表标签
标签	描述
<ol>	定义有序列表
<ul>	定义无序列表
<li>	定义列表项
<dl>	定义列表
<dt>	自定义列表项目
<dd>	定义自定列表项的描述
```

## HTML 区块

```html
HTML 可以通过 <div> 和 <span>将元素组合起来。
```

### 区块元素

大多数 HTML 元素被定义为**块级元素**或**内联元素**。

块级元素在浏览器显示时，通常会以新行来开始（和结束）。

```html
实例: <h1>, <p>, <ul>, <table>
```

### 内联元素

内联元素在显示时通常不会以新行开始。

```html
实例: <b>, <td>, <a>, <img>
```

### div元素

```html
HTML <div> 元素是块级元素，它可用于组合其他 HTML 元素的容器。

<div> 元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。

如果与 CSS 一同使用，<div> 元素可用于对大的内容块设置样式属性。

<div> 元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。使用 <table> 元素进行文档布局不是表格的正确用法。<table> 元素的作用是显示表格化的数据。
```

### span元素

```html
HTML <span> 元素是内联元素，可用作文本的容器

<span> 元素也没有特定的含义。

当与 CSS 一同使用时，<span> 元素可用于为部分文本设置样式属性。
```

## HTML 表单和输入

### 表单

表单是一个包含表单元素的区域。

表单元素是允许用户在表单中输入内容,比如：文本域(textarea)、下拉列表、单选框(radio-buttons)、复选框(checkboxes)等等。

```html
表单使用表单标签 <form> 来设置:
```

```html
<form>

input 元素

</form>
```

### 输入元素

```html
多数情况下被用到的表单标签是输入标签（<input>）。

输入类型是由类型属性（type）定义的。大多数经常被用到的输入类型如下：
```

### 文本域（Text Fields）

```html
文本域通过<input type="text"> 标签来设定，当用户要在表单中键入字母、数字等内容时，就会用到文本域。
```

```html
<form>
First name: <input type="text" name="firstname"><br>
Last name: <input type="text" name="lastname">
</form>
```

**注意:**表单本身并不可见。同时，在大多数浏览器中，文本域的默认宽度是 20 个字符。

### 密码字段

```html
密码字段通过标签<input type="password"> 来定义:
```

```html
<form>
Password: <input type="password" name="pwd">
</form>
```

**注意:**密码字段字符不会明文显示，而是以星号或圆点替代。

### 单选按钮（Radio Buttons）

```html
<input type="radio"> 标签定义了表单单选框选项
```

```html
<form>
<input type="radio" name="sex" value="male">Male<br>
<input type="radio" name="sex" value="female">Female
</form>
```

### 复选框（Checkboxes）

```html
<input type="checkbox"> 定义了复选框. 用户需要从若干给定的选择中选取一个或若干选项。
```

```html
<form>
<input type="checkbox" name="vehicle" value="Bike">I have a bike<br>
<input type="checkbox" name="vehicle" value="Car">I have a car
</form>
```

### 提交按钮(Submit Button)

```html
<input type="submit"> 定义了提交按钮.

当用户单击确认按钮时，表单的内容会被传送到另一个文件。表单的动作属性定义了目的文件的文件名。由动作属性定义的这个文件通常会对接收到的输入数据进行相关的处理。:
```

```html
<form name="input" action="html_form_action.js" method="get">
Username: <input type="text" name="user">
<input type="submit" value="Submit">
</form>
```

假如您在上面的文本框内键入几个字母，然后点击确认按钮，那么输入数据会传送到 "html_form_action.js" 的页面。该页面将显示出输入的结果。

### HTML  表单标签

```html
HTML5新标签
标签	描述
<form>	定义供用户输入的表单
<input>	定义输入域
<textarea>	定义文本域 (一个多行的输入控件)
<label>	定义了 <input> 元素的标签，一般为输入标题
<fieldset>	定义了一组相关的表单元素，并使用外框包含起来
<legend>	定义了 <fieldset> 元素的标题
<select>	定义了下拉选项列表
<optgroup>	定义选项组
<option>	定义下拉列表中的选项
<button>	定义一个点击按钮
<datalist>	指定一个预先定义的输入控件选项列表
<keygen>	定义了表单的密钥对生成器字段
<output>	定义一个计算结果
```

