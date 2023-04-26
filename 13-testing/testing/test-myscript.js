describe("Tesing the functions in myscript", function() {

  describe("testing enter() function", function() {
    it("should access the x and y operands of the form and set result to 2", function() {
      // Given the test scenario
      const body = document.getElementsByTagName("body")[0];
      const myform = document.createElement("form");
      myform.name = "myform";
      body.appendChild(myform);
      const inputx = document.createElement("input");
      inputx.name = "xoperand";
      inputx.value = "4";
      myform.appendChild(inputx);
      const inputy = document.createElement("input");
      inputy.name = "yoperand";
      inputy.value = "2";
      myform.appendChild(inputy);
      const resultElement = document.createElement("div");
      resultElement.id = "result";
      body.appendChild(resultElement);
      // When invoke the enter() function
      enter();
      // Then we can validate the result
      expect(document.getElementById("result").innerHTML).toBe('2');
    });
  });
  
});
