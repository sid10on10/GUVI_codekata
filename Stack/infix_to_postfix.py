class Stack:
    def __init__(self):
        self.items = []
        
    def push(self,data):
        self.items.append(data)
        
    def pop(self):
        return self.items.pop()
        
    def peek(self):
        return self.items[-1]
        
    def isEmpty(self):
        return self.items == []
        

def isOperand(char):
    return char.isalpha()
    
precedence = {"+":1,"-":1,"*":2,"/":2,"^":3}
    
def inflix_to_postfix(exp):
    result = ""
    stack = Stack()
    
    def notGreater(operator):
        try:
            a = precedence[operator]
            b = precedence[stack.peek()]
            return True if a<=b else False
        except KeyError:
            return False
    
    for char in exp:
        if isOperand(char):
            result+=char
        elif char == "(":
            stack.push(char)
        elif char == ")":
            cpop = stack.pop()
            while(cpop!="("):
                result+=cpop
                cpop = stack.pop()
        else:
            while (not stack.isEmpty() and notGreater(char)):
                result+=stack.pop()
            stack.push(char)
    
    while not stack.isEmpty():
        result += stack.pop()
    
    return result
    
expression = input()
print(inflix_to_postfix(expression))
    