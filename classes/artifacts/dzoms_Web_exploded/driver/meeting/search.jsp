<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%><%@taglib
	uri="/struts-tags" prefix="s"%><%@ page language="java"
	import="java.util.*, com.dz.module.user.User"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!doctype html>
<html lang="zh-cn">
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="renderer" content="webkit">
<title>查询信息</title>
<link rel="stylesheet" href="/DZOMS/res/css/pintuer.css" />
<link rel="stylesheet" href="/DZOMS/res/css/admin.css" />
<link rel="stylesheet" href="/DZOMS/res/css/jquery.datetimepicker.css" />
<script src="/DZOMS/res/js/jquery.js"></script>
<script src="/DZOMS/res/js/pintuer.js"></script>
<script src="/DZOMS/res/js/respond.js"></script>
<script src="/DZOMS/res/js/admin.js"></script>

<script type="text/javascript" src="/DZOMS/res/js/JsonList.js" ></script>
<script type="text/javascript" src="/DZOMS/res/js/TableList.js" ></script>

<script>
$(document).ready(function(){
			$("#search_form").find("input").change(function(){
				$("#search_form").submit();
			});
			
			$("#search_form").submit();
		});
</script>
<script src="/DZOMS/res/js/jquery.datetimepicker.js"></script>
	
</head>
<body>
	<div class="adminmin-bread" style="width: 100%;">
		<ul class="bread text-main" style="font-size: larger;"> 
                <li>驾驶员管理</li>
                <li>例会</li>
                <li>例会查询</li>
    </ul>
    </div>
    <div class="line">
	         <div class="panel  margin-small" >
                	<div class="panel-head">
          		例会
          		</div>
          		
          		
          		
          
          	<div class="panel-body">
          		<form  style="width: 100%;"  method="post" class="form-inline" id="search_form" action="/DZOMS/driver/meeting/searchMeeting" target="result_form">
          		       
          		       <div class="form-group">
          		       	  <div class="label">
          		       	  	  <lable>开始日期</lable>
          		       	  </div>
          		       	  <div class="field">
          		       	  	<input type="text" id="beginDate" name="beginDate" class="datetimepicker input input-auto" size="12"/>
          		       	  </div>
          		       	
          		       </div>
          		        <div class="form-group">
          		       	  <div class="label">
          		       	  	  <lable>截止日期</lable>
          		       	  </div>
          		       	  <div class="field">
          		       	  	<input type="text" id="endDate" name="endDate" class="datetimepicker input input-auto" size="12"/>
          		       	  </div>
          		       	
          		       </div>
          		       <button type="reset" class="button bg-yellow">重置</button>
          		       </form>
          	</div>
      </div>
    	
    	
    </div>
		<!-- 主页面 -->
		
	<div>
    <iframe name="result_form" width="100%" height="800px" id="result_form" style="overflow:none;" scrolling="no">

    </iframe>

    </div>
   
</body>

<script>
   $('.datetimepicker').datetimepicker({
    	lang:"ch",           //语言选择中文
		format:"Y/m/d",      //格式化日期
		timepicker:false,    //关闭时间选项
		yearStart:2000,     //设置最小年份
    });
    function iFrameHeight() {
	try{
              var ifm= document.getElementById("result_form");   
              var subWeb = document.frames ? document.frames["result_form"].document : ifm.contentDocument;   
if(ifm != null && subWeb != null) {
   ifm.height = subWeb.body.scrollHeight+200;
}   }catch(e){}
}    

$(document).ready(function(){
	window.setInterval('iFrameHeight();',3600);
});
</script>

 <script src="/DZOMS/res/js/apps.js"></script>
    <script>
    $(document).ready(function() {
        App.init();
        // $(".xdsoft_datetimepicker.xdsoft_noselect").show();
        // $("#ri-li").append($(".xdsoft_datetimepicker.xdsoft_noselect"));

    });
    </script>
</html>
