package sbtech.NG;

import org.apache.wicket.csp.CSPDirective;
import org.apache.wicket.csp.CSPDirectiveSrcValue;
import org.apache.wicket.markup.html.IPackageResourceGuard;
import org.apache.wicket.markup.html.PackageResourceGuard;
import org.apache.wicket.markup.html.SecurePackageResourceGuard;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.protocol.http.WebApplication;

/**
 * Application object for your web application.
 * If you want to run this application without deploying, run the Start class.
 * 
 * @see sbtech.GamePage.Start#main(String[])
 */
public class WicketApplication extends WebApplication
{
	/**
	 * @see org.apache.wicket.Application#getHomePage()
	 */
	@Override
	public Class<? extends WebPage> getHomePage()
	{
		return NG.class;
	}

	/**
	 * @see org.apache.wicket.Application#init()
	 */
	@Override
	public void init()
	{
		super.init();
		de.agilecoders.wicket.core.Bootstrap.install(this);
		MountPages();
		getCspSettings().blocking().disabled();
		
		//Allow Files to be used as Resources
		IPackageResourceGuard packageResourceGuard = getResourceSettings().getPackageResourceGuard();
		
		if(packageResourceGuard instanceof SecurePackageResourceGuard) {
			SecurePackageResourceGuard guard = (SecurePackageResourceGuard)packageResourceGuard;
			guard.setAllowAccessToRootResources(true);
			guard.addPattern("+*.m4a");
		}

	}
	
	
	public void MountPages() {
		mountPage("/GameLogin", NG.class);
		mountPage("/gamelogin/levels", levels.class);
		mountPage("/gamelogin/Register", Regi.class);
		
		mountPage("/levels/toddlergames", ToddlerGames.class);
		mountPage("/toddlergames/ColorLN", ColorLN.class);
		mountPage("/toddlergames/NumberLN", NumberLN.class);
		mountPage("/toddlergames/AlphabetLN", AlphaLN.class);
		mountPage("/toddlergames/PlayCM", PlayCM.class);
		mountPage("/toddlergames/PlayNM", PlayNM.class);
		
		mountPage("levels/Extremegames", Extreme.class);
		mountPage("/ExtremeGames/CMEx", CMEx.class);
		mountPage("ExtremeGames/SnakeEx", SnakeEx.class);
		mountPage("/ExtremeGames/PuzEx", PuzEx.class);
		
	}
}
