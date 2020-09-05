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
        return self.items[len(self.items)-1]
    
    def size(self):
        return len(self.items)
        
        
arr = input().split(" ")
mystack = Stack()
for i in arr:
    mystack.push(i)
    
outarr = []
for i in range(0,len(arr)):
    outarr.append(mystack.pop())
    
print(" ".join(outarr))