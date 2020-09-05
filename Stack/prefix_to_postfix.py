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
    string = "+-*/^"
    if value in string:
        return True
    else:
        return False
        
def prefix_to_postfix(exp):
    stack = Stack()
    exp = exp[::-1]
    for char in exp:
        if isOperator(char):
            op1 = stack.pop()
            op2 = stack.pop()
            temp = op1 + op2 + char
            stack.push(temp)
        else:
            stack.push(char)
    
    return stack.pop()
    
exp = input()    
print(prefix_to_postfix(exp))