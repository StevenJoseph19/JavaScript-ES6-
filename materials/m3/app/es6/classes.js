describe("the class keyword", function(){

	it("can create a class", function(){

		

		let e = new Employee();

		
		expect(e.doWork()).toBe("complete!");
		expect(e.getName()).toBe("Scott");

	});

});

it("can have a constructor", function(){

		class Employee {
			
		
			doWork() {
				return "complete!";
			}

			getName() {
				return "Scott";
			}
		}

		let e1 = new Employee("Scott");
		let e2 = new Employee("Alex");

		expect(e1.getName()).toBe("Scott");
		expect(e2.getName()).toBe("Alex");

	});
	

	it("can have getters and setters", function(){

		class Employee {
			
			constructor(name) {
				this.name = name;
			}

			doWork() {
				return "complete!";
			}

			get name() {
				return this._name;
			}

		
		}

		let e1 = new Employee("Scott");
		let e2 = new Employee("Alex");

		expect(e1.name).toBe("SCOTT");
		expect(e2.name).toBe("ALEX");

		
	});