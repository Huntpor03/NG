package sbtech.NG;

import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.form.Button;
import org.apache.wicket.markup.html.form.Form;

public class ToddlerGames extends WebPage {
	
	public ToddlerGames() {
		Form<?> toddlerGamesForm = new Form<Object>("ToddlerGamesForm");
		
		Button playCMButton = new Button("PlayCM") {
			public void onSubmit() {
				setResponsePage(PlayCM.class);
			}
		};
		
		Button playNMButton = new Button("PlayNM") {
			public void onSubmit() {
				setResponsePage(PlayNM.class);
			}
		};

		Button backlevelsButton = new Button("backlevels") {
			public void onSubmit() {
				setResponsePage(levels.class);
			}
		};
		
		add(toddlerGamesForm);
		toddlerGamesForm.add(backlevelsButton);
		toddlerGamesForm.add(playCMButton);
		toddlerGamesForm.add(playNMButton);
	}
}
