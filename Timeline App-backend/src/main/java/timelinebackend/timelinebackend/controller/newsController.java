package timelinebackend.timelinebackend.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import org.springframework.web.bind.annotation.*;
import timelinebackend.timelinebackend.MySQLConnector;
import timelinebackend.timelinebackend.entity.*;

import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

@RestController
@RequestMapping("/news")
public class newsController {

    ArrayList<news> list=new ArrayList<news>();
    ArrayList<news> list0 = new ArrayList<news>();

    @PostMapping("moreNews")
    @CrossOrigin(origins ="*")
    public JSONArray viewThreeMoreNews(@RequestParam(value="message") String message){

        if(list.size() - list0.size() >= 3){
            for(int j=0; j<3; j++){
                list0.add(list.get(list.size()-list0.size()-1));
            }
        }else if(list.size() - list0.size() < 3 && list.size() - list0.size() > 0){
            for(int j=0; j<list.size()-list0.size()+1; j++){
                list0.add(list.get(list.size()-list0.size()-1));
            }
        }

        String str = JSON.toJSONString(list0);
        JSONArray jsonArray = JSONArray.parseArray(str);
        return jsonArray;
    }

    @PostMapping("newsList")
    @CrossOrigin(origins ="*")
    public JSONArray viewNewsList(@RequestParam(value="message") String message){

        Connection conn = null;
        Statement stmt = null;
        list0 = new ArrayList<news>();

        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(MySQLConnector.DB_URL,MySQLConnector.USER,MySQLConnector.PASS);
            stmt = conn.createStatement();

            String sql4;
            sql4 = "SELECT * FROM news";
            ResultSet rs = stmt.executeQuery(sql4);
            while(rs.next()){

                int id=rs.getInt("id");

                if(id>list.size()){
                    String content=rs.getString("content");
                    String imageURL=rs.getString("imageURL");
                    String author=rs.getString("author");
                    String time=rs.getString("time");

                    news n=new news(id,content,imageURL,author,time);
                    list.add(n);
                }

            }

            rs.close();
            stmt.close();
            conn.close();
        }catch(SQLException se){
            se.printStackTrace();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            try{
                if(stmt!=null) stmt.close();
            }catch(SQLException se2){
            }
            try{
                if(conn!=null) conn.close();
            }catch(SQLException se){
                se.printStackTrace();
            }
        }

        for(int k=1;k<=3;k++){
            list0.add(list.get(list.size()-k));
        }
        ArrayList<news> list1 = new ArrayList<news>();
        if(!list.isEmpty()&&list.size()>3){
            for(int i=1; i<=3; i++){
                if(list1.size()<3){
                    list1.add(list.get(list.size()-i));
                }
            }
        }else if(!list.isEmpty()&&list.size()<=3){
            for(int i=1; i<=list.size(); i++){
                if(list1.size()<3){
                    list1.add(list.get(list.size()-i));
                }
            }
        }

        String str = JSON.toJSONString(list1);
        JSONArray jsonArray = JSONArray.parseArray(str);
        return jsonArray;
    }

    @PostMapping("addNews")
    @CrossOrigin(origins ="*")
    public boolean addNews(@RequestParam(value="message") String message){

        JSONObject news = JSONObject.parseObject(message);

        Connection conn = null;
        Statement stmt = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(MySQLConnector.DB_URL,MySQLConnector.USER,MySQLConnector.PASS);
            stmt = conn.createStatement();

            String content = news.get("content").toString();

            String imageURL = "";
            if(news.get("imageURL").toString()!=""&&news.get("imageURL").toString().endsWith(".jpg")){
                imageURL = "assets/imgs/" + news.get("imageURL").toString();
            }else {
                imageURL = "";
            }


            String author = news.get("author").toString();

            Date time = new Date();
            SimpleDateFormat format = new SimpleDateFormat("MM-dd  HH:mm");
            String dateString = format.format(time);

            String sql6;
            sql6 = "insert into news(content,imageURL,author,time) values ('"+content+"','"+imageURL+"','"+author+"','"+dateString+"')";
            stmt.execute(sql6);
            stmt.close();
            conn.close();
            return true;

        }catch(SQLException se){
            se.printStackTrace();
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            try{
                if(stmt!=null) stmt.close();
            }catch(SQLException se2){
            }
            try{
                if(conn!=null) conn.close();
            }catch(SQLException se){
                se.printStackTrace();
            }
        }

        return false;
    }

}
