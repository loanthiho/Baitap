function functionOK() {
    var y = document.getElementById("year");
    var hk1 = parseInt(document.getElementById("s1").value);
    var hk2 = parseInt(document.getElementById("s2").value);
    var value = y[y.selectedIndex].value;
    var result;
  
    switch (value) {
      case "1": {
        result = ((hk1 + (hk2 * 2)) / 3);
    document.getElementById("sum").value=result;
  
        break;
      }
      case "2": {
        result = ((hk1 + (hk2 * 3)) / 4);
    document.getElementById("sum").value=result;
  
        break;
      }
      case "3": {
        result = ((hk1 + (hk2 * 4)) / 5);
    document.getElementById("sum").value=result;
  
        break;
      }
    }
    
  }
  
  function functionCancel() {
    document.getElementById('s1').value = "";
    document.getElementById('s2').value = "";
    document.getElementById('sum').value = "";
  }