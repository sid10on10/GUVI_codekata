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
        
    def size(self):
        return len(self.items)
        

exp = input()
stack = Stack()

for char in exp:
    if char == "(" or char == "{" or char == "[":
        stack.push(char)
    else:
        if char == ")":
            if stack.peek() == "(":
                stack.pop()
        elif char == "}":
            if stack.peek() == "{":
                stack.pop()
        elif char == "]":
            if stack.peek() == "[":
                stack.pop()
                

if stack.size() !=0:
    print("no")
else:
    print("yes")