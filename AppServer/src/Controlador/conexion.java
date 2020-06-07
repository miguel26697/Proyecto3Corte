/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controlador;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
/**
 *
 * @author Jairo
 */
public class conexion {
    Connection con=null;
            String bd = "sergio";
            String usuario = "root";
            String passw = "1234";
            String url = "jdbc:mysql://localhost/"+bd+"?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
              
      public Connection conexion() throws SQLException{
             
            con = DriverManager.getConnection(url,usuario,passw);
        return con;
    }
}
