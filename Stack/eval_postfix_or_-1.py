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
        
def eval_postfix(exp):
    stack = Stack()
    digits = "0123456789"
    result = None
    for char in exp:
        try:
            result = None
            if char in digits:
                stack.push(int(char))
            elif isOperator(char) and not stack.isEmpty():
                op1 = stack.pop()
                op2 = stack.pop()
                if char =="+":
                    result = op2 + op1
                elif char =="-":
                    result = op2 - op1
                elif char =="*":
                    result = op2 * op1
                elif char =="/":
                    result = op2 / op1
                elif char =="^":
                    result = op2 ^ op1
            
            if result is not None:
                stack.push(result)
            else:
                 pass
        except:
            return -1
            
    return stack.pop()
    
exp = input()    
print(eval_postfix(exp))