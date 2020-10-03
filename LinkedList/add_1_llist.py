n = int(input())
nums = list(map(int,input().split()))

class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
        
class LinkedList:
    def __init__(self):
        self.head = None
        
    def insertLast(self,data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while(current.next):
                current = current.next
                
            current.next = new_node
    
    def printList(self):
        outarr = []
        temp = self.head
        while(temp):
            outarr.append(temp.data)
            temp = temp.next
        
        return "".join(list(map(str,outarr)))
        
    
if __name__=='__main__':
    llist = LinkedList()
    for i in nums:
        llist.insertLast(i)
        
    num = int(llist.printList())
    result = num + 1
    llist.head = None
    for i in str(result):
        llist.insertLast(int(i))
        
    print(llist.printList())
        
        