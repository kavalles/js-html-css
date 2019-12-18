/*Name: Katelyn Valles
*Course: CPI 310
*Description: When the user enters their name into the textfield, their name is displayed along with a greeting after they click a button.*/

function buttonHandler()
{
	var greetingLabel = document.getElementById("greetingMessage");
	
	var nameTextField = document.getElementById("nameTextField");
	greetingLabel.innerHTML = "Hello " + nameTextField.value + "!";
	
}