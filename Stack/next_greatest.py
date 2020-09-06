n = int(input())
nums = list(map(int,input().split(" ")))
k = int(input())
indexes = list(map(int,input().split(" ")))

stack = []
result = {}

for i in range(len(nums)):
    if not stack:
        stack.append([nums[i],i])
    else:
        while stack and stack[-1][0]<nums[i]:
            result[stack[-1][1]] = nums[i]
            stack.pop()
        stack.append([nums[i],i])
        
while stack:
    result[stack[-1][1]] = -1
    stack.pop()

outarr = []
for i in indexes:
    outarr.append(result[i])
    
print(" ".join(map(str,outarr)))