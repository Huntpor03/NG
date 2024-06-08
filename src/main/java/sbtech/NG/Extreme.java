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
		
		Button snakeButton = new Button("SnakeEx") {
			public void onSubmit() {
				setResponsePage(SnakeEx.class);
			}
		};
		
		Button puzButton = new Button("puzzleEx") {
			public void onSubmit() {
				setResponsePage(PuzEx.class);
			}
		};
		
		add(extremeForm);
		extremeForm.add(cMextremeButton);
		extremeForm.add(snakeButton);
		extremeForm.add(puzButton);
	}
}
