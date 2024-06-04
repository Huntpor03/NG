package sbtech.NG;

import java.sql.Statement;

import org.apache.wicket.markup.html.form.Button;
import org.apache.wicket.markup.html.form.EmailTextField;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.markup.html.form.PasswordTextField;
import org.apache.wicket.markup.html.form.TextField;
import org.apache.wicket.model.IModel;
import org.apache.wicket.model.Model;
import org.apache.wicket.validation.validator.EmailAddressValidator;

public class Regi extends H2data {
	

	public Regi() {
		
		Form regiForm = new Form("RegiForm");
		
		TextField firstNameField = new TextField("FirstName", Model.of());
		TextField lastNameField = new TextField("LastName", Model.of());
		TextField usrField = new TextField("user", Model.of());
		PasswordTextField passField = new PasswordTextField("pass",Model.of());
		EmailTextField emailField = new EmailTextField("email", Model.of()); 
		
		Button regiButton = new Button("regi") {
			public void onSubmit() {
				H2();
				try{
                    Statement regiStatement = h2connection.createStatement();
                    String SQL = "INSERT INTO PUBLIC.USERINFO (FIRSTNAME, LASTNAME, USERNAME, PASSWORD, EMAIL) VALUES ('"+firstNameField.getInput()+"','"+lastNameField.getInput()+"','"+ usrField.getInput()+"','"+passField.getInput()+"','"+emailField.getInput()+"')";
                    regiStatement.executeUpdate(SQL);
                }catch (Exception e){
                    e.printStackTrace();
                }
				setResponsePage(NG.class);
			}
		};
		
		
		
		add(regiForm);
		
		regiForm.add(firstNameField);
		regiForm.add(lastNameField);
		regiForm.add(usrField);
		regiForm.add(passField);
		regiForm.add(emailField);
		regiForm.add(regiButton);
	}
}
