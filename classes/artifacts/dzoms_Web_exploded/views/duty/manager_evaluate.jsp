<%--
  Created by IntelliJ IDEA.
  User: huang
  Date: 2017/6/15
  Time: 下午8:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>经理考评</title>
    <link rel="stylesheet" href="/DZOMS/ky/css/style.css"/>
</head>
<body>
    <div class="container">
        <div id="managementkp"></div>
    </div>
</body>
<script type="text/javascript">
    var pageUrls ={
        managerEvaluate : "/DZOMS/ky/duty/managerEvaluate/"+"${taskId}" , //get 个人绩效请求数
        jumpUrl:"/DZOMS/ky/activity/task/list",
        regectUrl:"/DZOMS/ky/duty/groupRegect",
    }
</script>
<script src="/DZOMS/ky/js/commonV3.js"></script>
<script src="/DZOMS/ky/js/kpAll-bundle.js"></script>
</html>
