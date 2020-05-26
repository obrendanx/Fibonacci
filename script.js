// fibonacci n = n(n-1) + (n-2)
    var a = 0, b = 1, f = 1;
    var total = 0;
    for(var i = 2; i <= 200; i++) {
        f = a + b;
        a = b;
        b = f;
        if(i % 3 == 0){
          total += f
        }
        console.log("f is " + f);
        console.log(total);
        if(f > 4000000){
          console.log("total is: " + f);
          break;
        }
    }

    if(i % 3 == 0){
      total += f
    }
    console.log("f is " + f);
    console.log(total);

    //total if all even numbers added when f is no greater than 4000000 = 4613732
