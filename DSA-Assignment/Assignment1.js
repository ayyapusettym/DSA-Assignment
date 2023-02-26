// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

// Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.

// Q3. Write a program to check if two strings are a rotation of each other?

// Q4. Write a program to print the first non-repeated character from a string?

// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

// Q7. Write a program to convert prefix expression to infix expression.

// Q8. Write a program to check if all the brackets are closed in a given code snippet.

// Q9. Write a program to reverse a stack.

// Q10. Write a program to find the smallest number using a stack.




// 1 
function printpairs(arr,n,sum){
    let count=0;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i]+arr[j]==sum){
                document.write("(" + arr[i] + ", " + arr[j] + ")" + "<br>")
            }
        }
    }
} 
let arr= [1,6,8,2,3,5,-5,13];
let n=arr.length;
let sum=8;
printpairs(arr,n,sum);


// 2
const arr1 = [11,14,17,19,21,20,30];
const reversed = [];
for (let i = arr1.length - 1; i >= 0; i--) {
  reversed.push(arr1[i]);
}
console.log(arr1); 
console.log(reversed); 



// 3
var str1= "MANISHA";
var str2= "ISHAMAN";         
function Rotations(str1,str2){
    return (str1.length == str2.length) && ((str1 + str1).indexOf(str2)!= -1);
}
if(Rotations(str1,str2)){
    document.write("Strings are rotations of each other"+ "<br>");
}
else{
    document.write("Strings are not rotations of each other");
}



// 4
let s= "MANISHAMANI"
function FirstNonRepeat(s){
    for(let i=0;i<s.length;i++){
        if(s.indexOf(s.charAt(i),s.indexOf(s.charAt(i))+1) == -1){
            document.write(s[i]+ "<br>");
            break;
        }
    }
    return
}
FirstNonRepeat(s);



// 5
function towerOfHanoi(n, from_rod, to_rod, aux_rod){
    if (n == 0){
        return;
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
	document.write("Move disk " + n + " from rod " + from_rod + " to rod " + to_rod+"<br/>");
	towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}
var N = 3;
towerOfHanoi(N, 'A', 'C', 'B');



// 6	
let post_exp = "ABC/-AM/N-*";
function isOperator(x){
    switch (x) {
	case '+':
	case '-':
	case '/':
	case '*':
        return true;
    }
    return false;
}
// Convert postfix to Prefix expression
function postToPre(post_exp){
    let s = [];
	let length = post_exp.length;
	for (let i = 0; i < length; i++) {
		if (isOperator(post_exp[i])) {
			let op1 = s[s.length - 1];
			s.pop();
			let op2 = s[s.length - 1];
			s.pop();
			let temp = post_exp[i] + op2 + op1;
			s.push(temp);
		}
		else {
			s.push(post_exp[i] + "");
		}
    }
    let ans = "";
    while (s.length > 0)
    ans += s.pop();
    return ans;
}
document.write("Prefix : " + postToPre(post_exp)+ "<br>");
	
	


// 7	
let exp = "*-A/BC-/AMN";
function isOperator(x){
    switch(x){
        case '+':
		case '-':
		case '*':
		case '/':
		case '^':
		case '%':
			return true;
	}
    return false;
}
function convert(str){
	let stack = [];
	let l = str.length;
	for(let i = l - 1; i >= 0; i--){
		let c = str[i];
        if (isOperator(c)){
            let op1 = stack[stack.length - 1];
			stack.pop()
			let op2 = stack[stack.length - 1];
			stack.pop()
			let temp = "(" + op1 + c + op2 + ")";
			stack.push(temp);
		}
		else{
            stack.push(c + "");
		}
	}
    return stack[stack.length - 1];
}
document.write("Infix : " + convert(exp)+ "<br>");
	
	

// 9
let st = [];
function insert_at_bottom(x){
    if(st.length==0)
    st.push(x);
    else{
        let a = st.pop();
        insert_at_bottom(x);
        st.push(a);
    }         
}
function reverse(){
    if(st.length > 0){
        let x = st.pop();
        reverse();
        insert_at_bottom(x);
    }
}
st.push('11');
st.push('12');
st.push('13');
st.push('14');
st.push('15');
document.write("Original Stack Before<br>");
document.write(st.join(" ")+"<br>");
reverse();
document.write("Stack After Reversed<br>");
document.write(st.join(" ")+ "<br>");



// 8
function BracketsBalanced(expr){
    let stack = [];
    for(let i = 0; i < expr.length; i++){
        let x = expr[i];
        if (x == '(' || x == '[' || x == '{'){
            stack.push(x);
            continue;
        }
        if (stack.length == 0)
            return false;             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break; 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;  
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
    return (stack.length == 0);
} 
let expr = "([{}])"; 
if (BracketsBalanced(expr))
    document.write("Balanced ");
else
    document.write("Not Balanced ");




// 10
function findSmallest(stack1){
    let min=10;
    while(stack1.length>0){
        let item = stack1.pop();
        if(item < min){
            min = item;
        }
    }
    return min;
}
let stack1=[12,5,8,9,23,4,15];
console.log("Stack: ",stack1);
let smallest= findSmallest(stack1);
console.log("Smallest Number:",smallest);