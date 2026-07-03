# Proyecto: Código Mudo en JavaScript

Este proyecto muestra cómo crear y ejecutar una función en **JavaScript** que aplica un cálculo con deducción del 15% y un ajuste especial para El Salvador (`SV`).

---

## 📘 Descripción general
La función `x(a, b, c)` recibe tres parámetros:

- **a** → valor base (ejemplo: 100).
- **b** → cantidad usada para calcular el 15% (ejemplo: 10).
- **c** → código de país (`"SV"` o `"MX"`).

### Lógica paso a paso
1. Se calcula el 15% de `b` → `d = b * 0.15`.
2. Se resta ese valor a `a`.
3. Si el país (`c`) es `"SV"`, se suma un ajuste fijo de **13**.
4. Si el país es otro, solo se aplica la deducción.

