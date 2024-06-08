package sbtech.NG;

import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.form.Form;

public class PuzEx extends WebPage{
	
	public PuzEx() {
		Form puzzForm = new Form("PuzzForm");

	
		add(puzzForm);
	
	}
}