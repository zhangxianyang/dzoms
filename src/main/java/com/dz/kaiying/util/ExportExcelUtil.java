package com.dz.kaiying.util;

import com.dz.kaiying.DTO.DriverKpDTO;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Workbook;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletOutputStream;
import java.io.*;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ExportExcelUtil {

	/**
	 * 描述：根据文件路径获取项目中的文件
	 * @param fileDir 文件路径
	 * @return
	 * @throws Exception
	 */
	public  File getExcelDemoFile(String fileDir) throws Exception{
		String classDir = null;
		String fileBaseDir = null;
		File file = null;
		classDir = Thread.currentThread().getContextClassLoader().getResource("/").getPath();
		fileBaseDir = classDir.substring(0, classDir.lastIndexOf("classes"));

		file = new File(fileBaseDir+fileDir);
		if(!file.exists()){
			throw new Exception("模板文件不存在！");
		}
		return file;
	}

	/**
	 *
	 * @param fileName 生成薄名
	 */
	public void getExcel(String fileName , List<DriverKpDTO> driverKps,HttpServletResponse response,String mExcelName){
		Workbook workbook = new HSSFWorkbook(); //这里新建了一个exccel 2003的文件
		//Workbook workbook = new XSSFWorkbook();//这里新建了一个exccel 2007的文件
		HSSFSheet sheet = (HSSFSheet) workbook.createSheet(fileName);
		Map<String, Integer> map=new HashMap<String, Integer>();
		//需要写个方法确定哪个排第几
		HSSFRow head = sheet.createRow(3);
		//需要些表头格式
		HSSFCellStyle style = (HSSFCellStyle) workbook.createCellStyle();
		//表头居中
		style.setAlignment(HSSFCellStyle.ALIGN_CENTER);

		for (int row = 0; row < driverKps.size(); row++){
			DriverKpDTO driverKp=driverKps.get(row);
			Map<String, Object> objDTO=getKeyAndValue(driverKp);
			HSSFRow rows = sheet.createRow(row+3);
			for (int col = 0; col < getClassFields(driverKp); col++){
				String key=getFieldValue(driverKp,col);
				if(driverKp!=null && key != "")
					rows.createCell(map.get(key)).setCellValue(objDTO.get(key).toString());
				else
					rows.createCell(map.get(key)).setCellValue("");
			}
		}
		ByteArrayOutputStream os = new ByteArrayOutputStream();
		BufferedInputStream bis=null;
		BufferedOutputStream bos=null;
		try {
			workbook.write(os);
			byte[] bytes = os.toByteArray();
			InputStream is = new ByteArrayInputStream(bytes);
			response.reset();
			response.setContentType("application/vnd.ms-excel;charset=utf-8");
			response.setHeader("Content-Disposition", new String(("attachment;filename="+mExcelName+".xls").getBytes("UTF-8"), "UTF-8"));
			ServletOutputStream out = response.getOutputStream();
			bis=new BufferedInputStream(is);
			bos=new BufferedOutputStream(out);
			byte[] buff = new byte[1024];
			int lengthByte=-1;
			while ((lengthByte=bis.read(buff,0,buff.length))!=-1){
				bos.write(buff,0,lengthByte);
			}
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}finally {
			if (bis!=null) {
				try {
					bis.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			if (bos!=null) {
				try {
					bos.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}

	/**
	 *获取实体类中属性的个数
	 */
	public int getClassFields(Object obj){
		if (obj != null){
			Class<?> cal=obj.getClass();
			Field[] fields = cal.getDeclaredFields();
			return fields.length;
		}
		return 0;
	}

	/**
	 * 将对象放入Map
	 * @param obj
	 * @return
	 */
	public Map<String, Object> getKeyAndValue(DriverKpDTO obj) {
		Map<String, Object> map = new HashMap<String, Object>();
		Class userCla = (Class) obj.getClass();
		Field[] fs = userCla.getDeclaredFields();
		for (int i = 0; i < fs.length; i++) {
			Field f = fs[i];
			f.setAccessible(true);
			Object val = new Object();
			try {
				val = f.get(obj);
				// 得到此属性的值
				map.put(f.getName(), val);// 设置键值
				f.setAccessible(false);
			} catch (IllegalArgumentException e) {
				e.printStackTrace();
			} catch (IllegalAccessException e) {
				e.printStackTrace();
			}
		}
		return map;
	}

	/**
	 *获取属性名
	 */
	public String getFieldValue(DriverKpDTO driverKp,int n){
		if (driverKp != null){
			Field[] fields = driverKp.getClass().getFields();
			String str=fields[n].getName();
			return str;
		}
		return "";
	}
}
