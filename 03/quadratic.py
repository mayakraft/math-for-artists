import sys, math

a = float(sys.argv[1])
b = float(sys.argv[2])
c = float(sys.argv[3])

# a = 4
# b = 86
# c = -787

positive = (-b + math.sqrt((b*b) - (4 * a * c))) / (2 * a)
negative = (-b - math.sqrt((b*b) - (4 * a * c))) / (2 * a)

print(positive)
print(negative)
