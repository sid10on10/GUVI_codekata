def infix_to_postfix(exp):
    result = ""
    precedence = {"+":1,"-":1,"*":2,"/":2,"^":3}
    class Stack:
        def __init__(self):
            self.items = []

        def push(self,data):
            self.items.append(data)

        def pop(self):
            return self.items.pop()

        def isEmpty(self):
            return self.items == []

        def peek(self):
            return self.items[-1]

    
    stack = Stack()
    
    def isOperand(char):
        return char.isalpha()
    
    def notGreater(i):
        try:
            a = precedence[i] 
            b = precedence[stack.peek()] 
            return True if a  <= b else False
        except KeyError:
            return False
        
    for char in exp:
        if isOperand(char):
            result += char
        elif char == "(":
            stack.push(char)
        elif char == ")":
            cpop = stack.pop()
            while cpop != "(":
                result+=cpop
                cpop = stack.pop()
        else:
            while(not stack.isEmpty() and notGreater(char)):
                result += stack.pop()
            stack.push(char)
            
    while(not stack.isEmpty()):
        result += stack.pop()
        
    return result


def toPrefix(expr):
    reverse_expr =''
    for c in expr[::-1]:
        if c == '(':
            reverse_expr += ")"
        elif c == ')':
            reverse_expr += "("
        else:
            reverse_expr += c

    reverse_postfix = infix_to_postfix(reverse_expr)

    return reverse_postfix[::-1]

exp = input()
print(toPrefix(exp))