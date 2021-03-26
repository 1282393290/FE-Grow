# php知识点

## 要点
· header("Content-type:text/html;charset=utf-8");设置相应头，防止浏览器乱码
· <?php：头标签 php代码 ?>：尾标签
· 输出语句：echo、var_dump(打印变量类型和值)、print_f(打印值)
· 变量定义：$name = "王大锤";$arr = ['王大锤', '王重锤'];
· 字符串连接符：.
· 单引号直接解析其中的纯字符串，双引号可以解析其中的变量
· 遍历数组：foreach(变量名 as 下标=>值) {}
· php数组下标可以用字符串["abc"=>1, "adc"=>2];
· 退出执行：die;exit;