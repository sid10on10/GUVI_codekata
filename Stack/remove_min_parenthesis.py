string = input()
arr = list(string)
class Stack:
    def __init__(self):
        self.items = []
        
    def push(self,data):
        self.items.append(data)
        
    def pop(self):
        return self.items.pop()
        
    def isEmpty(self):
        return self.items == []
        
    def top(self):
        return self.items[-1]
    
    def returnstack(self):
        return self.items
        
    def length(self):
        return len(self.items)
        
 
mystack =  Stack() 

for i in range(0,len(arr)):
    if arr[i] == "(":
        mystack.push(i)
    elif arr[i] == ")":
        if mystack.length()>0 and arr[mystack.top()] == "(":
            mystack.pop()
        else:
            mystack.push(i)

stackarr = mystack.returnstack()
for i in stackarr:
    arr.pop(i)
    
print("".join(arr))
        