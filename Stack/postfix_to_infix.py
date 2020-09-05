class Stack:
    
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def top(self):
        return self.items[-1]

    def size(self):
        return len(self.items)
    
    def length(self):
        return len(self.items)
        

def isOperator(value):
    string = "+-/*^"
    if value in string:
        return True
    else:
        return False
        
def postfix_to_infix(exp):
    stack = Stack()
    
    for char in exp:
        if isOperator(char):
            op1 = stack.pop()
            op2 = stack.pop()
            temp = op2 + char + op1
            stack.push(temp)
        else:
            stack.push(char)
    
    return stack.pop()
    
exp = input()
print(postfix_to_infix(exp))