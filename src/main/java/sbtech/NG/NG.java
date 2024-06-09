package sbtech.NG;

import org.apache.wicket.request.mapper.parameter.PageParameters;

import de.agilecoders.wicket.core.markup.html.bootstrap.dialog.Modal;

import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.form.Button;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.markup.html.form.PasswordTextField;
import org.apache.wicket.markup.html.form.TextField;
import org.apache.wicket.model.Model;

import java.sql.Statement;
import java.sql.ResultSet;

import javax.naming.spi.DirStateFactory.Result;
import javax.swing.JOptionPane;

import org.apache.commons.collections4.functors.IfClosure;
import org.apache.wicket.extensions.ajax.markup.html.modal.ModalDialog;
import org.apache.wicket.markup.html.WebPage;

import sbtech.NG.H2data;

public class NG extends H2data {
	
	public TextField<?> userNameField = new TextField("LoginUsername", Model.of());
	public PasswordTextField passwordTextField = new PasswordTextField("LoginPassword", Model.of());
	public Form<Object> loginForm = new Form<Object>("LoginForm");
	
	
	
	
	public NG() {
		
		Button regiButton = new Button("RegiButton") {
			public void onSubmit() {
				setResponsePage(Regi.class);
			}
		};
		
		Button loginButton = new Button("LoginButton") {
			private static final long serialVersionUID = 1L;

			public void onSubmit() {
				H2();
				try {
					
					Statement gamelogin = h2connection.createStatement();
					String gamesqlString = "SELECT * FROM PUBLIC.USERINFO WHERE Username = '" + userNameField.getInput() + "' and Password = '" + passwordTextField.getInput() + "'"; 
					ResultSet gameloginResult = gamelogin.executeQuery(gamesqlString);
					
					if(gameloginResult.next()) {
						System.out.println("Congrats! You are in!");
						setResponsePage(levels.class);
						
					}
				
					// TODO: handle exception
				}catch (Exception e) {
					// TODO: handle exception
				}
			}
		};
	
		//Add Form
		add(loginForm);
		
		//Add Components to Form: 
		
		loginForm.add(userNameField);
		loginForm.add(passwordTextField);
		loginForm.add(loginButton);
		loginForm.add(regiButton);
		

	}
	
}