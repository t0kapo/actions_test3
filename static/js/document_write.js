function button_action(){
    var element = document.getElementById("sink_element");
    console.log(element);
    document.write(mypolicy.createHTML(element.value));
}
