/*Name: Katelyn Valles
*Course: CPI 310
*Description: When the user clicks on a highlighted text, it displays the definition of the text with a tooltip.*/


var dict = 
{
	"diabolical":"characteristic of the Devil, or so evil as to be suggestive of the Devil.",
	"snorkel":"a plastic breathing tube used for swimming near the surface with the head underwater.",
	"undertaker":"One whose business is to prepare the dead for burial and to arrange and manage funerals.",
	"marina":"a dock or basin providing secure moorings for pleasure boats and often offering supply, repair, and other facilities.",
	"skiffs":"Any of various small boats.",
	"barnacles":"any of numerous marine crustaceans (subclass Cirripedia) with feathery appendages for gathering food that are free-swimming as larvae but permanently fixed (as to rocks, boat hulls, or whales) as adults.",
	"jut":"to extend out, up, or forward.",
	"derelict":" abandoned especially by the owner or occupant.",
	"jilted":"suddenly reject or abandon (a lover)."
	
};

function selectText(e)
{
	if (e.target.children[0].innerText == "")
	{
		e.target.children[0].innerText = dict[e.target.innerText];
		e.target.children[0].style.visibility= "visible";	
	}
	else
	{	
		e.target.children[0].innerText = "";
		e.target.children[0].style.visibility= "hidden";
	}
}

function removeDefinition(e)
{
	//clicking the word gets rid of the definition
}

function start()
{
	var markedWords = document.getElementsByClassName("wordsToBeDefined");
		for (var i = 0; i<markedWords.length;i++)
		{
			markedWords[i].addEventListener('click', selectText);
			markedWords[i].addEventListener('dblclick', removeDefinition);
		}
}
