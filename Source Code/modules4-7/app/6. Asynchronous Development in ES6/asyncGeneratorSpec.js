describe('async generators', function () {

  it('should be difficult to read with regular async code', function() {
    // STEP 1
    // console.log('start');
    // pause(500);
    // console.log('middle');
    // pause(500);
    // console.log('end');

    // STEP 2
    console.log('start');
    pause(500, function() {
      console.log('middle');
      pause(500, function() {
        console.log('end');
      });
    });
  });

  // STEP 3
  // it('should be easier to read with generators', function(done) {
  //   window.taskDone = false;
  //   function* main() {
  //     console.log('start');
  //     yield pause(500);
  //     console.log('middle');
  //     yield pause(500);
  //     console.log('end');
      
  //     expect(taskDone).toBe(false);
  //     done();
  //   }

  //   async.run(main);


  // });

  // STEP 4
  // it('should work with returned data', function(done) {
  //   // window.taskDone = false;
  //   function* main() {
  //     try {
  //       var price = yield getStockPrice();
  //       if(price > 45) {
  //         yield executeTrade();
  //       } else {
  //         console.log('trade not made');
  //       }

  //       // expect(taskDone).toBe(true);
  //       done();
  //     } catch(ex) {
  //       console.log('error! ' + ex.message);
  //       done();
  //     }
  //   }

  //   async.run(main);

    
  // });

  /*
  step 4
   */

  it('should also work with promises', function(done) {
    window.taskDone = false;
    function* main() {
      try {
        var price = yield getStockPriceP();
        if(price > 45) {
          yield executeTradeP();
        } else {
          console.log('trade not made');
        }

        // expect(taskDone).toBe(true);
        done();
        // expect(taskDone).toBe(true);
      } catch(ex) {
        console.log('error! ' + ex.message);
        done();
      }
    }

    asyncP.run(main);
  });
});