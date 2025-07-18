var output1;
var output2;

      function vypocet() {
          console.log("hello");
          clear2Dplot();
        
        var sirka = ~~document.getElementById("input1").value;
        var dlzka = ~~document.getElementById("input2").value;
        console.log(sirka,dlzka)
        var isDlzkaModTwoZero = dlzka % 2;

        if((Number.isInteger(sirka) && Number.isInteger(dlzka)) && (sirka > 0 && dlzka > 0) ) 
          {      
              if (isDlzkaModTwoZero == 0) {
                document
                  .getElementById("input2")
                  .setAttribute("class", "form-control form-control-lg is-valid");
                //var sirka =~~document.getElementById("box1").value ;
                // var dlzka =~~document.getElementById("box2").value ;
                var dlzka_pol = dlzka / 2;
                var dlzka_pocetZvys = dlzka / 2 - 1;
                var dlzkaDec = dlzka - 1;
                var sirkaDec = sirka - 1;
//Calc_SPECIFIC CHANGE for num of legs --------------------------------------------------------------------------------------------------------------------
                var result_vypocet =
                  4 + sirkaDec * 4 + dlzka_pocetZvys * 4 + sirkaDec * 4 * dlzka_pocetZvys;
//Calc_SPECIFIC CHANGE for num of legs --------------------------------------------------------------------------------------------------------------------
                //  window.alert("Potrebny pocet noziciek :  " + result_vypocet);
                console.log("hello VYP");
                document.getElementById("output1").value = result_vypocet;
                document.getElementById("output2").value = sirka * (dlzka / 2);
                
                output1 = result_vypocet;
                output2 = sirka * (dlzka / 2);
                
                var printingTitle = document.getElementById("resultForPrinting");
                printingTitle.innerHTML = "Number of Nivtec legs = " + output1 + " | Number of Nivtec decks = " + output2;
                
               render2DPlot();
              } else {
                window.alert("INCORRECT HEIGHT VALUE, HEIGHT MUST BE EVEN LIKE 2, 4, 6 , 8 , 10 !");
                //document
                 // .getElementById("input2")
                 // .setAttribute("class", "form-control is-invalid");
                // document.getElementById("input2").setAttribute("value", "MUSI BYT PARNE CISLO");
              }
          }
        else
          {
            window.alert("PARAMS VALUES ARE INCORRECT!");
          }
      }
      
      function render2DPlot(){
        var sirka = ~~document.getElementById("input1").value;
        var dlzka = ~~document.getElementById("input2").value;
        var dlzka_pol = dlzka / 2;
        
        var riadok = 0;
        var arrayOfCells = [];
        var cellIndex = 1;
        //array of cells rows and first column
       for(let cellDlzka = 0; cellDlzka < dlzka_pol; cellDlzka++)
        {  
//Calc_SPECIFIC CHANGE for num of legs --------------------------------------------------------------------------------------------------------------------  
//Modified call for each cell to createCell(cellDlzka + 1 ,4, "fourLegs", cellIndex); - 4 legs in each cell
            //second column and next++
          for(let cellSirka = 0; cellSirka < sirka ; cellSirka++)
            {
              if(cellDlzka == 0 && riadok == 0 && cellSirka == 0 )
                {
                  arrayOfCells.push(4);
                  createCell(cellDlzka + 1 ,4, "fourLegs", cellIndex);
                  cellIndex++;
                }
              else if(cellDlzka == 0 && riadok == 0 && cellSirka > 0)
                {
                  arrayOfCells.push(2);
                  createCell(cellDlzka + 1 ,4, "fourLegs", cellIndex);
                  cellIndex++;
                }
              else if(cellDlzka > 0 && riadok > 0 && cellSirka == 0)
                {
                  arrayOfCells.push(2);
                  createCell(cellDlzka + 1 ,4, "fourLegs", cellIndex);
                  cellIndex++;
                }
              else if(cellDlzka > 0 && riadok > 0 && cellSirka > 0)
                {
                  arrayOfCells.push(2);
                  createCell(cellDlzka + 1 ,4, "fourLegs", cellIndex);
                  cellIndex++;
                }
              arrayOfCells.push();
            }
           riadok++;
          createNewLine();
        }
        console.log(arrayOfCells);
      }
      
      function createCell(row, numOfLegs, pictureMode, index){
        var element2D_Plot = document.getElementById("plot2D");
  
        var cellWidth = "65px";
        var cellHeight = "140px";
        
            var button = document.createElement("button"); 
            if(pictureMode == "fourLegs")
              {
                 button.setAttribute("style", "width:" + cellWidth + "; height:" + cellHeight + "; display: inline; color: white; background: url(imgs/fourlegs.jpg) no-repeat; background-size: 100% 100%;"); 
                 button.innerHTML = "⚫&nbsp &nbsp⚫ <br>" + index + "<br>" + "R" + row + "  " + "LG" + numOfLegs + " <input type='checkbox' style='height:25px; width:25px;'>" +" <br>⚫&nbsp &nbsp⚫" ;
              }
            
            element2D_Plot.appendChild(button);
      }
      
      function createNewLine(){
        var element2D_Plot = document.getElementById("plot2D");

            var button = document.createElement("br"); 
            element2D_Plot.appendChild(button);
        
      }
      
      function clear2Dplot(){
         var element2D_Plot = document.getElementById("plot2D");
        element2D_Plot.replaceChildren(); 
      }
      
      function printDiv(divName){
            var css = '@page { size: landscape; }',
            head = document.head || document.getElementById('divName')[0],
            style = document.createElement('style');

            style.type = 'text/css';
            style.media = 'print';

            if (style.styleSheet){
              style.styleSheet.cssText = css;
            } else {
              style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);

            window.print();     
		  }
      