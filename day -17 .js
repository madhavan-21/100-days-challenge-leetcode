//1249. Minimum Remove to Make Valid Parentheses
//Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

var minRemoveToMakeValid = function(s) {
    const stack = [];
    for(let i=0;i<s.length;i++){
        if(s[i] === '('){
            stack.push(i);
        }else if(s[i] === ')'){
            if(stack.length && s[stack[stack.length-1]]==='('){
                stack.pop()
            }else{
                stack.push(i)
            }
        }
    }

    let result = '';
    for(let i = 0;i<s.length;i++){
        if(stack.length && i === stack[0]){
            stack.shift();
            continue;
        }
        result +=s[i];

    }
    return result;
};