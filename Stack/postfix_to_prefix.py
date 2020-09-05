class Stack:
    def __init__(self):
        self.items = []
        
    def push(self,data):
        self.items.append(data)
        
    def pop(self):
        return self.items.pop()
        
    def isEmpty(self):
        return self.items ==[]
        
    def peek(self):
        return self.items[-1]

def isOperator(value):
    string = "+-/*^"
    if value in string:
        return True
    else:
        return False
        
def postfix_to_prefix(expression):
    stack = Stack()
    
    for char in expression:
        if isOperator(char):
            op1 = stack.pop()
            op2 = stack.pop()
            stack.push(char+op2+op1)
        else:
            stack.push(char)
    
    return stack.peek()
  
exp = input()  
print(postfix_to_prefix(exp))
    