function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
  
element = getElementByXpath("/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div/div/div/div[5]/div[1]/a/span[2]/span");
element.click();   // Go to the page of the accounts you follow

// Get the list of those accounts
element = getElementByXpath("/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/section/div/div/div/div");


for (let i = 0; i < element.children.length; i++) {
    let childDiv = element.children[i];
    // console.log(childDiv); // or perform any operation on the child div
    console.log(i)
}
  
console.log("AAA");