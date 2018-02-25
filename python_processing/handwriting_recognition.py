import matplotlib.pyplot as plt
from sklearn.datasets import load_digits

digits = load_digits()

import pylab as pl
pl.gray()
pl.matshow(digits.images[0])
pl.show()
