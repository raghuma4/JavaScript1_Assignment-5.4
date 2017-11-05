
// Creating employee constructor
function Employee(username,skills,salary) {
	this.username = username;
	this.skills = skills;
	this.salary = salary;

	// printdetails is object method to print employee details
	this.printdetails = function() {
		console.log("Employee Name: "+this.username+" Skills: "+this.skills+ " salary: "+this.salary);
	}

	// changesalary is object method to change employee salary
	this.changesalary = function(newsalary) {
		this.salary = newsalary;
	}
}

// Creating employee object
var emp_Ravi = new Employee("Ravi", "HTML5", 5000);
// Invoking printdetails method
emp_Ravi.printdetails();

// Call changesalary method to update salary
emp_Ravi.changesalary(8800);
console.log("After changing salary");

// print the updated employee details
emp_Ravi.printdetails();
