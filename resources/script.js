
var url="ws://localhost:3000/mock/85426";
var ws;

function postData(isError){

        var dest=$("#dest").val();
        var serial=$("#serial").val();
        var account=$("#account").val();
        var micr=$("#micr").val();
        var amount=$("#amount").val();


        var dest2=$("#dest2").val();
        var serial2=$("#serial2").val();
        var account2=$("#account2").val();
        var micr2=$("#micr2").val();
        var amount2=$("#amount2").val();

        if(isError){
        var data={"id":dest2,"serial":serial2,"account":account2,"micr":micr2,"amount":amount2,"status":true}
                var message = JSON.stringify(data);
                console.log(data)
                ws.send(message);
        }
        else{
        var data={"id":dest,"serial":serial,"account":account,"micr":micr,"amount":amount,"status":false}
                var message = JSON.stringify(data);
                console.log(data)
                ws.send(message);
        }

       

}

function opneSocket(){
        ws = new WebSocket(url);
        ws.onopen=onOpenWs;
        ws.onmessage=onMessageWs;
        ws.onclose=onCloseWs;
}
 function onOpenWs() {
   console.log("Socket Opened..");
  };
 function onMessageWs(e) {
    console.log("Data arrived..");
  };
  function onCloseWs() {
   console.log("Socket Closed..");
  };

opneSocket();