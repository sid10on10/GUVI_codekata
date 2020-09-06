def evalprefix(exp):
    stack = []
    for char in exp[::-1]:
        if char.isdigit():
            stack.append(int(char))
        else:
            op1 = stack.pop()
            op2 = stack.pop()
            
            if char == "+":
                stack.append(op1+op2)
            elif char == "-":
                stack.append(op1-op2)
            elif char == "*":
                stack.append(op1*op2)
            elif char == "/":
                stack.append(op1/op2)
            elif char == "^":
                stack.append(op1^op2)
            
    return stack.pop()
  
exp = input()  
result = evalprefix(exp)
print(result)