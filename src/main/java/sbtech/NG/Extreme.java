package sbtech.NG;

import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.form.Button;
import org.apache.wicket.markup.html.form.Form;

public class Extreme extends WebPage {
	
	public Extreme() {
		
		Form extremeForm = new Form("extremelvlForm");
		
		Button cMextremeButton = new Button("CMextreme") {
			public void onSubmit() {
				setResponsePage(CMEx.class);
			}
		}; 
		
		add(extremeForm);
		extremeForm.add(cMextremeButton);
		
	}
}
