num=int(input('Enter >>>  '))
total=''
for i in range(1,(2*num)):
    if i<=num:
        total=total+str(i)+' '
    else:
        total=total + str(num -(i-num))+' '


print(total)
         