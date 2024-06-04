package sbtech.NG;

import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.form.Button;
import org.apache.wicket.markup.html.form.Form;

public class PlayNM extends WebPage {
	
	public PlayNM() {
		
		Form playNMForm = new Form("PlayNMForm");
		
		Button againButton = new Button("again") {
			public void onSubmit() {
				setResponsePage(PlayNM.class);
			}
		};
		
		Button backButton = new Button("Backpage") {
			public void onSubmit() {
				setResponsePage(ToddlerGames.class);
			}
		};
		
		add(playNMForm);
		playNMForm.add(againButton);
		playNMForm.add(backButton);
	}
}
