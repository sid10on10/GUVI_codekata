class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
        
class linkedList:
    def __init__(self):
        self.head = None
        
    def printList(self):
        if self.head is None:
            return
        else:
            outarr = []
            temp = self.head
            while(temp):
                outarr.append(temp.data)
                temp = temp.next
            return " ".join(list(map(str,outarr)))
                
    def insertLast(self,data):
        new_node = Node(data)
        if self.head:
            current = self.head
            while(current.next):
                current = current.next
            current.next = new_node
        else:
            self.head = new_node
    
    def insertFirst(self,data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        
    def insertAfter(self,prev,data):
        new_node = Node(data)
        new_node.next = prev.next
        prev.next = new_node
            
    # None<-1<-2<-3<-4<-5
    def reverse(self):
        prev = None
        current = self.head
        while(current):
            following = current.next
            current.next = prev
            prev = current
            current = following
        
        self.head = prev
    
    def length(self):
        counter = 1
        current = self.head
        while(current.next): # use current as with current.next it gives 4
            counter+=1
            current = current.next
        return counter
    
    def getNode(self,data):
        current = self.head
        while(current):
            if current.data == data:
                return current
            else:
                current = current.next
                
    def getNodeIndex(self,index):
        current = self.head
        counter = 0 # 0 based indexing
        while(current):
            if counter == index:
                return current
            current = current.next
            counter+=1
            
    # 1 2 3 4 5 6 7 8 nth node from last = len-n from start
    def nfromlast(self,n):
        size = self.length()
        return self.getNodeIndex(size-n)
        
if __name__ == '__main__':
    llist = linkedList()
    n = int(input())
    arr = list(map(int,input().split()))
    k = int(input())

    
    for i in range(0,len(arr)):
        llist.insertLast(arr[i])
    
    length = llist.length()
    prev = llist.nfromlast(k+1)
    current = llist.nfromlast(k)
    prev.next = current.next
    print(llist.printList())