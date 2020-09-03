n = int(input())
arr = list(map(str,input().split(" ")))

class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
        
class LinkedList:
    def __init__(self):
        self.head = None
        
        
    def printList(self):
        outarr = []
        temp = self.head
        while(temp):
            outarr.append(temp.data)
            temp = temp.next
        
        return " ".join(list(map(str,outarr)))
    
    def insert(self,data):
        new_node = Node(data)
        if(self.head):
            current = self.head
            while(current.next):
                current = current.next
            current.next = new_node
        else:
            self.head = new_node

        
    def reverse(self):
        prev = None
        current = self.head
        while(current is not None):
            following = current.next
            current.next = prev
            prev = current
            current = following
        
        self.head = prev
        
    


llist = LinkedList()
for i in range(0,len(arr)):
    llist.insert(arr[i])
    


str1 = llist.printList()
llist.reverse()
str2 = llist.printList()
if(str1==str2):
    print("yes")
else:
    print("no")