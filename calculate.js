function CalculateLove() {
    document.getElementById("result").innerHTML = "";
    let ele = document.getElementsByTagName('input');
	let total = 0;
	let temptotal = 0;
	let Qpoint = 0, QOpoint = 0;
	let Wpoint = 0, WOpoint = 0;
	let Ppoint = 0, POpoint = 0;
	let Apoint = 0, AOpoint = 0;
	let Rpoint = 0, ROpoint = 0;
	let DOpoint = 0;

    //QualityTimeCalculate  
    for(i = 5; i < 20; i++) {    //因為QualityTime的單選是input裡第6~20個元件
        if(ele[i].type="radio") { 
            if(ele[i].checked) {
                temptotal += parseInt(ele[i].value);
				}	
        }
    }
	total += temptotal*parseInt(document.getElementById("QualityTime").value)/100;
	Qpoint = temptotal*parseInt(document.getElementById("QualityTime").value)/100;
	QOpoint = temptotal;
	temptotal = 0;		

    //WordsOfAffirmation
    for(i = 20; i < 35; i++) {    //因為WordsOfAffirmation的單選是input裡第21~35個元件
        if(ele[i].type="radio") { 
            if(ele[i].checked) {
                temptotal += parseInt(ele[i].value);
				}		
        }
    }
	total += temptotal*parseInt(document.getElementById("WordsOfAffirmation").value)/100;
	Wpoint = temptotal*parseInt(document.getElementById("WordsOfAffirmation").value)/100;
	WOpoint = temptotal;
	temptotal = 0;		

	//PhysicalTouch
    for(i = 35; i < 50; i++) {    //因為PhysicalTouch的單選是input裡第36~50個元件
        if(ele[i].type="radio") { 
            if(ele[i].checked) {
                temptotal += parseInt(ele[i].value);
				}
        }
    }
	total += temptotal*parseInt(document.getElementById("PhysicalTouch").value)/100;
	Ppoint = temptotal*parseInt(document.getElementById("PhysicalTouch").value)/100;
	POpoint = temptotal;
	temptotal = 0;
		
	//ActsOfService
    for(i = 50; i < 65; i++) {    //因為PhysicalTouch的單選是input裡第51~65個元件
        if(ele[i].type="radio") { 
            if(ele[i].checked) {
                temptotal += parseInt(ele[i].value);
				}
        }
    }
	total += temptotal*parseInt(document.getElementById("ActsOfService").value)/100;
	Apoint = temptotal*parseInt(document.getElementById("ActsOfService").value)/100;
	AOpoint = temptotal;
	temptotal = 0;		
		
	//ReceivingGifts
    for(i = 65; i < 80; i++) {    //因為ReceivingGifts的單選是input裡第66~80個元件
        if(ele[i].type="radio") { 
            if(ele[i].checked) {
                temptotal += parseInt(ele[i].value);
				}
        }
    }
	total += temptotal*parseInt(document.getElementById("ReceivingGifts").value)/100;
	Rpoint = temptotal*parseInt(document.getElementById("ReceivingGifts").value)/100;
	ROpoint = temptotal;
	temptotal = 0;		
		
	//DecisionCommitment
    for(i = 80; i < 95; i++) {    //因為DecisionCommitment的單選是input裡第81~95個元件
        if(ele[i].type="radio") { 
            if(ele[i].checked) {
                temptotal += parseInt(ele[i].value);
				}
        }
    }
	DOpoint = temptotal;
	temptotal = 0;	
		
	document.getElementById("result").innerHTML = "---最低分-6分/滿分6分，您在這段感情獲得 "+Math.round(total*10)/10+" 分---";
	document.getElementById("point").innerHTML = 						
		"愛之語面向(原始分數、換算分數)<br>*表示方式：得分/滿分<br>"+
		"寶貴的相處("+QOpoint+"/6、"+Qpoint+"/"+6*parseInt(document.getElementById("QualityTime").value)/100+")<br>"+
		"肯定與誇讚("+WOpoint+"/6、"+Wpoint+"/"+6*parseInt(document.getElementById("WordsOfAffirmation").value)/100+")<br>"+
		"肢體的接觸("+POpoint+"/6、"+Ppoint+"/"+6*parseInt(document.getElementById("PhysicalTouch").value)/100+")<br>"+
		"實際的服務("+AOpoint+"/6、"+Apoint+"/"+6*parseInt(document.getElementById("ActsOfService").value)/100+")<br>"+
		"能得到禮物("+ROpoint+"/6、"+Rpoint+"/"+6*parseInt(document.getElementById("ReceivingGifts").value)/100+")";						

		
	//柱狀圖
	var ctx = document.getElementById('LoveChart');	
	var LoveChart = new Chart(ctx, {
	  type: 'bar',
	  data: {
		labels: ['寶貴的相處', '肯定與誇讚', '肢體的接觸', '實際的服務', '能得到禮物'],
		datasets: [
			{
			  type: 'bar',	
			  label: '原始分數',
			  data: [QOpoint, WOpoint, POpoint, AOpoint, ROpoint]
				}
			]
	  },
	  options: {
		scales: {
		  yAxes: [{
			ticks: {
			  beginAtZero: true,
			  suggestedMin: -6,
			  suggestedMax: 6,
			  responsive: true //符合響應式
			}
		  }]		  
		}
	  }
	});
		
	//雷達圖			
	var options = {
		responsive: false,
		maintainAspectRatio: true,
		scale: {
			responsive: true,
			ticks: {
				beginAtZero: true,
				max: 12
			}
		}
	};

	var dataLiteracy = {
		labels: [
			"親密", "決定/承諾", "激情"
		],
		datasets: [{
			label: "愛的三因論得分",
			backgroundColor: "rgba(212,147,81,0.2)",
			borderColor: "rgba(212,147,81,1)",
			pointBackgroundColor: "rgba(212,147,81,1)",
			pointBorderColor: "#fff",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgba(212,147,81,1)",
			borderWidth: 1,
			data: [
				(QOpoint+WOpoint+AOpoint+ROpoint+24)/4, DOpoint+6, POpoint+6
			]
		}]
	};

	var ctx = document.getElementById("chartRadar");
	var myRadarChart = new Chart(ctx, {
		type: 'radar',
		data: dataLiteracy,
		options: options
	});	

	console.log(myRadarChart);
		
    }