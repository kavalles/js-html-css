/*Name: Katelyn Valles
*Course: CPI 310
*Description: An array of images which creates a photo gallery*/
var imageArray = null;

function start()
{

	imageArray = document.getElementsByTagName("img");
	
	for(i = 3; i < imageArray.length;i++)
	{
		imageArray[i].style.display = 'none';
	}
	
	updatePictures();
	
}

function updatePictures()
{
	for(i=0; i < imageArray.length; i++)
	{
		//current image is middle image, needs to be bigger than the side images
		if(imageArray[i].style.display != "none")
		{
			//i is the first of the three
			//i+1 is the middle one 
			//i+2 is the last one 
			
			imageArray[i].style.width = "300px";
			imageArray[i+1].style.width = "600px";
			imageArray[i+2].style.width = "300px";
			
			break;
		}
		
	}
}

function goPrev()
{
	for(i=0; i<imageArray.length; i++)
	{
		if(imageArray[i].style.display != "none")
		{
			
			if(i===0)
			{
				break;
			}
			//it displays the first three index pictures
			//make sure that you are at the first index
			else if(i > 0)
			{
				imageArray[i+2].style.display = "none";
				imageArray[i-1].style.display = "inline";
				imageArray[i].style.width = "600px";
				imageArray[i+1].style.width = "300px";
				break;
			}

		}
	
		
	}
}
	


function goNext()
{
	for(i=0; i<imageArray.length; i++)
	{
		if(imageArray[i].style.display != "none")
		{
			
			if(i===imageArray.length-3)
			{
				break;
			}
			//it displays the first three index pictures
			//make sure that you are at the first index
			else if(i < imageArray.length-3)
			{
				imageArray[i].style.display = "none";
				imageArray[i+3].style.display = "inline";
				imageArray[i+2].style.width = "600px";
				imageArray[i+1].style.width = "300px";
				break;
			}
			
			//size and position
			

		}
		
		
	}

	
}