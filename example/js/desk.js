function Load()
{
	loadUIFunc();
}
window.onload = Load;
function loadUIFunc()
{
	let elemento = "";
	if(arguments.length > 0)
		elemento = "#"+arguments[0];
	let menuList = document.querySelectorAll(elemento+".ui-submenu:not(.ui-nofocus) li:not(.ui-arrow)");
	for(let element of menuList)
	{
		element.addEventListener("click",function()
		{
			let list = document.querySelectorAll(".ui-submenu:not(.ui-nofocus) li:not(.ui-arrow)");
			for(let ele of list){ele.style.fontWeight="initial";ele.style.fontStyle="initial";};
			this.style.fontWeight = "bold";
			this.style.fontStyle = "italic";
		});
	}
	let buttonList = document.querySelectorAll(elemento+".ui-button:not(.ui-nofocus)");
	for(let element of buttonList)
	{
		element.addEventListener("click",function()
		{
			let list = document.querySelectorAll(".ui-button:not(.ui-nofocus)")
			for(let ele of list){ele.style.boxShadow="none";};
			this.style.boxShadow = "0px 0px 10px #444";
		});
	}
	let TimeCustomList = document.querySelectorAll(elemento+"[class*=ui-duration]");
	for(let element of TimeCustomList)
	{
		let positionStart = element.className.indexOf("ui-duration(")+12;
		let positionEnd = element.className.indexOf(")",positionStart);
		let number = parseInt(element.className.substring(positionStart,positionEnd));
		element.style.animationDuration = number+"s";
	}
	let modalActiveList = document.querySelectorAll(elemento+".ui-modal");
	for(let element of modalActiveList)
	{
		let positionStart = element.className.indexOf("#");
		let positionEnd = (element.className.indexOf(" ",positionStart)==-1)?element.className.length:element.className.indexOf(" ",positionStart);
		if(positionStart != -1)
		{
			element.setAttribute("openBy","Modal"+parseInt(Math.random()*1000));
			let name = element.className.substring(positionStart,positionEnd);
			let obj = document.querySelector(name);
			obj.setAttribute("open",element.getAttribute("openBy"));
			obj.addEventListener("click",function()
			{
				let contenedor = document.querySelector("*[openby="+this.getAttribute("open")+"]");
				let back = document.createElement("div");
				back.setAttribute("class","ui-backmodal");
				if(contenedor.parentNode.innerHTML.indexOf("class=\"ui-backmodal\"") == -1)
					contenedor.parentNode.appendChild(back);
				contenedor.style.display = "block";
				document.querySelector(".ui-backmodal").style.display = "block";
			});
		}
		let cerrarList = element.querySelectorAll(".ui-close,.ui-closebutton");
		if(cerrarList.length > 0)
		{
			for(let cerrar of cerrarList)
			{
				cerrar.addEventListener("click",function()
				{
					this.parentNode.style.display = "none";
					document.querySelector(".ui-backmodal").style.display = "none";
				});
			}
		}
	}
	let collapseActiveList = document.querySelectorAll(elemento+".ui-collapse");
	for(let element of collapseActiveList)
	{
		let positionStart = element.className.indexOf("#");
		let positionEnd = (element.className.indexOf(" ",positionStart)==-1)?element.className.length:element.className.indexOf(" ",positionStart);
		if(positionStart != -1)
		{
			element.setAttribute("openBy","Collapse"+parseInt(Math.random()*1000));
			let name = element.className.substring(positionStart,positionEnd);
			let obj = document.querySelector(name);
			obj.setAttribute("open",element.getAttribute("openBy"));
			obj.addEventListener("click",function()
			{
				let contenedor = document.querySelector("*[openby="+this.getAttribute("open")+"]");
				if(contenedor.className.indexOf("aparece") == -1)
				{
					contenedor.className += " aparece";
				}else
				{
					contenedor.className = contenedor.className.replace(" aparece","");
				}
			});
		}
	}
	let wizardActiveList = document.querySelectorAll(elemento+".ui-wizard");
	for(let element of wizardActiveList)
	{
		let stepProcess = document.createElement("div");
		stepProcess.className = "stepProcess";
		let list = element.querySelectorAll(".ui-step");
		if(element.id == "")
		{
			element.id = "Wizard-"+parseInt(Math.random()*1000);
		}
		for(let a = 0;a < list.length;a++)
		{
			if(element.className.indexOf("ui-info") == -1)
				stepProcess.innerHTML+="<span class='ui-button stepCircle "+((a==0)?"ui-info":"")+"' step='"+(a+1)+"'>"+(+a+1)+"</span>";
			else
				stepProcess.innerHTML+="<span class='ui-button stepCircle "+((a==0)?"ui-confirm":"")+"' step='"+(a+1)+"'>"+(+a+1)+"</span>";
			if(a < list.length-1)
			{
				stepProcess.innerHTML += "<span class='lineWizard'></span>";
			}
			if(a==0)
				list[a].style.display = "block";
			else
				list[a].style.display = "none";
			list[a].setAttribute("step",a+1);
			let nextButton = list[a].querySelector(".ui-nextstep");
			nextButton.setAttribute("byStep",a+2);
			nextButton.setAttribute("byWizard",element.id);
			nextButton.addEventListener("click",function()
			{
				let contenedor = document.querySelector("#"+this.getAttribute("byWizard"));
				let childStepList = contenedor.querySelectorAll(".ui-step");
				let listCircle = contenedor.querySelectorAll(".stepCircle");
				for(let ele of listCircle)
				{
					ele.className= "ui-button stepCircle ";
					if(ele.getAttribute("step") == this.getAttribute("byStep"))
					{
						if(contenedor.className.indexOf("ui-info") == -1)
							ele.className += "ui-info";
						else
							ele.className += "ui-confirm";
					}
				}
				let numEle  = 0;
				for(let ele of childStepList)
				{
					ele.style.display="none";
					numEle++;
					if(this.getAttribute("byStep") == ele.getAttribute("step"))
					{
						ele.style.display = "block";
						numEle--;
					}
				}
				if(numEle >= childStepList.length)
					contenedor.querySelector(".stepProcess").remove();
			});
		}
		element.appendChild(stepProcess);
		let listCircle = element.querySelectorAll(".stepCircle");
		if(element.className.indexOf("ui-unordered") != -1)
		{
			for(let ele of listCircle)
			{
				ele.addEventListener("click",function()
				{
					let contenedor = this.parentNode.parentNode;
					let paso = this.getAttribute("step");
					let childStepList = contenedor.querySelectorAll(".ui-step");
					for(let ele of childStepList)
					{
						ele.style.display="none";
						if(paso == ele.getAttribute("step"))
						{
							ele.style.display = "block";
						}
					}
					let listCircle = contenedor.querySelectorAll(".stepCircle");
					for(let ele of listCircle)
					{
						ele.className= "ui-button stepCircle ";
						if(paso == ele.getAttribute("step"))
						{
							if(contenedor.className.indexOf("ui-info") == -1)
								ele.className += "ui-info";
							else
								ele.className += "ui-confirm";
						}
					}
				});
			}
		}
	}
	let paginationActiveList = document.querySelectorAll(elemento+".ui-pagination");
	for(let element of paginationActiveList)
	{
		let number = 5;
		let positionStart = element.className.indexOf("ui-length(")+10;
		if(positionStart != -1)
		{
			let positionEnd = element.className.indexOf(")",positionStart);
			number = parseInt(element.className.substring(positionStart,positionEnd));		
		}
		let listContent = element.querySelectorAll("div");
		let totalPage = listContent.length/number;
		for(let a = 0;a < listContent.length;a++)
		{
			if(a >= 0 && a < number)
			{
				listContent[a].style.display = "block";
			}else
			{
				listContent[a].style.display = "none";
			}
		}
		let pageContainer = document.createElement("div");
		pageContainer.className = "ui-btngroup";
		pageContainer.setAttribute("totalContain",listContent.length);
		pageContainer.setAttribute("eachContain",number);
		for(let a = 0;a < totalPage;a++)
		{
			let pageInside = document.createElement("span");
			pageInside.className = "ui-button";
			pageInside.innerHTML = (a+1);
			pageInside.addEventListener("click",function()
			{
				let total = this.parentNode.getAttribute("totalContain");
				let each = this.parentNode.getAttribute("eachContain");
				let pageBegin = (parseInt(this.innerHTML)-1)*each;
				let pageEnd = (pageBegin+parseInt(each)>total)?total:pageBegin+parseInt(each);
				for(let a = 0;a < listContent.length;a++)
				{
					if(a >= pageBegin && a < pageEnd)
					{
						listContent[a].style.display = "block";
					}else
					{
						listContent[a].style.display = "none";
					}
				}
			});
			pageContainer.appendChild(pageInside);
		}
		element.appendChild(pageContainer);
	}
}
function UIDeskLoadFunc(IDname)
{
	loadUIFunc(IDname);
}