describe("how let works", function(){

	it("will provide block scoping, unlike var", function(){

		var doWork = function(flag){
			// var x = undefined;
			if(flag){
				let x = 3;
					// var x = 3;
				return x;
			}
			// return x;
		};

		var result = doWork(true);
		expect(result).toBe(3);
	});


	it("will provide block scoping with for", function(){

		var doWork = function(){

			// for (let i = 0; i < 10; i++){
			  for (var i = 0; i < 10; i++) {
					// return i;	
			}
			
			/* return i won't work */
			// return 0;		
			return i;	
		};

		var result = doWork();
		expect(result).toBe(10);

	});
	
	 it("will make a variable read-only", function() {  	
  	
    const MAX_SIZE = 10;
	    
    // MAX_SIZE = 12; //SyntaxError
    
    expect(MAX_SIZE).toBe(10);

	 });
	
// 	 it("can shadow outer declaration", function() {  	
  	
//   		// const x = 12;
//     	var doWork = function(){
    		
//         let x = 12;
//         var x = 10;
//     		return x;
//     	};

//     	var result = doWork();
//     	expect(result).toBe(10);
//     	// expect(x).toBe(12);
//    });
});

