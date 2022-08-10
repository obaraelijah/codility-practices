A=[-6,-91,1011,-100,84,-22,0,1,473]

def solution(A):
    res=0
    for i in A:
        if len(str(abs(i)))>=2:
            if int(str(i)[-2])%4==0:
                print(i)
                res+=i
        else:
            if i%4==0:
                res+=i
    return res
print(solution(A))



A=[-6,-91,1011,-100,84,-22,0,1,473]

def solution(A):
    max_=float('-inf')
    for i in A:
        if len(str(abs(i)))==1:
            max_=max(max_,i)
       
    return max_
print(solution(A))




