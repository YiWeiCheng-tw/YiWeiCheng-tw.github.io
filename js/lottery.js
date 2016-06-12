var Lottery=function()
{
  var result=new Array(7);
  var userinput=new Array(6);
  var count=0;
  var special=false;
  var final;
  userinput[0] = $('#A').val();
  userinput[1] = $('#B').val();
  userinput[2] = $('#C').val();
  userinput[3] = $('#D').val();
  userinput[4] = $('#E').val();
  userinput[5] = $('#F').val();
  userinput[0]=parseInt(userinput[0]);
  userinput[1]=parseInt(userinput[1]);
  userinput[2]=parseInt(userinput[2]);
  userinput[3]=parseInt(userinput[3]);
  userinput[4]=parseInt(userinput[4]);
  userinput[5]=parseInt(userinput[5]);
  for(var i=0;i<7;i++)//抽出獎號
    {
      var rdm=0;
      do
      {
        var exist=false;
        rdm=Math.floor(Math.random()*49)+1;
        if(result.indexOf(rdm) != -1) exist = true;
      }while(exist);
      result[i]=rdm;
    }
    for(var i=0;i<6;i++)//排序
    {
      for(var j=i+1;j<6;j++)
      {
        if(result[j]<result[i])
        {
          var temp=result[j];
          result[j]=result[i];
          result[i]=temp;
        }
      }
    }
    //判斷中獎情形
    for(var i=0;i<6;i++)
    {
      if(userinput[i]==result[6])
      {
        special=true;
      }
      else if(result.indexOf(userinput[i])!=-1)
      {
        count++;
      }      
    }
    if(special)//有中特別號
    {
      switch(count)
      {
        case 5: final="貳獎: 2,772,235元";break;
        case 4: final="肆獎: 13,392元";break;
        case 3: final="陸獎: 1,000元";break;
        case 2: final="柒獎: 400元";break;
        default: final="槓龜";break;
      }
    }
    else//沒中特別號
    {
      switch(count)
      {
        case 6: final="頭獎: 115,117,107元";break;
        case 5: final="參獎: 56,576元";break;
        case 4: final="伍獎: 1,794元";break;
        case 3: final="普獎: 400元";break;        
        default: final="槓龜";break;
      }
    }

  $('#output1').text(result[0]);
  $('#output2').text(result[1]);
  $('#output3').text(result[2]);
  $('#output4').text(result[3]);
  $('#output5').text(result[4]);
  $('#output6').text(result[5]);
  $('#output7').text(result[6]);
  $('#final').text(final);
}