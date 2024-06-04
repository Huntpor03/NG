package sbtech.NG;

import java.security.PublicKey;
import java.sql.Connection;
import java.sql.DriverManager;

import javax.swing.JOptionPane;

import org.apache.wicket.markup.html.WebPage;

public class H2data extends WebPage {
	private static final long serialVersionUID = 1L;

	public static Connection h2connection;
	
	public static String h2URL = url();
	
	private static String OS = null;
	
	public static Connection H2(){
		
		 String jDBC_Driver = "org.h2.Driver";
		 String userString = "";
		 String passString = "";
		 
		 try {
			 Class.forName(jDBC_Driver);
			 h2connection = DriverManager.getConnection(h2URL,userString,passString);
			 if(h2connection != null) {
				 System.out.println("Connected to H2 Data");
			 }else {
				 System.out.println("Sorry, Connection was not made.");
			 }
		 }catch (Exception e) {
			// TODO: handle exception
		}
		
		return h2connection;

	}
	
	public static String url() {
		if(getOsName().startsWith("Windows")) {
			h2URL = "jdbc:h2:C:/Users/Hunter/eclipse-workspace/GamePage/src/main/resources/data/SBTECH";
		}else {
			h2URL = "jdbc:h2:file:/var/lib/tomcat10/webapps/src/main/resources/data/SBTECH";
		}
		return h2URL;
	}
	
	
	public static String getOsName(){
        if(OS == null){
            OS = System.getProperty("os.name");
        }
        return OS;
    }
}
