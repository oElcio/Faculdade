import numpy as np

#Exemplo 1 Soma de matriz(3x3)

A = np.array([[3, 5, 7], 
              [1, 4, 6], 
              [9, 2, 8]])

B = np.array([[6, 3, 1], 
              [7, 2, 0], 
              [5, 8, 4]])

soma1 = A + B
print("A + B =\n", soma1)

#Exemplo 2 Soma de matriz(2x3)
C = np.array([[2, 3, 4], 
              [6, 5, 6]])

D = np.array([[8, 7, 6], 
              [5, 4, 3]])

soma2 = C + D
print("C + D =\n", soma2)

#Exemplo 3 Soma de matriz(2x2)
E = np.array([[4, 9], 
              [3, 2]])

F = np.array([[1, 5], 
              [6, 8]])

soma3 = E + F
print("E + F =\n", soma3)

#Exemplo 4 Subitração de matriz(3x3)

G = np.array([[9, 4, 5], 
              [5, 8, 2], 
              [6, 1, 7]])

H = np.array([[3, 1, 2], 
              [6, 5, 4], 
              [8, 2, 9]])


Subitração1 = G - H
print("G - H =\n", Subitração1)

#Exemplo 5 Subitração de matriz(2x3)
I = np.array([[7, 9, 2], 
              [4, 5, 6]])

J = np.array([[2, 3, 5], 
              [8, 7, 1]])

Subitração2 = J - I
print("I - J =\n", Subitração2)


#Exemplo Soma de matriz(2x3) e matriz(3x2)
AA = np.array([[1, 2, 3], 
              [4, 5, 6]])

BB = np.array([[1, 2], 
              [3, 4], 
              [5, 6]])

produto = np.dot(G, H)
print("AA * BB =\n", produto)
