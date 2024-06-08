package sbtech.NG;


import javax.swing.text.Document;

import org.apache.wicket.Component;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.form.Button;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.model.Model;
import org.w3c.dom.html.HTMLDocument;



public class PlayCM extends WebPage {

	public PlayCM() {
		
		Form PlayCMForm = new Form("playCMForm");
		Button playagainButton = new Button("playAgainButton") {
			@Override
			public void onSubmit() {
				setResponsePage(PlayCM.class);
			}
		};
		Button goBackButton = new Button("GoBackButton") {
			public void onSubmit() {
				setResponsePage(ToddlerGames.class);
			}
		};
		
		add(PlayCMForm);
		PlayCMForm.add(playagainButton);
		PlayCMForm.add(goBackButton);
	}

}
