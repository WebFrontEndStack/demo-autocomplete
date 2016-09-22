```
使用方法：
添加引用

最低要求：jquery.autocompleter.css和jquery.autocompleter.min.js。



脚本：

<script src="js/jquery.js" type="text/javascript"></script>
<script src="js/jquery.autocompleter.min.js" type="text/javascript"></script>


样式：

<link rel="stylesheet" href="css/jquery.autocompleter.css">


定义你的autocompleter：

$(function () {
    $('input').autocompleter({ source: 'path/to/get_data_request' });
});


或用于本地JSON来源：

var data = [
    { "value": "1", "label": "one" },
    { "value": "2", "label": "two" },
    { "value": "3", "label": "three" }
];
$(function () {
    $('input').autocompleter({ source: data });
});
如果你不会在源对象定义了一个值，标签将被用作后选择在输入字段的默认值。



方法：
插件后更改选项的定义：

$('#input').autocompleter('option', data);


例如：

$('#input').autocompleter('option', {
    limit: 5,
    template: '<img src="{{ image }}" alt="Image for autocompleter list item" /> {{ label }}'
});


开放列表：

$('#input').autocompleter('open');


关闭页面：

$('#input').autocompleter('close');
摧毁插件：

$('#input').autocompleter('destroy');


清除所有缓存：

$.autocompleter('clearCache');


设置默认值：

$.autocompleter('defaults', {
    customClass: 'myClassForAutocompleter'
});


例如：

Autocompleter第一名称输入缓存,匹配强调限制和5的结果。



形式：

<label for="gender_male">Male</label>
<input type="radio" name="gender" value="male" id="gender_male" checked="checked" />
<label for="gender_female">Female</label>
<input type="radio" name="gender" value="female" id="gender_female" />
<label for="firstname">First Name</label>
<input type="text" name="firstname" id="firstname" />


JavaScript：

$(function () {
    $("#firstname").autocompleter({
        limit: 5,
        cache: true,
        combine: function () {
            var gender = $("input:radio[name=gender]:checked").val();
            return {
                gender: gender
            };
        },
        callback: function (value, index) {
            console.log( "Value "+value+" are selected (with index "+index+")." );
        }
    });
});


主要结构：

<div class="autocompleter" id="autocompleter-1">
    <ul class="autocompleter-list">
        <li class="autocompleter-item">First</li>
        ...
        <li class="autocompleter-item">Last</li>
    </ul>
</div>
```
