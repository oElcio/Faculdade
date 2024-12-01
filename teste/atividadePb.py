from sklearn.linear_model import LinearRegression
import numpy as np

# Dados da questão
altura_joelho = np.array([27, 23, 25, 32, 19]).reshape(-1, 1)  # X (altura do joelho)
altura_total = np.array([167, 159, 162, 178, 145])  # Y (altura total)

# Ajustar o modelo de regressão linear
model = LinearRegression()
model.fit(altura_joelho, altura_total)

# Prever a altura total para uma altura do joelho de 40 cm
altura_pred = model.predict(np.array([[40]]))[0]

print(f"Previsão da altura para uma altura do joelho de 40 cm: {altura_pred:.1f} cm")