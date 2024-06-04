package sbtech.NG;

import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.form.Button;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.markup.html.form.FormComponent;


public class levels extends WebPage {
	
	public levels() {
		
		Form levelForm = new Form("levelForm");
		
		Button toddlerButton = new Button("toddler"){
			public void onSubmit() {
				setResponsePage(ToddlerGames.class);
			}
		};
		
		Button elementaryLevelButton = new Button("elelevelbutton") {
			public void onSubmit() {
				setResponsePage(Extreme.class);
			}
		};
		
		
		
		Button logoutGameButton = new Button("logoutGame") {
			public void onSubmit() {
				setResponsePage(NG.class);
			}
		};
	
		
		add(levelForm);
		
		levelForm.add(toddlerButton);
		levelForm.add(elementaryLevelButton);
		levelForm.add(logoutGameButton);
	}
}
