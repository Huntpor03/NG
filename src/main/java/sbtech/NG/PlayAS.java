package sbtech.NG;

import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.form.Button;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.markup.html.form.TextField;
import org.apache.wicket.model.Model;

public class PlayAS extends WebPage {
	
	public PlayAS() {
		
		Form PlayAS = new Form("AlphaSpell");
		
		TextField Spell = new TextField("Spell", Model.of());
		
		Button Generate = new Button("generate") {
			
		};
		
		Button CheckButton = new Button("Check") {
			
		};
		
		add(PlayAS);
		PlayAS.add(Spell);
		PlayAS.add(Generate);
		PlayAS.add(CheckButton);
	}
}
