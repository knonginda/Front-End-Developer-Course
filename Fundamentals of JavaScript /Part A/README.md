# 1. 栈

  > 栈一般指的是存储货物的地方，可引申为仓库

## 1.1. 数据结构中的栈
  - *栈是一组数据的存放方式，特点是先进后出，后进先出*

## 1.2. 代码的运行方式
  - *先进后出*

## 1.3. 内存区域
- 栈是存放数据的一种内存区域
- 程序运行时，需要内存空间存储数据。一般来说分两种内存空间，一种叫Stack（栈），另一种叫做Heap（堆）
  - 栈是有结构的，每个区块按照一定的次序存放，可以明确知道每个区域的大小
  - 堆是没有结构的，数据可以任意存放。因此栈的寻址速度要比堆快
- 占用空间确定的数据，一般都存放在栈里面，否则就放在堆里（比如比较大的对象都存放在堆里）

# 2. 数据类型
- 基本数据类型(Primitive values): Number Null Undefined Boolean String Symbol
- 引用数据类型(Objects): Object Array Function Regexp
- 基本数据类型直接保存在变量对象里（拷贝的是值）
- 引用数据类型要单独在堆内存里，另外开辟空间保存（拷贝的是地址）
- JS属于弱数据类型，不要明显的去区分（像C语言是强类型，区分比较明显）

# 3. 队列
- 队列的特殊之处在于它只能允许在表的前端进行删除操作，而在表的后端进行插入操作
- 因为队列只允许在一端插入，在另一端删除，所以只有最早进入队列的元素才能最先从队列中删除（先进先出）
> 微任务，宏任务都是队列

# 4. 执行上下文
- 全局上下文, 函数上下文
- *每次函数执行的时候，会产生一个执行上下文（Execution Context)，执行上下文是一个对象*
- *执行上下文里面会创建一个变量对象(Variable Object, VO)，里面存放着当前函数内的变量*
- *在函数执行上下文中，VO是不能直接访问的，此时由活动对象(Activation Object, AO)扮演VO的角色*

## 4.1. 处理执行上下文代码的2个阶段
1. *进入执行上下文*
2. *执行代码*

# 5. 执行上下文栈
> 栈是一个数据结构，里面放了很多执行上下文
## 5.1. 执行上下文分类
- *JS代码在执行的时候会进入一个执行上下文，可以理解为当前代码的运行环境*
- 在JS中运行环境主要分为全局执行上下文环境和函数执行上下文环境
  - 全局执行上下文只有一个，在客户端中一般由浏览器创建，也就是我们熟知的window对象，我们能通过this直接访问到它
  - window对象还是var声明的全局变量的载体。我们通过var创建的全局对象，可以通过window直接访问。
  - *全局上下文的VO，也被称为GO（Global Object，window），全局对象的属性可以在任何地方被访问到*

## 5.2. *多个执行上下文*
- 在JS执行过程会产生多个执行上下文，JS引擎会有栈来管理这些执行上下文
- *执行上下文栈（调动栈），调动栈用于存储代码执行期间创建的所有上下文（后进先出）*
- 栈底永远是全局上下文，栈顶为当前正在执行的上下文
- *当开启一个函数执行时会产生一个新的执行上下文放入调用栈，执行完毕后会自动出栈*
- 只有全局上下文的变量对象允许通过VO的属性名称来间接访问，在函数上下文中是不能直接访问VO对象的