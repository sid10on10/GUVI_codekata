n = int(input())
arr = list(map(int,input().split(" ")))

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
        
        print(" ".join(list(map(str,outarr))))
    
    def insert(self,data):
        new_node = Node(data)
        if(self.head):
            current = self.head
            while(current.next):
                current = current.next
            current.next = new_node
        else:
            self.head = new_node
            
    def insertFront(self,data):
        new_node = Node(data)
        new_node.next = self.head
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
        
    def deleteMid(self): 
  
        # Base cases 
        if (self.head is None or 
            self.head.next is None): 
            return
  
        # Initialize slow and fast pointers 
        # to reach middle of linked list 
        slow_Ptr = self.head 
        fast_Ptr = self.head 
  
        # Find the middle and previous of middle 
        prev = None
  
        # To store previous of slow pointer 
        while (fast_Ptr.next is not None and 
               fast_Ptr.next.next is not None): 
            fast_Ptr = fast_Ptr.next.next
            prev = slow_Ptr 
            slow_Ptr = slow_Ptr.next
  
        # Delete the middle node 
        prev.next = slow_Ptr.next


llist = LinkedList()
for i in range(0,len(arr)):
    llist.insert(arr[i])
    

llist.deleteMid()
llist.printList()