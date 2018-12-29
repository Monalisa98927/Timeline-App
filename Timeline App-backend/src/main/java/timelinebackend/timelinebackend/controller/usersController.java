package timelinebackend.timelinebackend.controller;
import org.springframework.web.bind.annotation.*;
import com.alibaba.fastjson.JSONObject;
import timelinebackend.timelinebackend.MySQLConnector;

import java.sql.*;

@RestController
@RequestMapping("/users")
public class usersController {

    @PostMapping("register")
    @CrossOrigin(origins ="*")
    public boolean addUser(@RequestParam(value="message") String message){

        JSONObject user=JSONObject.parseObject(message);
        String password=user.get("password").toString();
        String username=user.get("username").toString();

        if(this.checkIfUserExisted(message)==true){
            return false;
        }else{
            Connection conn = null;
            Statement stmt = null;
            try{
                Class.forName("com.mysql.jdbc.Driver");
                conn = DriverManager.getConnection(MySQLConnector.DB_URL,MySQLConnector.USER,MySQLConnector.PASS);
                stmt = conn.createStatement();
                String sql2;
                sql2 = "insert into users values ('"+username+"','"+password+"')";
                stmt.execute(sql2);
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
        }

        return true;
    }

    public boolean checkIfUserExisted(String message){

        JSONObject user=JSONObject.parseObject(message);
        String username=user.get("username").toString();

        Connection conn = null;
        Statement stmt = null;
        try{
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(MySQLConnector.DB_URL,MySQLConnector.USER,MySQLConnector.PASS);
            stmt = conn.createStatement();

            String sql1;
            sql1 = "SELECT username FROM users WHERE username='"+username+"'";
            ResultSet rs = stmt.executeQuery(sql1);
            if(rs.next()){

                rs.close();
                stmt.close();
                conn.close();
                return true;
            }

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

    @PostMapping("login")
    @CrossOrigin(origins ="*")
    public boolean loginUser(@RequestParam(value="message") String message){

        JSONObject user=JSONObject.parseObject(message);
        String username=user.get("username").toString();
        String password=user.get("password").toString();

        Connection conn = null;
        Statement stmt = null;
        try{
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(MySQLConnector.DB_URL,MySQLConnector.USER,MySQLConnector.PASS);
            stmt = conn.createStatement();

            String sql3;
            sql3 = "SELECT username, password FROM users WHERE username='"+username+"' and password='"+password+"'";
            ResultSet rs = stmt.executeQuery(sql3);
            if(rs.next()){
                rs.close();
                stmt.close();
                conn.close();
                return true;
            }

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